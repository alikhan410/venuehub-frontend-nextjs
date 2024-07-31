"use client";

import MyCustomError from "@/components/error/customError";
import { Venue } from "@/components/venue/venue";
import { VenueItemProp } from "@/types";
import { useState } from "react";
import { useEffect } from "react";
import { data } from "./data";

export default function Page({ params }: { params: { id: number } }) {
  const [venue, setVenue] = useState<VenueItemProp>(data);
  const [error, setError] = useState<JSX.Element | null>(null);
  // useEffect(() => {
  //   const get = async (id: number) => {
  //     const res = await getVenue(id);

  //     if (res.error) {
  //       setError(<MyCustomError response={res} />);
  //     } else {
  //       setError(null);
  //       setVenue(res);
  //     }
  //   };

  //   get(params.id);
  // }, []);

  return <>{error ? error : <Venue venue={venue} />}</>;
}
