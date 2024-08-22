import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import { title } from "../primitives";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/react";

export const Review = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        {/* <Button variant="link">220 Reviews</Button> */}
        <Link href="#" className="font-semibold text-lg underline">
          220 reviews
        </Link>
      </DrawerTrigger>
      <DrawerContent className="bg-stone-100 dark:bg-black">
        {/* <div className="mx-auto w-full max-w-sm overflow-y-scroll scroll-smooth"> */}
        <div className="mx-auto w-full max-w-sm h-96 overflow-y-scroll scrollbar-hide">
          <DrawerHeader>
            <DrawerTitle>Venue Reviews</DrawerTitle>
            <DrawerDescription>What people think about this venue</DrawerDescription>
          </DrawerHeader>
          <Card className="mb-24">
            <CardHeader className="flex gap-3 justify-between">
              <div className="flex flex-col">
                <p className="text-md font-medium">Ali Khan</p>
                {/* <p className="text-small text-default-500">alikhan410@gmail.com</p> */}
              </div>
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 text-yellow-300 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">4.9</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>
                Perfect venue for our wedding! Beautiful decor, attentive staff, and everything ran smoothly. Highly
                recommended!
              </p>
            </CardBody>
            <Divider />
          </Card>
          <Card className="mb-24">
            <CardHeader className="flex gap-3 justify-between">
              <div className="flex flex-col">
                <p className="text-md font-medium">Zainab Kanwal</p>
                {/* <p className="text-small text-default-500">zainabk@gmail.com</p> */}
              </div>
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 text-yellow-300 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">4.8</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>
                Great place for a corporate event. Modern facilities and convenient location, though the catering
                options could be better.
              </p>
            </CardBody>
            <Divider />
          </Card>
          <Card className="mb-24">
            <CardHeader className="flex gap-3 justify-between">
              <div className="flex flex-col">
                <p className="text-md font-medium  ">Shahid Khan</p>
                {/* <p className="text-small text-default-500">shahid111@gmail.com</p> */}
              </div>
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 text-yellow-300 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">4.7</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>
                Lovely venue with a great atmosphere. Perfect for hosting special events, and the staff made everything
                easy.
              </p>
            </CardBody>
            <Divider />
          </Card>
          <DrawerFooter>
            {/* <Button>Submit</Button> */}
            {/* <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose> */}
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
