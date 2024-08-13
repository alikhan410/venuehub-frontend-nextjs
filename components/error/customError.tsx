import { ErrorResponseProp } from "@/types";
import { Link } from "@nextui-org/react";

export default function MyCustomError({ response }: ErrorResponseProp) {
  return (
    <div className="grid min-h-full place-items-center">
      <div className="text-center">
        <p className="text-base font-semibold dark:text-indigo-400 text-indigo-600">{response.status}</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight dark:text-zinc-100 text-zinc-900 sm:text-5xl">
          {response.error}
        </h1>
        <p className="mt-6 text-base leading-7 dark:text-zinc-300 text-zinc-600">{response.message}</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm text-white font-semibold shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </Link>
          <Link href="/contact-us" className="text-sm font-semibold dark:text-white text-zinc-900">
            Contact support <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
