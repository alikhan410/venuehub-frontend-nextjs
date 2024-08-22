"use server";
import { DoRequest, ErrorResponse, VenueItemProp } from "@/types";
import { doRequest } from "@/utils/doRequest";
import { Logger, ILogObj } from "tslog";

export const addVenue = async (
  body: VenueItemProp
): Promise<{ status: "success"; venueId: number } | ErrorResponse> => {
  const logger: Logger<ILogObj> = new Logger({
    hideLogPositionForProduction: true,
    name: "actions/venue/addVenue.ts",
  });

  const requestOptions: DoRequest = {
    method: "POST",
    uri: "/venue",
    body,
    session: true,
  };

  const response = await doRequest<{ status: "success"; venueId: number }>(requestOptions);

  if ((response as ErrorResponse).error) {
    logger.error("Error while adding venue");
    return response as ErrorResponse;
  }

  const data = response as { status: "success"; venueId: number };

  return data;
};
