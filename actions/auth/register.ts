"use server";
import { Logger, ILogObj } from "tslog";
import { ErrorResponse, LoginResponse, UserDetails, VendorDetails } from "@/types";
import { cookies } from "next/headers";
import { colorStatus } from "@/utils/colorStatus";

export const register = async (endpoint: string, userDetails: UserDetails): Promise<LoginResponse | ErrorResponse> => {
  const logger: Logger<ILogObj> = new Logger({
    hideLogPositionForProduction: true,
    name: "actions/auth/signup.ts",
  });
  const myCookies = cookies();
  if (myCookies.get("session")) {
    myCookies.delete("session");
  }

  try {
    const res = await fetch(`${process.env.HOST}${endpoint}`, {
      cache: "no-store",
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: {
        "Content-Type": "application/json",
      },
    });

    logger.info(`got ${colorStatus(res.status)} from ${endpoint}`);

    const data = (await res.json()) as LoginResponse | ErrorResponse;

    if (res.status != 201) {
      myCookies.delete("session");
      return data as ErrorResponse;
    }

    const session = { jwt: (data as LoginResponse).jwt };
    myCookies.set("session", JSON.stringify(session));

    return data as LoginResponse;
  } catch (error) {
    return { status: 503, error: "Internal Server Error", message: "Server is offline" };
  }
};

// export const signupVendor = async (vendorDetails: VendorDetails) => {
//   const logger: Logger<ILogObj> = new Logger({
//     hideLogPositionForProduction: true,
//     name: "actions/venue/getVenues.ts",
//   });
//   const myCookies = cookies();
//   if (myCookies.get("session")) {
//     myCookies.delete("session");
//   }
//   try {
//     const res = await fetch(`${process.env.HOST}/vendor/register`, {
//       cache: "no-store",
//       method: "POST",
//       body: JSON.stringify(vendorDetails),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (res.status != 201) {
//       const data = await res.json();
//       myCookies.delete("session");
//       return data;
//     }

//     console.log(`got ${res.status} from vendor/register - IN SIGNUP ACTIONS`);
//     const currentUser = await res.json();
//     const session = { jwt: currentUser.jwt };
//     myCookies.set("session", JSON.stringify(session));

//     return currentUser;
//   } catch (error) {
//     return { status: 503, error: "Internal Server Error", message: "Server is offline" };
//   }
// };
