"use client";

import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { data } from "./data";
import { Button, Chip } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const colorMap: { [index: string]: any } = {
  booked: "bg-green-300 dark:bg-green-900",
  reserved: "bg-yellow-300 dark:bg-yellow-900",
  failed: "bg-red-300 dark:bg-red-900",
  completed: "bg-blue-300 dark:bg-blue-900",
};

export default function Page() {
  const router = useRouter();

  const clickHandler = (bookingId: number) => {
    const booking = data.find((d) => d.bookingId === bookingId);
    if (booking) {
      router.push(`/checkout?id=${booking.bookingId}`);
    } else {
      console.error(`Booking with ID ${bookingId} not found`);
    }
  };

  return (
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
              <TableHead className="hidden sm:table-cell">Booking Date</TableHead>
              <TableHead className="hidden sm:table-cell">Reserved till</TableHead>
              <TableHead className="hidden md:table-cell">Booking Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((d) => (
              <TableRow key={d.bookingId} className="pb-6">
                <TableCell>
                  <div className="font-medium">{d.venueName}</div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">{d.bookingDate}</TableCell>
                <TableCell className="hidden md:table-cell">{d.reservationDate}</TableCell>

                <TableCell className="px-4  py-2 hidden sm:table-cell">
                  <Chip size="sm" radius="sm" className={`text-xs font-extrabold ${colorMap[d.status]}`}>
                    {d.status}
                  </Chip>
                </TableCell>
                <TableCell className="text-right">
                  {d.status == "reserved" ? (
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
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
