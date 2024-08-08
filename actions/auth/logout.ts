"use server";
import { cookies } from "next/headers";
import { Logger, ILogObj } from "tslog";
export const logoutUser = async () => {
  const logger: Logger<ILogObj> = new Logger({
    hideLogPositionForProduction: true,
    name: "actions/venue/getVenues.ts",
  });
  const myCookies = cookies();

  if (!myCookies.get("session")) {
    return { jwt: null };
  }
  // myCookies.set("session", null);
  myCookies.delete("session");
};
