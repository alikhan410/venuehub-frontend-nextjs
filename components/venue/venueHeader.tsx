import { StarIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Review } from "../review/review";

export const VenueHeader = ({ name, location }: { name: String; location: String }) => {
  const points = ["Accommodation 150", "Segregation", "Parking"];
  return (
    <div className="my-7">
      <h3 className="font-semibold text-2xl ">
        {name}, {location}
      </h3>

      <ul className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
        {points.map((p, i) => (
          <React.Fragment key={i}>
            <li className="inline">{p}</li>
            {i !== points.length - 1 && <li className="inline"> · </li>}
          </React.Fragment>
        ))}
      </ul>

      <div className="flex items-center gap-2 leading-7">
        <span>
          <StarIcon width={16} height={16} />
        </span>
        <p className="font-semibold text-lg">4.89</p>
        <span className="font-bold"> · </span>

        <Review />
      </div>
    </div>
  );
};
