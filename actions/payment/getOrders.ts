import { BookingOrder, BookingOrderList, DoRequest, ErrorResponse } from "@/types";
import { doRequest } from "@/utils/doRequest";
import { Logger, ILogObj } from "tslog";

export const getOrders = async (endpoint: string): Promise<BookingOrder[] | ErrorResponse> => {
  const logger: Logger<ILogObj> = new Logger({
    hideLogPositionForProduction: true,
    name: "actions/payment/getOrders.ts",
  });

  const requestOptions: DoRequest = {
    method: "GET",
    uri: `/orders${endpoint}`,
    body: undefined,
    session: true,
  };

  const response = await doRequest<BookingOrderList>(requestOptions);

  if ((response as ErrorResponse).error) {
    logger.error(`Error while fetching ${endpoint}'s orders`);
    return response as ErrorResponse;
  }

  return (response as BookingOrderList).bookingOrders;
};
