"use client";
import MyCustomError from "@/components/error/customError";
import { CardGrid } from "@/components/venueCard/cardGrid";
import { VenueProps } from "@/types";
import { Spacer } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { data } from "./data";

export default function Page() {
  const [venueList, setVenueList] = useState<VenueProps[]>([]);
  const [error, setError] = useState<JSX.Element | null>(null);

  useEffect(() => {
    const callApi = async () => {
      // const res = await getVenueList();

      // if (res.error) {
      //     setError(<MyCustomError response={res} />);
      // } else {
      //     setError(null);
      //     const { venueList } = res;
      //     setVenueList(venueList);
      // }

      setVenueList(data);
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
