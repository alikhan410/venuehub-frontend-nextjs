import { data } from "./data";
import { FeedbackCard } from "./feedbackCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { title } from "../primitives";

export const Testimonial = function () {
  return (
    <section className="flex flex-col mx-24">
      <div className="flex justify-between mb-24">
        <h2 className={title({ size: "md" })}>
          User ratings and
          <br className="sm:block hidden" />
          testimonials
        </h2>

        <p className="text-lg">
          What people are saying
          <br className="sm:block hidden" />
          about us.
        </p>
      </div>
      <Carousel>
        <CarouselContent>
          {data.map((el, i) => (
            <CarouselItem key={i}>
              <FeedbackCard key={i} content={el.content} name={el.name} id={el.id} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
