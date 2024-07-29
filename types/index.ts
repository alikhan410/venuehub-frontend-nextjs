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
  imageUrl: String;
  title: String;
  estimate: String;
}
export interface VenuePropsList {
  venueList: VenueProps[];
}
