import { ErrorResponse } from "@/types";
import { sessionCheck } from "@/utils/sessionCheck";

export const getBookingDates = async (method: string, body: Object, url: string): Promise<any | ErrorResponse> => {
  const session = await sessionCheck();
  if ((session as ErrorResponse).error) return session;

  const response = await fetch(`${process.env.HOST}${url}`, {
    cache: "no-store",
    method,
  });
};
