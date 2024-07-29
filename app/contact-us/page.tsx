"use client";

import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@nextui-org/input";
import { useState } from "react";
import { toast } from "sonner";

interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  country: string;
  phoneNumber: string;
  message: string;
}

export default function Example() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    country: "PK",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    console.log(formData);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.firstName) {
      toast.error("Your first name is missing.");
      return;
    }
    if (!formData.lastName) {
      toast.error("Your last name is missing.");
      return;
    }
    if (!formData.email) {
      toast.error("Your email is missing.");
      return;
    }
    if (!formData.phoneNumber) {
      toast.error("Your phone number is missing.");
      return;
    }
    if (!formData.message || formData.message.length < 255) {
      toast.error("Your message should be at least 255 characters long.");
      return;
    }

    console.log("Form submitted with data: ", formData);
    toast.success("Your message has been sent.");
    setFormData({
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      country: "PK",
      phoneNumber: "",
      message: "",
    });
  };

  return (
    <div className="isolate px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get in Touch with the VenueHub Team</h2>
        <p className="mt-2 text-lg leading-8">
          We’re here to assist you with any questions or inquiries you may have. Whether you need support with our
          platform, have a suggestion, or want to discuss partnership opportunities, we’d love to hear from you. Reach
          out to us, and our dedicated team will get back to you as soon as possible.
        </p>
      </div>
      <form onSubmit={submitHandler} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <div className="mt-2.5">
              <Input
                isRequired
                label="First Name"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <div className="mt-2.5">
              <Input
                isRequired
                label="Last Name"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <Input label="Company" type="text" name="company" value={formData.company} onChange={handleChange} />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <Input
                type="email"
                isRequired
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="h-full rounded-md border-transparent bg-transparent py-0 pl-4 pr-9 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option>PK</option>
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
              </div>
              <Input
                isRequired
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="pl-16"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <Textarea
                isRequired
                name="message"
                variant="bordered"
                label="Message"
                value={formData.message}
                placeholder="Enter your message"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </Button>
        </div>
      </form>
    </div>
  );
}
