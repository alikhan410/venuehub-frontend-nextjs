"use client";
import MyCustomError from "@/components/error/customError";
import { ErrorResponse } from "@/types";
export default function NotFound() {
  const response: ErrorResponse = { status: 404, error: "Not Found", message: "Page is not available" };
  return (
    <div className="h-screen">
      <MyCustomError response={response} />
    </div>
  );
}
