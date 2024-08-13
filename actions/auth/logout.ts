"use server";
import { cookies } from "next/headers";
import { Logger, ILogObj } from "tslog";
export const logoutUser = () => {
  const logger: Logger<ILogObj> = new Logger({
    hideLogPositionForProduction: true,
    name: "actions/auth/logout.ts",
  });

  const myCookies = cookies();

  if (!myCookies.get("session")) {
    return { jwt: null };
  }
  // myCookies.set("session", null);
  myCookies.delete("session");
  logger.info("Current user logged out");
};
