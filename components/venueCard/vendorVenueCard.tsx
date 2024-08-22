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
  Skeleton,
  Chip,
  DropdownItem,
} from "@nextui-org/react";

import Link from "next/link";
import { EditVenueIcon, DeleteVenueIcon } from "../icons";

export const VendorVenueCard = function ({ venue }: { venue: VenueItemProp }) {
  const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";
  return (
    <Card radius="md" shadow="none" className="border-none bg-white dark:bg-black relative">
      {venue.images.length > 0 ? (
        <Image width="100%" alt="Venue" className="h-72 object-cover z-0" src={`${venue.images[0].url}`} />
      ) : (
        <Skeleton className="rounded-lg" disableAnimation>
          <div className="h-72 w-auto  bg-default-300"></div>
        </Skeleton>
      )}
      <div className="inset-x-0 top-0 flex justify-between items-center px-4 pt-4 absolute">
        {venue.status === "ACTIVE" ? (
          <Chip
            variant="dot"
            color="success"
            classNames={{
              base: "bg-white dark:bg-black",
              content: "",
            }}
          >
            Active
          </Chip>
        ) : (
          <Chip
            variant="dot"
            color="danger"
            classNames={{
              base: "bg-white dark:bg-black",
              content: "",
            }}
          >
            Draft
          </Chip>
        )}

        <div>
          <Dropdown>
            <DropdownTrigger>
              <Chip
                variant="shadow"
                classNames={{
                  base: "bg-white dark:bg-black hover:cursor-pointer",
                  content: "",
                }}
              >
                Edit
              </Chip>
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
                href={`/venue/${venue.id}/delete`}
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
