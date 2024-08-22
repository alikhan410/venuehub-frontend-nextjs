import { VenueItemProp } from "@/types";
import { VenueImageGrid } from "./venueImageGrid";
import { VenueHeader } from "./venueHeader";
import { VenueServices } from "./venueServices";
import { VenueVendor } from "./venueVendor";
import { VenueDescription } from "./venueDescription";
import { Divider } from "@nextui-org/react";
import { BookingCard } from "../bookingCard/BookingCard";
import { useMediaQuery } from "react-responsive";
import { VenueImageGridSmall } from "./venueImageGridSmall";

export const Venue = ({ venue }: { venue: VenueItemProp }) => {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 640px)" }); // lg: breakpoint in Tailwind
  // if (!venue) {
  //   return (
  //     <div className="mx-16 grid grid-cols-1">
  //       <Spinner />
  //     </div>
  //   );
  // }
  return (
    <div className="lg:mx-8 sm:mx-2 grid grid-cols-1">
      {isLargeScreen ? (
        <VenueImageGrid images={venue && venue.images} />
      ) : (
        <VenueImageGridSmall images={venue && venue.images} />
      )}
      <VenueHeader name={venue && venue.name} location={venue && venue.location} />
      <Divider />
      <VenueVendor username={venue && venue.username!} />
      <Divider />
      <VenueServices />
      <Divider />
      <VenueDescription description={venue && venue.description} />
      <Divider />
      <BookingCard venueId={venue && venue.id!} venuePrice={venue && venue.estimate} />
      <Divider />
    </div>
  );
};
