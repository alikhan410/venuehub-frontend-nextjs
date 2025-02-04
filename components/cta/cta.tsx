import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

export const Cta = function () {
  return (
    <div>
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden dark:bg-gray-900 bg-indigo-100 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <span className="absolute bg-indigo-300 dark:bg-indigo-500 blur-lg"></span>
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">
              Boost your event planning.
              <br />
              Start using our app today.
            </h2>
            <p className="mt-6 text-lg leading-8">
              Enhance your event planning with VenueHub’s intuitive platform. Our solution features personalized
              dashboards for both users and vendors, designed to simplify venue booking providing seamless experience.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Button as={Link} href="#" className="relative overflow-hidden">
                <span className="absolute inset-0 bg-indigo-300 dark:bg-indigo-500 blur-md"></span>
                <span className="relative">Get Started</span>
              </Button>
              <Button as={Link} href="#" className="relative overflow-hidden">
                <span className="absolute inset-0 bg-pink-300  dark:bg-pink-500 blur-md"></span>
                <span className="relative">
                  Learn more <span aria-hidden="true">→</span>
                </span>
              </Button>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              alt="App screenshot"
              src="https://cdn.shopify.com/s/files/1/0668/0897/1565/files/dashboard-vendor-dark.png?v=1722285589"
              width={1824}
              height={1080}
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
