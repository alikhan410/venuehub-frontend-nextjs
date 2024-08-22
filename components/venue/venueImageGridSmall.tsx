import { Image as Img} from "@/types";
import { Image } from "@nextui-org/react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export const VenueImageGridSmall = ({ images }: { images: Img[] }) => {
  return (
    <Carousel>
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image.id}>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src={`${image.url}`}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
