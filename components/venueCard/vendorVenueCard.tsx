import { VenueItemProp } from "@/types";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

import Link from "next/link";
import { EditVenueIcon, DeleteVenueIcon } from "../icons";

export const VendorVenueCard = function ({ venue }: { venue: VenueItemProp }) {
  const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";
  return (
    <Card radius="md" shadow="none" className="border-none bg-white dark:bg-black relative">
      <Image
        width="100%"
        alt="Woman listing to music"
        className="h-72 object-cover z-0"
        src={`${process.env.HOST}${venue.imageUris[0].uri}`}
      />
      {/* <div className="inset-x-0 top-0 flex justify-between px-4 pt-4 absolute"></div> */}{" "}
      <div className="inset-x-0 top-0 flex justify-end px-4 pt-4 absolute">
        <div>
          <Dropdown>
            <DropdownTrigger>
              <Button className="w-auto h-8 drop-shadow-md bg-white dark:bg-black px-4 py-1 shadow-lg font-normal align-center">
                EDIT
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Link Actions">
              <DropdownItem
                key="edit"
                startContent={<EditVenueIcon className={iconClasses} />}
                href={`/venue/${venue.id}/edit`}
              >
                Edit venue
              </DropdownItem>
              <DropdownItem
                key="delete"
                className="text-danger"
                color="danger"
                startContent={<DeleteVenueIcon className={iconClasses} />}
                href={`/venue/${venue.id}/edit`}
              >
                Delete venue
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
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
