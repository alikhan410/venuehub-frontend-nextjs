"use server";
import { DoRequest, ErrorResponse, VenueItemProp, VenueProps, VenuePropsList } from "@/types";
import { doRequest } from "@/utils/doRequest";
import { Logger, ILogObj } from "tslog";

export const getVendorVenue = async (): Promise<VenueItemProp[] | ErrorResponse> => {
  const logger: Logger<ILogObj> = new Logger({
    hideLogPositionForProduction: true,
    name: "actions/venue/getVendorVenue.ts",
  });

  const requestOptions: DoRequest = {
    method: "GET",
    uri: "/venue/vendor/all-venue",
    body: undefined,
    session: true,
  };

  const response = await doRequest<{ venueList: VenueItemProp[] }>(requestOptions);

  if ((response as ErrorResponse).error) {
    logger.error("Error while fetching venues");
    return response as ErrorResponse;
  }

  const data = response as { venueList: VenueItemProp[] };

  return data.venueList;
};
