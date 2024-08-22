"use client";
import React from "react";
import { Calendar, DateValue } from "@nextui-org/react";
import { today, getLocalTimeZone, isWeekend, parseDateTime, parseDate } from "@internationalized/date";
import { useLocale } from "@react-aria/i18n";
import { BookingDates } from "@/types";

export const GetCalendar = ({ dates }: { dates: BookingDates[] }) => {
  const now = today(getLocalTimeZone());

  // const disabledRanges = [now];

  // const { locale } = useLocale();

  const isDateUnavailable = (date: DateValue): boolean => {
    let isUnAvailable = false;
    const targetDate = new Date(Date.parse(`${date}`)).toDateString();

    for (let i = 0; i < dates.length; i++) {
      const bookingDate = new Date(Date.parse(`${dates[i].bookingDate}`)).toDateString();

      if (bookingDate === targetDate) {
        isUnAvailable = true;
        break; // Exit the loop
      }
    }

    return isUnAvailable;
  };

  // let isDateUnavailable = (date) =>
  //   isWeekend(date, locale) ||
  //   disabledRanges.some((interval) => date.compare(interval[0]) >= 0 && date.compare(interval[1]) <= 0);

  return (
    <div>
      {/* <p className="flex justify-around mb-2 font-medium text-lg">Available Dates</p> */}
      <Calendar
        // isReadOnly
        showShadow
        color="danger"
        aria-label="Date (Unavailable)"
        isDateUnavailable={isDateUnavailable}
        minValue={today(getLocalTimeZone())}
      />
    </div>
  );
};
