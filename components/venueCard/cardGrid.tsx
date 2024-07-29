import { VenuePropsList } from "@/types";
import { VenueCard } from "./venueCard";

export const CardGrid = function ({ venueList }: VenuePropsList) {
  console.log(venueList);
  return (
    <>
      <div className="grid sm:grid-cols-1 gap-x-6	gap-y-10 lg:grid-cols-4">
        {venueList.map((venue) => (
          <VenueCard
            key={venue.id}
            id={venue.id}
            title={venue.title}
            imageUrl={venue.imageUrl}
            estimate={venue.estimate}
          />
        ))}
      </div>
    </>
  );
};
