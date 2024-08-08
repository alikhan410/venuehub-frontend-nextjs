"use server";
import { Logger, ILogObj } from "tslog";
const logger: Logger<ILogObj> = new Logger({
  hideLogPositionForProduction: true,
  name: "actions/venue/getVenues.ts",
});
import { UserDetails, VendorDetails } from "@/types";
import { cookies } from "next/headers";

export const signupUser = async (userDetails: UserDetails) => {
  const logger: Logger<ILogObj> = new Logger({
    hideLogPositionForProduction: true,
    name: "actions/venue/getVenues.ts",
  });
  const myCookies = cookies();
  if (myCookies.get("session")) {
    myCookies.delete("session");
  }

  try {
    const res = await fetch(`${process.env.HOST}/user/register`, {
      cache: "no-store",
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status != 201) {
      const data = await res.json();
      myCookies.delete("session");
      return data;
    }

    console.log(`got ${res.status} from user/register - IN SIGNUP ACTIONS`);

    const currentUser = await res.json();
    const session = { jwt: currentUser.jwt };
    myCookies.set("session", JSON.stringify(session));

    return currentUser;
  } catch (error) {
    return { status: 503, error: "Internal Server Error", message: "Server is offline" };
  }
};

export const signupVendor = async (vendorDetails: VendorDetails) => {
  const logger: Logger<ILogObj> = new Logger({
    hideLogPositionForProduction: true,
    name: "actions/venue/getVenues.ts",
  });
  const myCookies = cookies();
  if (myCookies.get("session")) {
    myCookies.delete("session");
  }
  try {
    const res = await fetch(`${process.env.HOST}/vendor/register`, {
      cache: "no-store",
      method: "POST",
      body: JSON.stringify(vendorDetails),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status != 201) {
      const data = await res.json();
      myCookies.delete("session");
      return data;
    }

    console.log(`got ${res.status} from vendor/register - IN SIGNUP ACTIONS`);
    const currentUser = await res.json();
    const session = { jwt: currentUser.jwt };
    myCookies.set("session", JSON.stringify(session));

    return currentUser;
  } catch (error) {
    return { status: 503, error: "Internal Server Error", message: "Server is offline" };
  }
};
