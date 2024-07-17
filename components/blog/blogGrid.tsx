import { title } from "../primitives";
import { Blog } from "./blog";

export const BlogGrid = () => {

  return (
    <>
      <h2 className={title()}>Blogs</h2>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mb-10">
        <Blog />
        <Blog />
        <Blog />
      </div>
    </>
  );
};
