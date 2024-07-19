import { BlogGrid } from "@/components/blog/blogGrid";
import { ContentGrid } from "@/components/content/contentGrid";
import { Hero } from "@/components/hero/hero";
import { Testimonial } from "@/components/testimonial/testimonial";

export default async function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Hero />
      <ContentGrid />
      <Testimonial />
      <BlogGrid />
    </section>
  );
}
