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
import { MinusIcon, PlusIcon } from "lucide-react";
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
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="text-md">Ali Khan</p>
                <p className="text-small text-default-500">ali@gmail.com</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>A test review</p>
            </CardBody>
            <Divider />
          </Card>
          <Card className="mb-24">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="text-md">Ali Khan</p>
                <p className="text-small text-default-500">ali@gmail.com</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>A test review</p>
            </CardBody>
            <Divider />
          </Card>
          <Card className="mb-24">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="text-md">Ali Khan</p>
                <p className="text-small text-default-500">ali@gmail.com</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>A test review</p>
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
