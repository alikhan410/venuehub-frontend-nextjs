"use client";
import React from "react";
import { Input, DateInput, Button, Link, Chip } from "@nextui-org/react";
import { parseDate } from "@internationalized/date";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function ReservationForm() {
  const searchParams = useSearchParams();
  console.log(searchParams);

  const [phone, setPhone] = useState<String>("");
  const [error, setError] = useState<JSX.Element | null>(null);
  const router = useRouter();

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push("/user/bookings");
    // const res = await formHandler(
    //   searchParams.get("date"),
    //   searchParams.get("venueId"),
    //   searchParams.get("guests"),
    //   phone
    // );

    // console.log(res);

    // if (res.error) {
    //   setError(<Chip color="danger">{res.message}</Chip>);
    // } else {
    //   setError(null);
    //   localStorage.setItem("item", "mybookings");
    //   router.push("/bookings");
    // }
  };

  return (
    <div className="w-full h-screen flex flex-col">
      <form onSubmit={submitHandler}>
        <div className="w-full flex gap-3 mb-4">
          <DateInput
            name="date"
            isReadOnly
            label={"Booking date"}
            defaultValue={parseDate(searchParams.get("date") || "")}
          />
          <Input
            onChange={(e) => setPhone(e.currentTarget.value)}
            autoFocus
            className="mx-2"
            name="phone"
            type="number"
            label="Phone Number"
            placeholder="Enter your phone number"
            variant="bordered"
          />
        </div>
        <div className="w-full flex gap-3 mb-4 ">
          <Input
            name="guest"
            type="number"
            defaultValue={searchParams.get("guests") || ""}
            isReadOnly
            autoFocus
            label="Guests"
            variant="bordered"
          />
        </div>
        <div className="flex justify-around">{error ? error : ""}</div>
        <div className="flex justify-around">
          <Button type="submit" className="px-6 mt-4 " color="primary">
            RESERVE THIS DATE
          </Button>
        </div>
      </form>
      <Link underline="hover" color="primary" href="/how-venuehub-works">
        You wont be charged yet*
      </Link>
    </div>
  );
}
