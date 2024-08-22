import { Image as Img } from "@/types";
import { Card } from "@nextui-org/card";
import { Image, Skeleton } from "@nextui-org/react";

export const VenueImageGrid = ({ images }: { images: Img[] }) => {
  return (
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8 justify-self-center">
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        {images.length > 0 ? (
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src={`${images[0].url}`}
          />
        ) : (
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="/placeholder-image.jpg"
          />
        )}
        {/* <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={`${images[0].url}`}
          fallbackSrc="/placeholder-image.jpg"
        /> */}
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        {images.length > 1 ? (
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src={`${images[1].url}`}
          />
        ) : (
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="/placeholder-image.jpg"
          />
        )}
        {/* <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={`${images[1].url}`}
        /> */}
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        {images.length > 2 ? (
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src={`${images[2].url}`}
          />
        ) : (
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="/placeholder-image.jpg"
          />
        )}
        {/* <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={`${images[2].url}`}
        /> */}
      </Card>
      <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
        {images.length > 3 ? (
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src={`${images[3].url}`}
          />
        ) : (
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="/placeholder-image.jpg"
          />
        )}
        {/* <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src={`${images[1].url}`}
        /> */}
      </Card>
      <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
        {images.length > 4 ? (
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src={`${images[4].url}`}
          />
        ) : (
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="/placeholder-image.jpg"
          />
        )}
        {/* <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src={`${images[2].url}`}
        /> */}
      </Card>
    </div>
  );
};
