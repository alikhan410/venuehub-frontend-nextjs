"use client";

import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button, Chip, Spinner } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { BookingOrder, ErrorResponse, OrderStatus } from "@/types";
import { useState, useEffect } from "react";
import MyCustomError from "@/components/error/customError";
import { getOrders } from "@/actions/payment/getOrders";

const colorMap: { [index: string]: any } = {
  PENDING: "bg-yellow-300 dark:bg-yellow-900",
  COMPLETED: "bg-green-300 dark:bg-green-900",
  CANCELED: "bg-red-300 dark:bg-red-900",
};

export default function Page() {
  const router = useRouter();
  const [data, setData] = useState<BookingOrder[] | null>();
  const [error, setError] = useState<JSX.Element | null>();

  useEffect(() => {
    const get = async () => {
      const res = await getOrders("/user");

      if ((res as ErrorResponse).error) {
        setError(<MyCustomError response={res as ErrorResponse} />);
      } else {
        setError(null);
        console.log(res);
        setData(res as BookingOrder[]);
      }
    };
    get();
  }, []);

  const clickHandler = (bookingId: number) => {
    if (data == null) return;
    const booking = data.find((d) => d.bookingId === bookingId);
    if (booking) {
      router.push(`/checkout?bookingid=${booking.bookingId}`);
    } else {
      console.error(`Booking with ID ${bookingId} not found`);
    }
  };

  if (error) {
    return error;
  }

  // if (data == null) {
  //   return (
  //     <div className="mx-16 grid grid-cols-1 h-screen">
  //       <Spinner />
  //     </div>
  //   );
  // }

  return (
    <div className="h-screen">
      {data == null ? (
        <div className="mx-16 grid grid-cols-1">
          <Spinner />
        </div>
      ) : (
        <Card x-chunk="dashboard-05-chunk-3" className="mb-8">
          <CardHeader className="px-7">
            <CardTitle>Orers</CardTitle>
            <CardDescription>Your booking orders summary</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Booking Id</TableHead>
                  <TableHead className="hidden md:table-cell">Vendor</TableHead>
                  <TableHead className="hidden md:table-cell">Amount</TableHead>
                  <TableHead className="hidden sm:table-cell">Order Status</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-6">
                      No Orders
                    </TableCell>
                  </TableRow>
                ) : (
                  data.map((d) => (
                    <TableRow key={d.id} className="pb-6">
                      <TableCell>
                        <div className="font-medium">{d.bookingId}</div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">{d.vendor}</TableCell>
                      <TableCell className="hidden md:table-cell">{d.amount}</TableCell>

                      <TableCell className="px-4  py-2 hidden sm:table-cell">
                        <Chip size="sm" radius="sm" className={`text-xs font-extrabold ${colorMap[d.orderStatus]}`}>
                          {OrderStatus[d.orderStatus]}
                        </Chip>
                      </TableCell>
                      <TableCell className="text-right">
                        {d.orderStatus == OrderStatus.PENDING ? (
                          <Button
                            onClick={(_e) => {
                              clickHandler(d.id);
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
