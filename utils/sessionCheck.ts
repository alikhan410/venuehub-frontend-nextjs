"use server";
import { ErrorResponse, Session } from "@/types";
import { cookies } from "next/headers";

export const sessionCheck = async function (): Promise<Session | ErrorResponse> {
  const myCookies = cookies();

  const cookieSession = myCookies.get("session");

  if (!cookieSession) {
    console.log("session is null - utils/sessionCheck.js");
    return { status: 401, error: "Unauthorized", message: "Please login and try again" };
  }

  const { value } = cookieSession;

  if (!value) {
    console.log("value from session is empty - utils/sessionCheck.js");
    return { status: 401, error: "Unauthorized", message: "Please login and try again" };
  }

  const session = JSON.parse(value);

  return session;
};
