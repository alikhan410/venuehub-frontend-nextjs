"use client";
import { getVendorVenue } from "@/actions/venue/getVendorVenue";
import MyCustomError from "@/components/error/customError";
import { VendorCardGrid } from "@/components/venueCard/cardGrid";
import { ErrorResponse, VenueItemProp } from "@/types";
import { Spacer } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [venueList, setVenueList] = useState<VenueItemProp[]>([]);
  const [error, setError] = useState<JSX.Element | null>(null);

  useEffect(() => {
    const callApi = async () => {
      const res = await getVendorVenue();
      if ((res as ErrorResponse).error) {
        setError(<MyCustomError response={res as ErrorResponse} />);
      } else {
        setError(null);
        setVenueList(res as VenueItemProp[]);
      }
    };

    callApi();
  }, []);
  return (
    <>
      {error ? error : ""}
      <>
        <VendorCardGrid venueList={venueList} />
        <Spacer y={96} />
      </>
    </>
  );
}
