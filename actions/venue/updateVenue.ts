"use server";
import { DoRequest, ErrorResponse, VenueItemProp } from "@/types";
import { doRequest } from "@/utils/doRequest";
import { Logger, ILogObj } from "tslog";

export const updateVenue = async (body: VenueItemProp): Promise<{ status: "success" } | ErrorResponse> => {
  const logger: Logger<ILogObj> = new Logger({
    hideLogPositionForProduction: true,
    name: "actions/venue/updateVenue.ts",
  });

  const requestOptions: DoRequest = {
    method: "PUT",
    uri: `/venue/${body.id}`,
    body,
    session: true,
  };

  const response = await doRequest<{ status: "success" }>(requestOptions);

  if ((response as ErrorResponse).error) {
    logger.error("Error while adding venue");
    return response as ErrorResponse;
  }

  const data = response as { status: "success" };

  return data;
};
