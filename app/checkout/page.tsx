"use client";
import { getOrder } from "@/actions/payment/getOrder";
import MyCustomError from "@/components/error/customError";
import { BookingOrder, ErrorResponse } from "@/types";
import { useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Layout, loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Appearance } from "@stripe/stripe-js";
import { Spinner } from "@nextui-org/react";
import CheckoutForm from "@/components/checkoutForm/checkoutForm";
import { useTheme } from "next-themes";

const stripePromise = loadStripe(
  "pk_test_51OAMLgJlzKJeJaWJR0Io6NyvMyVIOfTQg3mIUYiQAAgfTetMgeQnZlgUWy8wFBtxRAssiY390waQYuS2QUTTDcB700wqd9Fgm4"
);

export default function Checkout() {
  const { theme, setTheme } = useTheme();
  const searchParams = useSearchParams();

  const [clientSecret, setClientSecret] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);
  const [order, setOrder] = useState<BookingOrder | null>(null);
  const [error, setError] = useState<JSX.Element | null>(null);

  useEffect(() => {
    const getStatus = async () => {
      const orderId = searchParams.get("orderId");
      if (!orderId) return;
      const res = await getOrder(+orderId);
      console.log(res);

      if ((res as ErrorResponse).error) {
        setError(<MyCustomError response={res as ErrorResponse} />);
      } else if ((res as BookingOrder).orderStatus != "PENDING") {
        const err = {
          status: 400,
          error: "Bad Request",
          message: "Payment in processed",
        };
        setError(<MyCustomError response={err} />);
      } else {
        setOrder(res as BookingOrder);
        setClientSecret((res as BookingOrder).clientSecret);
        setIsAvailable(true);
      }
    };

    getStatus();
  }, []);

  const appearance: Appearance = {
    theme: theme === "dark" ? "night" : "stripe",
  };

  const options: StripeElementsOptions = {
    clientSecret,
    appearance,
  };

  return (
    <>
      {error ? (
        error
      ) : (
        <div className="App">
          {isAvailable && order ? (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm order={order} clientSecret={clientSecret} />
            </Elements>
          ) : (
            <Spinner />
          )}
        </div>
      )}
    </>
  );
}
