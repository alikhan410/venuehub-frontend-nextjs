import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { Link } from "@nextui-org/link";

export const Footer = () => {
  return (
    <footer className="bg-stone-100 dark:bg-black py-8">
      <div className="container mx-auto px-4 md:flex md:justify-between">
        <div className="mb-8 md:mb-0 md:w-1/3">
          <h1 className="text-2xl font-bold">
            <span className="text-slate-300">Venue</span>Hub
          </h1>
          <p className="mt-4">
            This is a simple modern footer created using React and Tailwind CSS. Customize it to fit your website's
            design and requirements.
          </p>
        </div>
        <div className="mb-8 md:mb-0 md:w-1/3">
          <h2 className="text-xl font-semibold">Resources</h2>
          <ul className="mt-4">
            <Link href="#" className="text-gray-700 dark:text-slate-300">
              Home
            </Link>
            <li className="mt-2">
              <Link href="#" className="text-gray-700 dark:text-slate-300">
                About
              </Link>
            </li>
            <li className="mt-2">
              <Link href="#" className="text-gray-700 dark:text-slate-300">
                Services
              </Link>
            </li>
            <li className="mt-2">
              <Link href="#" className="text-gray-700 dark:text-slate-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:w-1/3">
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <form className="flex flex-col mt-4 items-center">
            <Input
              type="email"
              name="email"
              color="primary"
              className="w-full p-2 mb-4  rounded"
              placeholder="Your email address..."
            />
            <Textarea
              color="primary"
              name="message"
              className="w-full p-2 mb-4 rounded"
              placeholder="Your message..."
            ></Textarea>
            <Button className="w-28" type="submit">
              Send
            </Button>
          </form>
        </div>
      </div>
      <div className="text-center py-4 mt-8">&copy; 2024 VenueHub</div>
    </footer>
  );
};
