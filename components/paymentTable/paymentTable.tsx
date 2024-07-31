"use client";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { data } from "./data";
import { Chip } from "@nextui-org/react";

const colorMap: { [index: string]: any } = {
  paid: "bg-green-300 dark:bg-green-900",
  pending: "bg-yellow-300 dark:bg-yellow-900",
  canceled: "bg-red-300 dark:bg-red-900",
};
export const PaymentTable = () => {
  return (
    <Table className="w-full">
      <TableHeader className="md:table-header-group">
        <TableRow>
          <TableHead className="px-4 py-2">Customer</TableHead>
          <TableHead className="px-4 py-2 hidden sm:table-cell">Status</TableHead>
          <TableHead className="px-4 py-2 hidden lg:table-cell">Date</TableHead>
          <TableHead className="px-4 py-2">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((d) => (
          <TableRow key={d.id} className="border-t">
            <TableCell className="px-4 py-2">
              <div className="font-medium">{d.username}</div>
              <div className="text-slate-700 dark:text-slate-400">{d.email}</div>
            </TableCell>
            <TableCell className="px-4  py-2 hidden sm:table-cell">
              <Chip size="sm" radius="sm" className={`text-xs font-extrabold ${colorMap[d.status]}`}>
                {d.status}
              </Chip>
              {/* <Badge className="text-xs" variant="outline">
            {d.status}
          </Badge> */}
            </TableCell>
            <TableCell className="px-4 py-2 hidden lg:table-cell">{d.date}</TableCell>

            <TableCell className="px-4 py-2">${d.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
