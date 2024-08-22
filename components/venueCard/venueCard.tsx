import { VenueItemProp } from "@/types";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Skeleton,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

import Link from "next/link";

export const VenueCard = function ({ venue }: { venue: VenueItemProp }) {
  return (
    <Card radius="md" shadow="none" className="border-none bg-white dark:bg-black relative">
      {venue.images.length > 0 ? (
        <Image
          width="100%"
          alt="Woman listing to music"
          className="h-72 object-cover z-0"
          src={`${venue.images[0].url}`}
        />
      ) : (
        <Skeleton className="rounded-lg" disableAnimation>
          <div className="h-72 w-auto  bg-default-300"></div>
        </Skeleton>
      )}

      <CardBody className="p-0 pt-3 pb-1 flex-row justify-between">
        <div>
          <Link href={`/venue/${venue.id}`} className="font-medium leading-5">
            {venue.name}
          </Link>
          <p className="leading-5 text-zinc-600 dark:text-zinc-400">12 kilometers away</p>
          <p className="leading-5 text-zinc-600 dark:text-zinc-400">Mar 10 - 15</p>
        </div>
      </CardBody>
      <CardFooter className="p-0">
        <p className="">
          <span className="font-medium">{venue.estimate}</span>
        </p>
      </CardFooter>
    </Card>
  );
};
