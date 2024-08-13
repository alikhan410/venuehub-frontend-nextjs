"use client";
import BookingPanel from "./BookingPanel";
import { useEffect } from "react";
import { useState } from "react";
import { Chip } from "@nextui-org/react";
import { GetCalendar } from "./GetCalendar";
import { BookingDates, ErrorResponse } from "@/types";
import { getBookingDates } from "@/actions/booking/getBookingDates";

export const BookingCard = ({ venueId, venuePrice }: { venueId: number; venuePrice: String }) => {
  const [bookings, setBookings] = useState<BookingDates[]>([]);
  const [error, setErrors] = useState<JSX.Element | null>(null);

  useEffect(() => {
    const get = async () => {
      const res = await getBookingDates(venueId);
      if ((res as ErrorResponse).error) {
        setErrors(<Chip color="danger">{(res as ErrorResponse).message} </Chip>);
      } else {
        setErrors(null);
        setBookings(res as BookingDates[]);
      }
    };
    get();
  }, []);

  return (
    <div className="grid lg:grid-cols-2 lg:grid-rows-1 sm:grid-cols-1 sm:grid-rows-2 my-5 justify-items-center">
      <div className="mb-4">
        <h1 className=" mb-2 font-medium text-lg text-center ">Booking Dates</h1>
        <GetCalendar dates={bookings} />
      </div>
      <BookingPanel dates={bookings} venueId={venueId} venuePrice={venuePrice} />
      {/* {error == null ? (
        <>
        </>
      ) : (
        error
      )} */}
    </div>
  );
};

// return (
//   <div className="mx-16 flex flex-col my-5 lg:flex-row justify-evenly">
//     {error == null ? (
//       <>
//         <GetCalendar dates={bookings} />
//         <BookingPanel dates={bookings} venueId={venueId} venuePrice={venuePrice} />
//       </>
//     ) : (
//       error
//     )}
//   </div>
// );
