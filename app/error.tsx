"use client";

import MyCustomError from "@/components/error/customError";
import { ErrorResponse } from "@/types";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    /* eslint-disable no-console */
    console.error(error);
  }, [error]);

  const response: ErrorResponse = { status: 500, error: "Internal Error", message: error.message };
  return (
    <div className="h-screen">
      <MyCustomError response={response} />
    </div>
    // <div>
    //   <h2>Something went wrong!</h2>
    //   <button
    //     onClick={
    //       // Attempt to recover by trying to re-render the segment
    //       () => reset()
    //     }
    //   >
    //     Try again
    //   </button>
    // </div>
  );
}
