import { ImageUri } from "@/types";
import { Card } from "@nextui-org/card";
import { Image } from "@nextui-org/react";

export const VenueImageGrid = ({ images }: { images: ImageUri[] }) => {
  return (
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8 justify-self-center">
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={`${process.env.HOST}${images[0].uri}`}
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={`${process.env.HOST}${images[1].uri}`}
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={`${process.env.HOST}${images[2].uri}`}
        />
      </Card>
      <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src={`${process.env.HOST}${images[1].uri}`}
        />
      </Card>
      <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src={`${process.env.HOST}${images[2].uri}`}
        />
      </Card>
    </div>
  );
};
