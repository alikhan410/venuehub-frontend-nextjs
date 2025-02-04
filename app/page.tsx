import { Blog } from "@/components/blog/blog";
import { ContentGrid } from "@/components/content/contentGrid";
import { Cta } from "@/components/cta/cta";
import { Hero } from "@/components/hero/hero";
import { Testimonial } from "@/components/testimonial/testimonial";
import { Divider } from "@nextui-org/react";

export default async function Home() {
  return (
    <>
      <Hero />
      <Cta />
      <ContentGrid />
      <Divider className="mb-12" />
      <Testimonial />
      <Blog />
    </>
  );
}
