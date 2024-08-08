import { ImageUri } from "@/types";
import { Image } from "@nextui-org/react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export const VenueImageGridSmall = ({ images }: { images: ImageUri[] }) => {
  return (
    <Carousel>
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image.id}>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src={`${process.env.HOST}${image.uri}`}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
