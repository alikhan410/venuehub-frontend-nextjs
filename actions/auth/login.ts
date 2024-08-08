"use server";

import { ErrorResponse, LoginResponse } from "@/types";
import { cookies } from "next/headers";
import { Logger, ILogObj } from "tslog";
const logger: Logger<ILogObj> = new Logger({
  hideLogPositionForProduction: true,
  name: "actions/venue/getVenues.ts",
});
export const loginUser = async (username: string, password: string): Promise<LoginResponse | ErrorResponse> => {
  const logger: Logger<ILogObj> = new Logger({
    hideLogPositionForProduction: true,
    name: "actions/venue/getVenues.ts",
  });
  const myCookies = cookies();
  if (myCookies.get("session")) {
    myCookies.delete("session");
  }
  const userCredentials = { username, password };
  try {
    const res = await fetch(`${process.env.HOST}/user/login`, {
      cache: "no-store",
      method: "POST",
      body: JSON.stringify(userCredentials),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(`got ${res.status} from user/login - IN LOGIN ACTIONS`);

    const data = (await res.json()) as LoginResponse | ErrorResponse;

    console.log(data);

    if (res.status != 200) {
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

export const loginVendor = async (username: String, password: String) => {
  const logger: Logger<ILogObj> = new Logger({
    hideLogPositionForProduction: true,
    name: "actions/venue/getVenues.ts",
  });
  const myCookies = cookies();
  if (myCookies.get("session")) {
    myCookies.delete("session");
  }

  const userCredentials = { username, password };

  try {
    const res = await fetch(`${process.env.HOST}/vendor/login`, {
      cache: "no-store",
      method: "POST",
      body: JSON.stringify(userCredentials),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    console.log(data);
    console.log(`got ${res.status} from vendor/login - IN LOGIN ACTIONS`);

    if (res.status != 200) {
      myCookies.delete("session");
      return data;
    }

    const session = { jwt: data.jwt };
    myCookies.set("session", JSON.stringify(session));

    return data;
  } catch (error) {
    return { status: 503, error: "Internal Server Error", message: "Server is offline" };
  }
};
