import { Booking, DoRequest, ErrorResponse } from "@/types";
import { doRequest } from "@/utils/doRequest";
import { Logger, ILogObj } from "tslog";

export const getBookings = async (endpoint: string): Promise<Booking[] | ErrorResponse> => {
  const logger: Logger<ILogObj> = new Logger({
    hideLogPositionForProduction: true,
    name: "actions/booking/getBooking.ts",
  });

  const requestOptions: DoRequest = {
    method: "GET",
    uri: `/bookings${endpoint}`,
    body: undefined,
    session: true,
  };

  const response = await doRequest<{ bookings: Booking[] }>(requestOptions);

  if ((response as ErrorResponse).error) {
    logger.error(`Error while fetching ${endpoint}'s bookings`);
    return response as ErrorResponse;
  }

  return (response as { bookings: Booking[] }).bookings;
};
