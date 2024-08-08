"use server";
import { ErrorResponse, Session } from "@/types";
import { cookies } from "next/headers";
import { Logger, ILogObj } from "tslog";

export const sessionCheck = async function (): Promise<Session | ErrorResponse> {
  const logger: Logger<ILogObj> = new Logger({
    hideLogPositionForProduction: true,
    name: "utils/sessionCheck.ts",
  });

  const myCookies = cookies();

  const cookieSession = myCookies.get("session");

  if (!cookieSession) {
    logger.error("session is null");
    return { status: 401, error: "Unauthorized", message: "Please login and try again" };
  }

  const { value } = cookieSession;

  if (!value) {
    logger.error("value from session is empty");
    return { status: 401, error: "Unauthorized", message: "Please login and try again" };
  }

  const session = JSON.parse(value);

  return session;
};
