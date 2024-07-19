import { data } from "./data";
import { FeedbackCard } from "./feedbackCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { title } from "../primitives";

export const Testimonial = function () {
  return (
    <section className="flex flex-col">
      <div className="flex justify-between mb-24">
        <h2 className={title({ size: "md" })}>
          What People are
          <br className="sm:block hidden" />
          saying about us
        </h2>

        <p className="text-lg">
          Everything you need to accept card payments
          <br className="sm:block hidden" />
          and grow your business anywhere on the planet.
        </p>
      </div>
      <Carousel>
        <CarouselContent>
          {data.map((el, i) => (
            <CarouselItem key={i}>
              <FeedbackCard key={i} content={el.content} title={el.title} name={el.name} img={el.img} id={el.id} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
