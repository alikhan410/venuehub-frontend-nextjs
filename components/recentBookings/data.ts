// import { BookingStatus } from "@/types";

interface Booking {
  bookingId: number;
  status: BookingStatus;
  username: string;
  venueName: string;
  venueId: number;
  bookingDate: string;
  reservationExpiry: string;
}
type BookingStatus = "booked" | "failed" | "reserved" | "completed";
export const data: Booking[] = [
  {
    bookingId: 1001,
    status: "failed",
    username: "Khizar Siddique",
    venueName: "Elegant Banquet Hall",
    venueId: 201,
    bookingDate: "2024-08-10",
    reservationExpiry: "2024-08-09",
  },
  {
    bookingId: 1002,
    status: "booked",
    username: "Abuzar Khan",
    venueName: "Sunset Gardens",
    venueId: 202,
    bookingDate: "2024-08-15",
    reservationExpiry: "2024-08-14",
  },
  {
    bookingId: 1003,
    status: "completed",
    username: "Ahmed Iqbal",
    venueName: "City View Conference Center",
    venueId: 203,
    bookingDate: "2024-08-20",
    reservationExpiry: "2024-08-19",
  },
  {
    bookingId: 1004,
    status: "reserved",
    username: "Muhammad Ali",
    venueName: "Grand Royal Palace",
    venueId: 204,
    bookingDate: "2024-08-25",
    reservationExpiry: "2024-08-24",
  },
  {
    bookingId: 1005,
    status: "reserved",
    username: "Riyaaz Shakeel",
    venueName: "Ocean Breeze Resort",
    venueId: 205,
    bookingDate: "2024-08-30",
    reservationExpiry: "2024-08-29",
  },
];
