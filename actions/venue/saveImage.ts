"use server";

import { ErrorResponse, Session } from "@/types";
import { colorStatus } from "@/utils/colorStatus";
import { sessionCheck } from "@/utils/sessionCheck";
import { Logger, ILogObj } from "tslog";

export const saveImage = async (venueId: number, formData: FormData): Promise<ErrorResponse> => {
  const logger: Logger<ILogObj> = new Logger({
    hideLogPositionForProduction: true,
    name: "actions/venue/saveImage.ts",
  });

  const sessionResult = await sessionCheck();
  if ((sessionResult as ErrorResponse).error) return sessionResult as ErrorResponse;

  try {
    const res = await fetch(`${process.env.HOST}/images/${venueId}`, {
      method: "POST",
      body: formData,
      headers: { Authorization: `Bearer ${(sessionResult as Session).jwt}` },
    });

    logger.info(`got ${colorStatus(res.status)} from /images/${venueId}`);

    const data = await res.json();
    return data;
  } catch (error) {
    logger.error(`Exception caught error: ${error instanceof Error ? error.message : String(error)}`);
    return { status: 503, error: "Internal Server Error", message: "Server is offline" };
  }
};
