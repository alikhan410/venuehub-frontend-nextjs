"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  Home,
  LineChart,
  ListFilter,
  MoreVertical,
  Package,
  Package2,
  PanelLeft,
  Search,
  Settings,
  ShoppingCart,
  Truck,
  Users2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { data } from "./data";
import { Button, Chip } from "@nextui-org/react";
const colorMap: { [index: string]: any } = {
  booked: "bg-green-300 dark:bg-green-900",
  reserved: "bg-yellow-300 dark:bg-yellow-900",
  failed: "bg-red-300 dark:bg-red-900",
  completed: "bg-blue-300 dark:bg-blue-900",
};
export default function Page() {
  return (
    <Card x-chunk="dashboard-05-chunk-3">
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
              <TableHead className="hidden sm:table-cell">Reserved til</TableHead>
              <TableHead className="hidden md:table-cell">Booking Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((d) => (
              <TableRow key={d.bookingId} className="pb-6">
                <TableCell>
                  <div className="font-medium">{d.venueName}</div>
                  {/* <div className="hidden text-sm text-muted-foreground md:inline">liam@example.com</div> */}
                </TableCell>
                <TableCell className="hidden sm:table-cell">{d.bookingDate}</TableCell>
                <TableCell className="hidden md:table-cell">{d.reservationDate}</TableCell>

                <TableCell className="px-4  py-2 hidden sm:table-cell">
                  <Chip size="sm" radius="sm" className={`text-xs font-extrabold ${colorMap[d.status]}`}>
                    {d.status}
                  </Chip>
                </TableCell>
                <TableCell className="text-right">
                  {
                    d.status == "reserved" ? (
                      <Button color="primary" size="sm">
                        {" "}
                        Pay
                      </Button>
                    ) : (
                      "No action"
                    )
                    // <>
                    //   <Button size="sm"> Pay</Button>
                    // </>
                  }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
    // <div className="flex min-h-screen w-full flex-col bg-muted/40">
    //   <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
    //     <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">

    //     </main>
    //   </div>
    // </div>
  );
}
