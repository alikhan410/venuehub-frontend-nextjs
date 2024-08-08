import { VenueItemProp, VenuePropsList } from "@/types";
import { VenueCard } from "./venueCard";

export const CardGrid = function ({ venueList }: { venueList: VenueItemProp[] }) {
  return (
    <>
      <div className="grid sm:grid-cols-1 gap-x-6	gap-y-10 lg:grid-cols-4">
        {venueList.map((venue) => (
          <VenueCard key={venue.id} venue={venue} />
        ))}
      </div>
    </>
  );
};
