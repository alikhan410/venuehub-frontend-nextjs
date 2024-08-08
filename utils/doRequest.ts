"use server";

import { DoRequest, ErrorResponse, Session } from "@/types";
import { sessionCheck } from "./sessionCheck";
import { Logger, ILogObj } from "tslog";

export const doRequest = async <T>({
  method,
  uri,
  body = undefined,
  session = false,
}: DoRequest): Promise<T | ErrorResponse> => {
  const logger: Logger<ILogObj> = new Logger({
    hideLogPositionForProduction: true,
    name: "utils/doRequest.ts",
  });

  let fetchOptions: RequestInit = {
    cache: "no-store",
    method: method,
    body: body ? JSON.stringify(body) : undefined,
    headers: {},
  };

  if (body) {
    fetchOptions.headers = { "Content-Type": "application/json" };
  }

  if (session) {
    const sessionResult = await sessionCheck();
    if ((sessionResult as ErrorResponse).error) return sessionResult as ErrorResponse;
    fetchOptions.headers = { ...fetchOptions.headers, Authorization: `Bearer ${(sessionResult as Session).jwt}` };
  }

  try {
    const res = await fetch(`${process.env.HOST}${uri}`, fetchOptions);

    logger.info(`got ${res.status} from ${uri}`);

    const data = await res.json();
    return data;
  } catch (error) {
    logger.error("Exception caught");
    return { status: 503, error: "Internal Server Error", message: "Server is offline" };
  }
};
