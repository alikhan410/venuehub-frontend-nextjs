import { BookingDates, BookingOrder, BookingStatusResponse, DoRequest, VenueItemProp } from "@/types";
import { doRequest } from "@/utils/doRequest";

//The purpose for this api call is to Start the dormant services hosted on Render
export const startServices = async () => {
  const requestOptions1: DoRequest = {
    method: "GET",
    uri: `/bookings/venue/1`,
    body: undefined,
    session: false,
  };
  const requestOptions2: DoRequest = {
    method: "GET",
    uri: `/orders/status/1`,
    body: undefined,
    session: true,
  };
  const requestOptions3: DoRequest = {
    method: "GET",
    uri: `/venue/1`,
    body: undefined,
    session: false,
  };

  const response1 = await doRequest<{ bookingDateList: BookingDates[] }>(requestOptions1);
  const response2 = await doRequest<BookingOrder>(requestOptions2);
  const response3 = await doRequest<VenueItemProp>(requestOptions3);
};
