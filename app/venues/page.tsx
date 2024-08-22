"use client";
import { getVenues } from "@/actions/venue/getVenues";
import MyCustomError from "@/components/error/customError";
import { CardGrid } from "@/components/venueCard/cardGrid";
import { ErrorResponse, VenueItemProp } from "@/types";
import { Spacer } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { data } from "./data";

export default function Page() {
  const [venueList, setVenueList] = useState<VenueItemProp[]>([]);
  const [error, setError] = useState<JSX.Element | null>(null);

  useEffect(() => {
    const callApi = async () => {
      const res = await getVenues();
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
        <CardGrid venueList={venueList} />
        <Spacer y={96} />
      </>
    </>
  );
}
