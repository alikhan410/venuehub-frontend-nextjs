import { Avatar } from "@nextui-org/react";
import React from "react";

export const VenueVendor = ({ username }: { username: String }) => {
  const points = ["Superhost", "9 year hosting"];
  return (
    <div className="my-5 flex gap-4 items-center">
      {/* <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" size="md" /> */}
      <div className="flex flex-col items-start">
        <h3 className="font-semibold text-lg ">{username}</h3>
        <ul className="leading-3 text-zinc-600 dark:text-zinc-300">
          {points.map((p, i) => (
            <React.Fragment key={i}>
              <li className="inline text-sm ">{p}</li>
              {i !== points.length - 1 && <li className="inline"> · </li>}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};
