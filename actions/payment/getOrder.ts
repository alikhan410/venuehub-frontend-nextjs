import { BookingOrder, BookingOrderList, DoRequest, ErrorResponse } from "@/types";
import { doRequest } from "@/utils/doRequest";
import { Logger, ILogObj } from "tslog";

export const getOrder = async (orderId: number): Promise<BookingOrder | ErrorResponse> => {
  const logger: Logger<ILogObj> = new Logger({
    hideLogPositionForProduction: true,
    name: "actions/payment/getOrders.ts",
  });

  const requestOptions: DoRequest = {
    method: "GET",
    uri: `/orders/status/${orderId}`,
    body: undefined,
    session: true,
  };

  const response = await doRequest<BookingOrder>(requestOptions);

  if ((response as ErrorResponse).error) {
    logger.error(`Error while fetching order status for the orderId: ${orderId}`);
    return response as ErrorResponse;
  }

  return response as BookingOrder;
};
