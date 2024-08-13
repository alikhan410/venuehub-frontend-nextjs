import { AddBookingBody, BookingDates, DoRequest, ErrorResponse } from "@/types";
import { doRequest } from "@/utils/doRequest";
import { sessionCheck } from "@/utils/sessionCheck";
import { Logger, ILogObj } from "tslog";

export const addBooking = async (body: AddBookingBody, venueId: number): Promise<AddBookingBody | ErrorResponse> => {
  const logger: Logger<ILogObj> = new Logger({
    hideLogPositionForProduction: true,
    name: "actions/booking/addBooking.ts",
  });

  const requestOptions: DoRequest = {
    method: "POST",
    uri: `/bookings/venue/${venueId}`,
    body,
    session: true,
  };

  const response = await doRequest<AddBookingBody>(requestOptions);

  if ((response as ErrorResponse).error) {
    logger.error("Error while adding a booking");
    return response as ErrorResponse;
  }

  // const data = response as { bookingDateList: BookingDates[] };
  return response;
  // return data.bookingDateList;
};
