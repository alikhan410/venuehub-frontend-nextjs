import { DoRequest, ErrorResponse } from "@/types";
import { doRequest } from "@/utils/doRequest";
import { Logger, ILogObj } from "tslog";

export const confirmPayment = async (
  clientId: string,
  clientSecret: string,
  vendor: string
): Promise<{ message: string } | ErrorResponse> => {
  const logger: Logger<ILogObj> = new Logger({
    hideLogPositionForProduction: true,
    name: "actions/payment/confirmPayment.ts",
  });

  const requestOptions: DoRequest = {
    method: "GET",
    uri: `/orders/confirm-payment?clientId=${clientId}&clientSecret=${clientSecret}&vendor=${vendor}`,
    body: undefined,
    session: true,
  };

  const response = await doRequest<{ message: string }>(requestOptions);

  if ((response as ErrorResponse).error) {
    logger.error(`Error while confirming payment for the clientId: ${clientId}`);
    return response as ErrorResponse;
  }

  return response as { message: string };
};
