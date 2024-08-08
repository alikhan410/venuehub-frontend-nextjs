"use client";

import { getSingleVenue } from "@/actions/venue/getSingleVenue";
import MyCustomError from "@/components/error/customError";
import { Venue } from "@/components/venue/venue";
import { ErrorResponse, VenueItemProp } from "@/types";
import { useState } from "react";
import { useEffect } from "react";
import { Spinner } from "@nextui-org/react";

export default function Page({ params }: { params: { id: number } }) {
  const [venue, setVenue] = useState<VenueItemProp>();
  const [error, setError] = useState<JSX.Element | null>(null);
  useEffect(() => {
    const get = async (id: number) => {
      const res = await getSingleVenue(id);

      if ((res as ErrorResponse).error) {
        setError(<MyCustomError response={res as ErrorResponse} />);
      } else {
        setError(null);
        setVenue(res as VenueItemProp);
      }
    };

    get(params.id);
  }, []);

  if (error) {
    return error;
  }

  if (!venue) {
    return (
      <div className="mx-16 grid grid-cols-1 h-screen">
        <Spinner />
      </div>
    );
  }

  return <Venue venue={venue} />;
}
