"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Chip, Link } from "@nextui-org/react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { data } from "./data";
const colorMap: { [index: string]: any } = {
  booked: "bg-green-300 dark:bg-green-900",
  reserved: "bg-yellow-300 dark:bg-yellow-900",
  failed: "bg-red-300 dark:bg-red-900",
  completed: "bg-blue-300 dark:bg-blue-900",
};
export const RecentBookings = () => {
  return (
    <Card x-chunk="dashboard-01-chunk-5">
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <CardTitle>Bookings</CardTitle>
          <CardDescription>Recent bookings</CardDescription>
        </div>
        <Button asChild size="sm" className="ml-auto gap-1  dark:bg-indigo-400 bg-indigo-300 ">
          <Link href="#">
            View All
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent className="grid gap-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Venue</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((d) => (
              <TableRow key={d.bookingId}>
                <TableCell className="text-left font-medium px-4 py-2">{d.username}</TableCell>
                <TableCell className="text-left px-4 py-2">
                  <Chip size="sm" radius="sm" className={`text-xs ${colorMap[d.status]}`}>
                    {d.status}
                  </Chip>
                </TableCell>
                <TableCell className="text-left py-2">
                  <Link
                    size="sm"
                    color="foreground"
                    underline="always"
                    href={`/venue/${d.venueName.toLowerCase().split(" ").join("-")}`}
                  >
                    {d.venueName.slice(0, 11).concat("...")}
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* {data.map((d) => (
          <div className="flex items-center gap-4">
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none">{d.username}</p>
              <p className="text-sm text-muted-foreground">{d.status}</p>
            </div>
            <div className="ml-auto text-sm text-wrap font-medium text-right">{d.venueName}</div>
          </div>
        ))} */}
      </CardContent>
    </Card>
  );
};
