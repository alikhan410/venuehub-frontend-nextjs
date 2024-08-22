import { SVGProps } from "react";
import { PressEvent } from "@react-types/shared";
export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type LoginResponse = {
  username: string;
  jwt: string;
};

export type ErrorResponse = {
  status: number;
  error: string;
  message: string;
};
export type ErrorResponseProp = {
  response: ErrorResponse;
};
export type Session = {
  jwt: String;
};

export type CurrentUserResponse = {
  username: String | null;
  roles: String[] | [];
  isLogged: Boolean;
  loggedInAs: String | null;
};
export type UserDetails = {
  username: String;
  password: String;
  email: String;
  firstName: String;
  lastName: String;
};
export type VendorDetails = {
  username: String;
  password: String;
  email: String;
  firstName: String;
  lastName: String;
};

export type NavbarProps = {
  setItemActive: (e: PressEvent) => void;
  item: String;
  currentUser: CurrentUserResponse;
};

export type EmojiKey = "smile" | "secure" | "tick";

export type ContentBody = {
  emoji: EmojiKey;
  title: String;
  content: String;
};

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};
export interface Feedback {
  id: String;
  content: String;
  name: String;
}
export enum PaymentStatus {
  "PAID",
  "FAILED",
  "PENDING",
}
export enum BookingStatus {
  BOOKED = "BOOKED",
  FAILED = "FAILED",
  RESERVED = "RESERVED",
  COMPLETED = "COMPLETED",
}
export interface VenueProps {
  id: number;
  imageUrl: string;
  title: string;
  estimate: string;
}
export interface VenuePropsList {
  venueList: VenueProps[];
}

export interface VenueItemProp {
  id?: number;
  name: string;
  username?: string;
  description: string;
  venueType: string;
  location: string;
  capacity: string;
  images: Image[];
  phone: string;
  status: "ACTIVE" | "DRAFT";
  estimate: string;
  bookings: Booking[];
}
// export interface ImageUris {
//   images: ImageUri[];
// }
export interface Image {
  url: String;
  id: number;
}

export interface BookingDates {
  bookingDate: String;
}
export interface DoRequest {
  method: string;
  uri: string;
  body: Object | undefined;
  session: Boolean;
}
export interface AddBookingBody {
  phone: string;
  status: BookingStatus;
  bookingDate: string;
  guests: number;
}
export interface Booking {
  bookingId: number;
  username: string;
  status: BookingStatus;
  venueId: number;
  venueName: string;
  bookingDate: string;
  reservationExpiry: string;
}
export interface BookingStatusResponse {
  bookingDate: string;
  guests: number;
  status: BookingStatus;
  venueName: string;
  venueId: number;
}

export enum OrderStatus {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  CANCELED = "CANCELED",
}

export interface BookingOrder {
  id: number;
  username: string;
  vendor: string;
  clientSecret: string;
  amount: number;
  bookingId: number;
  orderStatus: OrderStatus;
}
export interface BookingOrderList {
  bookingOrders: BookingOrder[];
}
