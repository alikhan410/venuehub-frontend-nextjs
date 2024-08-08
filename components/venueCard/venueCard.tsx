import { VenueItemProp } from "@/types";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";

export const VenueCard = function ({ venue }: { venue: VenueItemProp }) {
  return (
    <Card radius="md" shadow="none" className="border-none bg-white dark:bg-black relative">
      <Image
        width="100%"
        alt="Woman listing to music"
        className="h-72 object-cover z-0"
        src={`${process.env.HOST}${venue.imageUris[0].uri}`}
      />
      <div className="inset-x-0 top-0 flex justify-between px-4 pt-4 absolute"></div>
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
