"use server";
import { DoRequest, ErrorResponse, VenueItemProp } from "@/types";
import { doRequest } from "@/utils/doRequest";
import { Logger, ILogObj } from "tslog";

export const getSingleVenue = async (id: number): Promise<VenueItemProp | ErrorResponse> => {
  const logger: Logger<ILogObj> = new Logger({
    hideLogPositionForProduction: true,
    name: "actions/venue/getSingleVenue.ts",
  });

  const requestOptions: DoRequest = {
    method: "GET",
    uri: `/venue/${id}`,
    body: undefined,
    session: false,
  };

  const response = await doRequest<VenueItemProp>(requestOptions);

  if ((response as ErrorResponse).error) {
    logger.error("Error while fetching venue");
    return response as ErrorResponse;
  }

  return response;
};
