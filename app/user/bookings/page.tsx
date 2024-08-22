"use client";

import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button, Chip, Spinner } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { Booking, BookingOrder, BookingStatus, ErrorResponse } from "@/types";
import { useState, useEffect } from "react";
import { getBookings } from "@/actions/booking/getBookings";
import MyCustomError from "@/components/error/customError";
import { calculateTimeLeft } from "@/utils/reservationExpiry";
import { createPaymentIntent } from "@/actions/payment/createPaymentIntent";

const colorMap: { [index: string]: any } = {
  BOOKED: "bg-green-300 dark:bg-green-900",
  RESERVED: "bg-yellow-300 dark:bg-yellow-900",
  FAILED: "bg-red-300 dark:bg-red-900",
  COMPLETED: "bg-blue-300 dark:bg-blue-900",
};

export default function Page() {
  const router = useRouter();
  const [data, setData] = useState<Booking[] | null>();
  const [error, setError] = useState<JSX.Element | null>();

  useEffect(() => {
    const get = async () => {
      const res = await getBookings("/user");

      if ((res as ErrorResponse).error) {
        setError(<MyCustomError response={res as ErrorResponse} />);
      } else {
        setError(null);
        setData(res as Booking[]);
      }
    };
    get();
  }, []);

  const clickHandler = async (bookingId: number) => {
    if (!data) return;

    const booking = data.find((d) => d.bookingId === bookingId);

    if (!booking) {
      console.error(`Booking with ID ${bookingId} not found`);
      return;
    }

    try {
      const res = await createPaymentIntent(booking.bookingId);
      if ((res as ErrorResponse).error) {
        setError(<MyCustomError response={res as ErrorResponse} />);
      } else {
        setError(null);
        router.push(`/checkout?orderId=${res}`);
      }
    } catch (error) {
      console.error("Failed to create payment intent:", error);
    }
  };

  if (error) {
    return error;
  }

  return (
    <div className="h-screen">
      {data == null ? (
        <div className="mx-16 grid grid-cols-1">
          <Spinner />
        </div>
      ) : (
        <Card x-chunk="dashboard-05-chunk-3" className="mb-8">
          <CardHeader className="px-7">
            <CardTitle>Bookings</CardTitle>
            <CardDescription>Your bookings</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Venue Name</TableHead>
                  <TableHead className="hidden md:table-cell">Booking Date</TableHead>
                  <TableHead className="hidden md:table-cell">Reserved till</TableHead>
                  <TableHead className="hidden sm:table-cell">Booking Status</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-6">
                      No Bookings
                    </TableCell>
                  </TableRow>
                ) : (
                  data.map((d) => (
                    <TableRow key={d.bookingId} className="pb-6">
                      <TableCell>
                        <div className="font-medium">{d.venueName}</div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">{d.bookingDate}</TableCell>
                      <TableCell className="hidden md:table-cell">{calculateTimeLeft(d.reservationExpiry)}</TableCell>

                      <TableCell className="px-4  py-2 hidden sm:table-cell">
                        <Chip size="sm" radius="sm" className={`text-xs font-extrabold ${colorMap[d.status]}`}>
                          {BookingStatus[d.status]}
                        </Chip>
                      </TableCell>
                      <TableCell className="text-right">
                        {d.status == BookingStatus.RESERVED ? (
                          <Button
                            onClick={(_e) => {
                              clickHandler(d.bookingId);
                            }}
                            color="primary"
                            size="sm"
                          >
                            Pay
                          </Button>
                        ) : (
                          "No action"
                        )}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
