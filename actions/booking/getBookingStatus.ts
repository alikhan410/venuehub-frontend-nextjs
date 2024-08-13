import { Booking, BookingStatusResponse, DoRequest, ErrorResponse } from "@/types";
import { doRequest } from "@/utils/doRequest";
import { Logger, ILogObj } from "tslog";

export const getBookingStatus = async (bookingId: number): Promise<BookingStatusResponse | ErrorResponse> => {
  const logger: Logger<ILogObj> = new Logger({
    hideLogPositionForProduction: true,
    name: "actions/booking/getBookingStatus.ts",
  });

  const requestOptions: DoRequest = {
    method: "GET",
    uri: `/bookings/${bookingId}`,
    body: undefined,
    session: true,
  };

  const response = await doRequest<BookingStatusResponse>(requestOptions);

  if ((response as ErrorResponse).error) {
    logger.error(`Error while fetching booking status for the bookingId: ${bookingId}`);
    return response as ErrorResponse;
  }

  return response as BookingStatusResponse;
};
