import { Blog } from "@/components/blog/blog";
import { ContentGrid } from "@/components/content/contentGrid";
import { Cta } from "@/components/cta/cta";
import { Hero } from "@/components/hero/hero";
import { Testimonial } from "@/components/testimonial/testimonial";

export default async function Home() {
  return (
    <>
      <Hero />
      <Cta />
      <ContentGrid />
      <Testimonial />
      <Blog />
    </>
  );
}
