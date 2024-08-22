"use client";

import { confirmPayment } from "@/actions/payment/confirmPayment";
import MyCustomError from "@/components/error/customError";
import { ErrorResponse } from "@/types";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Spinner } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ThankyouPage() {
  const params = useSearchParams();

  const [error, setError] = useState<JSX.Element | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const clientId = params.get("clientId");
    const clientSecret = params.get("clientSecret");
    const vendor = params.get("vendor");

    if (!clientId || !clientSecret || !vendor) {
      console.error("clientId, clientSecret or vendor might be undefined");
      return;
    }

    console.log("clientId: " + clientId);
    console.log("clientSecret: " + clientSecret);
    console.log("vendor: " + vendor);
    setIsLoading(false);
    const confirm = async () => {
      const res = await confirmPayment(clientId, clientSecret, vendor);
      if ("error" in res) {
        setError(<MyCustomError response={res}></MyCustomError>);
      }
      setIsLoading(false);
    };

    confirm();
  }, []);

  if (isLoading) {
    return (
      <div className="mx-16 grid grid-cols-1">
        <Spinner />
      </div>
    );
  }
  return (
    <>
      {error ? (
        error
      ) : (
        <div className="h-96 flex justify-center items-center mb-60">
          <Card className="max-w-md p-6 items-center">
            <CardHeader className="flex justify-center">
              <h1 className=" text-2xl font-bold mb-2">Thank You!</h1>
            </CardHeader>
            <CardBody>
              <p className="text-center">Your booking has been placed successfully.</p>
            </CardBody>
          </Card>
        </div>
      )}
    </>
  );
}
