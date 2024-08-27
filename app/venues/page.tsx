"use client";
import { getVenues } from "@/actions/venue/getVenues";
import MyCustomError from "@/components/error/customError";
import { CardGrid } from "@/components/venueCard/cardGrid";
import { ErrorResponse, VenueItemProp } from "@/types";
import { Spacer } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { Spinner } from "@nextui-org/react";

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

  if (venueList.length === 0) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="mx-16">
          <Spinner
            size="lg"
            label="Hold on ✋ the service is currently inactive, it may take a couple of minutes for it to boot up"
          />
        </div>
      </div>
    );
  }

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
