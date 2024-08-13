import { BookingDates, DoRequest, ErrorResponse } from "@/types";
import { doRequest } from "@/utils/doRequest";
import { Logger, ILogObj } from "tslog";

export const getBookingDates = async (venueId: number): Promise<BookingDates[] | ErrorResponse> => {
  const logger: Logger<ILogObj> = new Logger({
    hideLogPositionForProduction: true,
    name: "actions/booking/getBookingDates.ts",
  });

  const requestOptions: DoRequest = {
    method: "GET",
    uri: `/bookings/venue/${venueId}`,
    body: undefined,
    session: false,
  };

  const response = await doRequest<{ bookingDateList: BookingDates[] }>(requestOptions);

  if ((response as ErrorResponse).error) {
    logger.error("Error while fetching booking dates");
    return response as ErrorResponse;
  }
  const data = response as { bookingDateList: BookingDates[] };
  return data.bookingDateList;
};
