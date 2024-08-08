import { SVGProps } from "react";

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
  setItemActive: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
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
  title: String;
  img: String;
}
export enum PaymentStatus {
  "PAID",
  "FAILED",
  "PENDING",
}
export enum BookingStatus {
  "BOOKED",
  "FAILED",
  "RESERVED",
  "COMPLETED",
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
  id: number;
  name: string;
  location: string;
  capacity: number;
  estimate: string;
  imageUris: ImageUri[];
  description: String;
  username: string;
}
// export interface ImageUris {
//   images: ImageUri[];
// }
export interface ImageUri {
  uri: String;
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
