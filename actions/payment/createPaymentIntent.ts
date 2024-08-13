import { BookingOrder, BookingOrderList, DoRequest, ErrorResponse } from "@/types";
import { doRequest } from "@/utils/doRequest";
import { Logger, ILogObj } from "tslog";

export const createPaymentIntent = async (bookingId: number): Promise<number | ErrorResponse> => {
  const logger: Logger<ILogObj> = new Logger({
    hideLogPositionForProduction: true,
    name: "actions/payment/createPaymentIntent.ts",
  });

  const requestOptions: DoRequest = {
    method: "POST",
    uri: `/orders/create-payment-intent`,
    body: { bookingId: bookingId },
    session: true,
  };

  const response = await doRequest<{ orderId: number }>(requestOptions);

  if ((response as ErrorResponse).error) {
    logger.error(`Error while creating payment intent for the bookingId: ${bookingId}`);
    return response as ErrorResponse;
  }

  return (response as { orderId: number }).orderId;
};
