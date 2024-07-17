import { Card } from "@nextui-org/card";
import { Content } from "./content";

export const ContentGrid = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Jumpstart Your Event Planning</h2>

          <p className="mt-4 text-slate-700">
            VenueHub makes finding and booking the perfect venue for your events a breeze. Discover and reserve venues
            effortlessly with our user-friendly platform.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Content />
          <Content />
          <Content />

          {/* <Card
            className="block rounded-xl  p-8 shadow-xl transition hover:border-purple-400/35 hover:shadow-purple-400/35"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-file-lock2"
              viewBox="0 0 16 16"
            >
              <path d="M8 5a1 1 0 0 1 1 1v1H7V6a1 1 0 0 1 1-1m2 2.076V6a2 2 0 1 0-4 0v1.076c-.54.166-1 .597-1 1.224v2.4c0 .816.781 1.3 1.5 1.3h3c.719 0 1.5-.484 1.5-1.3V8.3c0-.627-.46-1.058-1-1.224" />
              <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1" />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-slate-900">Secure Payments</h2>

            <p className="mt-1 text-sm text-slate-700">
              Rest easy with safe and secure payments through Stripe, providing peace of mind for all transactions.
            </p>
          </Card>

          <Card
            className=" block rounded-xl p-8 shadow-xl transition hover:border-purple-400/35 hover:shadow-purple-400/35"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-check2-square"
              viewBox="0 0 16 16"
            >
              <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z" />
              <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0" />
            </svg>

            <h2 className="mt-4 text-xl font-bold text-slate-900">Tailored Interfaces</h2>

            <p className="mt-1 text-sm text-slate-700">
              Both users and vendors benefit from dedicated interfaces, allowing users to manage their bookings and
              orders with ease, while vendors can oversee their venue listings, orders, and bookings seamlessly.
            </p>
          </Card> */}
        </div>

        <div className="mt-12 text-center"></div>
      </div>
    </section>
  );
};
