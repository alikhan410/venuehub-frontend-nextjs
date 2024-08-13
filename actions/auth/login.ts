"use server";

import { ErrorResponse, LoginResponse } from "@/types";
import { colorStatus } from "@/utils/colorStatus";
import { cookies } from "next/headers";
import { Logger, ILogObj } from "tslog";

// export const loginUser = async (username: string, password: string): Promise<LoginResponse | ErrorResponse> => {
//   const logger: Logger<ILogObj> = new Logger({
//     hideLogPositionForProduction: true,
//     name: "actions/login/loginUser.ts",
//   });
//   const myCookies = cookies();
//   if (myCookies.get("session")) {
//     myCookies.delete("session");
//   }
//   const userCredentials = { username, password };
//   try {
//     const res = await fetch(`${process.env.HOST}/user/login`, {
//       cache: "no-store",
//       method: "POST",
//       body: JSON.stringify(userCredentials),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     logger.info(`got ${colorStatus(res.status)} from /user/login`);

//     const data = (await res.json()) as LoginResponse | ErrorResponse;

//     if (res.status != 200) {
//       myCookies.delete("session");
//       return data as ErrorResponse;
//     }

//     const session = { jwt: (data as LoginResponse).jwt };
//     myCookies.set("session", JSON.stringify(session));

//     return data as LoginResponse;
//   } catch (error) {
//     logger.error("Error while logging in user");
//     return { status: 503, error: "Internal Server Error", message: "Server is offline" };
//   }
// };

// export const loginVendor = async (username: String, password: String) => {
//   const logger: Logger<ILogObj> = new Logger({
//     hideLogPositionForProduction: true,
//     name: "actions/venue/getVenues.ts",
//   });
//   const myCookies = cookies();
//   if (myCookies.get("session")) {
//     myCookies.delete("session");
//   }

//   const userCredentials = { username, password };

//   try {
//     const res = await fetch(`${process.env.HOST}/vendor/login`, {
//       cache: "no-store",
//       method: "POST",
//       body: JSON.stringify(userCredentials),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     logger.info(`got ${colorStatus(res.status)} from /vendor/login`);

//     const data = await res.json();

//     console.log(data);

//     if (res.status != 200) {
//       myCookies.delete("session");
//       return data;
//     }

//     const session = { jwt: data.jwt };
//     myCookies.set("session", JSON.stringify(session));

//     return data;
//   } catch (error) {
//     logger.error("Error while logging in vendor");
//     return { status: 503, error: "Internal Server Error", message: "Server is offline" };
//   }
// };
export const login = async (
  endpoint: string,
  username: string,
  password: string
): Promise<LoginResponse | ErrorResponse> => {
  const logger: Logger<ILogObj> = new Logger({
    hideLogPositionForProduction: true,
    name: "actions/auth/login.ts",
  });

  const myCookies = cookies();
  if (myCookies.get("session")) {
    myCookies.delete("session");
  }

  const userCredentials = { username, password };

  try {
    const res = await fetch(`${process.env.HOST}${endpoint}`, {
      cache: "no-store",
      method: "POST",
      body: JSON.stringify(userCredentials),
      headers: {
        "Content-Type": "application/json",
      },
    });
    logger.info(`got ${colorStatus(res.status)} from ${endpoint}`);

    const data = (await res.json()) as LoginResponse | ErrorResponse;

    if (res.status != 200) {
      myCookies.delete("session");
      return data as ErrorResponse;
    }

    const session = { jwt: (data as LoginResponse).jwt };
    myCookies.set("session", JSON.stringify(session));

    return data as LoginResponse;
  } catch (error) {
    logger.error(`Error while logging in from ${endpoint}`);
    return { status: 503, error: "Internal Server Error", message: "Server is offline" };
  }
};
