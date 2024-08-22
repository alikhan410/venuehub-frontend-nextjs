"use client";
import { ChevronLeft, PlusCircle, Upload } from "lucide-react";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Image,
  Textarea,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Select,
  SelectItem,
  Divider,
  Button,
  Input,
  Chip,
  Link,
} from "@nextui-org/react";
import { Card, CardFooter, CardHeader, CardBody } from "@nextui-org/card";
import { IconSelector } from "@/components/iconSelector/IconSelector";
import { VenueItemProp } from "@/types";
import { addVenue } from "@/actions/venue/addVenue";
import { saveImage } from "@/actions/venue/saveImage";
import { toast } from "sonner";

export default function Page() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<JSX.Element | null>(null);
  const [rows, setRows] = useState([{ id: 1 }]);
  const [imagesUrl, setImagesUrl] = useState<String[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const imageHandler = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const f = event.target.files;
    if (!f || f.length == 0) return;

    //Checking if the uploaded files are upto 5 or less
    if (files.length + f.length > 5) {
      toast.warning("Limit reached", {
        description: "Only upto 5 images are allowed. For uploading new images, delete the previous ones",
      });
      return;
    }

    const urls: string[] = [];
    for (let i = 0; i < f.length; i++) {
      const file = f[i];
      const url = URL.createObjectURL(file);
      urls.push(url);
    }
    setImagesUrl((prevImagesUrl) => [...prevImagesUrl, ...urls]);

    setFiles((prevFiles) => {
      const newFiles = [...prevFiles];
      for (let i = 0; i < f.length; i++) {
        const file = f[i];
        newFiles.push(file);
      }
      return newFiles;
    });
  };
  const addRow = () => {
    if (rows.length === 5) {
      setError(<Chip color="danger">Can't add more than 5</Chip>);
      return;
    }
    setError(null);
    setRows([...rows, { id: rows.length + 1 }]);
  };
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    //Whole lot of bunch of checks
    const venueTitle = formData.get("VenueTitle")?.toString().trim();
    const venueDescription = formData.get("VenueDescription")?.toString().trim();
    const serviceNames = formData.getAll("serviceName").map((name) => name.toString().trim());
    const serviceDescriptions = formData.getAll("serviceDescription").map((desc) => desc.toString().trim());
    const guests = formData.get("guests")?.toString().trim();
    const bookingFee = formData.get("bookingFee")?.toString().trim();
    const venueType = formData.get("venueType")?.toString().trim();
    const status = formData.get("venueStatus")?.toString().trim();
    const location = formData.get("venueLocation")?.toString().trim();
    const phone = formData.get("venuePhone")?.toString().trim();

    const missingFields = [];

    if (!venueTitle) missingFields.push("Venue Title");
    if (!venueDescription) missingFields.push("Venue Description");
    if (!guests) missingFields.push("Guests");
    if (!bookingFee) missingFields.push("Booking Fee");
    if (!venueType) missingFields.push("Venue Type");
    if (!location) missingFields.push("Location");
    if (!phone) missingFields.push("Phone");

    if (!venueTitle || !venueDescription || !guests || !bookingFee || !venueType || !phone || !location) {
      setIsLoading(false);
      toast.error("Please fill the remain fields", { description: `Required fields: ${missingFields.join(", ")}` });
      return;
    }

    if (status !== "ACTIVE" && status !== "DRAFT") {
      setIsLoading(false);
      toast.error("Invalid venue status");
      return;
    }

    //images is [] bc we'll send the images separately and [] booking bc venue is just created, duh.
    const newVenue: VenueItemProp = {
      name: venueTitle,
      description: venueDescription,
      venueType: venueType,
      capacity: guests,
      estimate: bookingFee,
      images: [],
      bookings: [],
      status: status,
      phone: phone,
      location: location,
    };

    //Checking if the files/images is upto the desired length
    if (files.length < 5) {
      setIsLoading(false);
      toast.error("Error occurred", {
        description: "Please select upto 5 images",
      });
      return;
    }

    //Preparing the images for sending
    const imageData = new FormData();
    files.forEach((file) => {
      imageData.append("files", file);
    });

    // Reason for not using await is bc image endpoint is dependent upon addVenue response,
    // not sure if its works with await, did'nt try.
    addVenue(newVenue)
      .then(async (res) => {
        //Checking for any errors during adding of venue
        if ("error" in res) {
          setIsLoading(false);
          toast.error(`Status: ${res.status}`, {
            description: res.message,
          });
          return;
        }

        //Whether adding venue was successful or not
        if (res.status !== "success") return;

        //Sending the images to the venue service
        const imageResponse = await saveImage(res.venueId, imageData);

        //Checking for errors during image processing
        if ("error" in imageResponse) {
          setIsLoading(false);
          toast.error(`Status: ${imageResponse.status}`, {
            description: imageResponse.message,
          });
          return;
        }

        //setting the button loading state to false
        setIsLoading(false);
        toast.success("Congratulations 🎉", { description: "Venue has been created" });
      })
      .catch((error: Error) => {
        toast.error(`Status: 500`, {
          description: error.message,
        });
      });
  };
  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <form onSubmit={submitHandler}>
            <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
              <div className="flex items-center gap-4">
                <Button isIconOnly as={Link} href="/vendor/venues" radius="sm" variant="ghost" className="h-7 w-7">
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Back</span>
                </Button>
                <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                  Adding Venue
                </h1>
                <div className="hidden items-center gap-2 md:ml-auto md:flex">
                  <Button variant="flat" size="sm">
                    Discard
                  </Button>
                  <Button type="submit" isLoading={isLoading} variant="ghost" size="sm">
                    Save Venue
                  </Button>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                  <Card>
                    <CardHeader>
                      <h2 className="font-medium">Venue Details</h2>
                    </CardHeader>
                    <CardBody>
                      <div className="grid gap-6">
                        <div className="grid gap-3">
                          <Input
                            name="VenueTitle"
                            labelPlacement="outside"
                            label="Venue Name"
                            size="md"
                            type="text"
                            className="w-full"
                            placeholder="Enter venue name"
                          />
                        </div>
                        <div className="grid gap-3">
                          <Textarea
                            name="VenueDescription"
                            label="Venue Description"
                            size="md"
                            labelPlacement="outside"
                            variant="bordered"
                            placeholder="Enter your description"
                          />
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardHeader>
                      <h2 className="font-medium">Venue Features and Services</h2>
                    </CardHeader>
                    <CardBody>
                      <AnimatePresence>
                        <Table removeWrapper aria-label="Service table">
                          <TableHeader aria-label="Service Table Header">
                            <TableColumn aria-label="Service Table Column" className="w-14 md:w-20 lg:w-32">
                              Service
                            </TableColumn>
                            <TableColumn aria-label="Service Table Column" className="w-24 md:w-56 lg:w-72">
                              Description
                            </TableColumn>
                            <TableColumn aria-label="Service Table Column">Icon</TableColumn>
                          </TableHeader>

                          <TableBody>
                            {rows.map((row, index) => (
                              <TableRow key={row.id} className="pb-6">
                                <TableCell className="font-semibold">
                                  <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    <Input size="sm" type="text" name="serviceName" />
                                  </motion.div>
                                </TableCell>
                                <TableCell className="max-w-full">
                                  <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    <Textarea
                                      name="serviceDescription"
                                      size="sm"
                                      className="w-auto"
                                      variant="bordered"
                                      placeholder="Enter your description"
                                    />
                                  </motion.div>
                                </TableCell>
                                <TableCell>
                                  <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    <IconSelector />
                                  </motion.div>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </AnimatePresence>
                    </CardBody>
                    <CardFooter className="justify-center border-t p-4">
                      <div className="flex flex-col gap-1">
                        {error ? error : ""}
                        <Button size="sm" variant="ghost" className="gap-1 border-none" onClick={addRow}>
                          <PlusCircle className="h-3.5 w-3.5" />
                          Add Service
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <h2 className="font-medium">Venue Specifications</h2>
                    </CardHeader>
                    <CardBody>
                      <div className="grid gap-6 sm:grid-cols-3">
                        <div className="grid gap-3">
                          <Select
                            name="venueType"
                            size="md"
                            label="Venue Category"
                            labelPlacement="outside"
                            placeholder="Select venue type"
                            className="max-w-xs"
                          >
                            <SelectItem key={"Hall"}>Hall</SelectItem>
                            <SelectItem key={"Banquet"}>Banquet</SelectItem>
                          </Select>
                        </div>
                        <div className="grid gap-3">
                          <Input
                            name="guests"
                            placeholder=" "
                            size="md"
                            label="Guests Capacity"
                            labelPlacement="outside"
                            type="number"
                          />
                        </div>
                        <div className="grid gap-3">
                          <Input
                            name="bookingFee"
                            size="md"
                            placeholder=" "
                            label="Booking Fee"
                            labelPlacement="outside"
                            id="bookingFee"
                            endContent={" PKR"}
                            type="number"
                          />
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardHeader>
                      <h2 className="font-medium">Contact</h2>
                    </CardHeader>
                    <CardBody>
                      <div className="grid gap-6 sm:grid-cols-3">
                        <div className="grid gap-3">
                          <Input
                            name="venueLocation"
                            placeholder=" "
                            size="md"
                            label="Location"
                            labelPlacement="outside"
                            type="text"
                          />
                        </div>
                        <div className="grid gap-3">
                          <Input
                            name="venuePhone"
                            size="md"
                            placeholder=" "
                            label="Phone Number"
                            labelPlacement="outside"
                            startContent="+92"
                            type="phone"
                          />
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>
                <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                  <Card>
                    <CardHeader>
                      <h2 className="font-medium">Venue Status</h2>
                    </CardHeader>
                    <CardBody>
                      <div className="grid gap-6">
                        <div className="grid gap-3">
                          <Select
                            name="venueStatus"
                            size="md"
                            label="Status"
                            labelPlacement="outside"
                            placeholder="Select status"
                            className="max-w-xs"
                          >
                            <SelectItem key={"DRAFT"} value="DRAFT">
                              Draft
                            </SelectItem>
                            <SelectItem key={"ACTIVE"} value="ACTIVE">
                              Active
                            </SelectItem>
                          </Select>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
                    <CardHeader>
                      <h2 className="font-medium">Venue Images</h2>
                    </CardHeader>
                    <CardBody>
                      <div className="grid gap-2">
                        {imagesUrl.length > 0 ? (
                          <Image
                            alt="Venue image"
                            className="aspect-square w-full rounded-md object-cover"
                            height="300"
                            src={`${imagesUrl[0]}`}
                            width="300"
                          />
                        ) : (
                          <Image
                            alt="Venue image"
                            className="aspect-square w-full rounded-md object-cover"
                            height="300"
                            src="/placeholder-image.jpg"
                            width="300"
                          />
                        )}

                        <div className="grid grid-cols-3 gap-2">
                          {[...Array(2)].map((_, i) => {
                            const index = i + 1;
                            const imageSrc = imagesUrl[index] ? imagesUrl[index] : "/placeholder-image.jpg";
                            const isOverlay = imagesUrl.length > 3 && index === 2; // Check if it's the last image with overlay

                            return (
                              <div key={index} className="relative">
                                <img
                                  alt="Venue image"
                                  className={`aspect-square w-full rounded-md object-cover ${isOverlay ? "opacity-75" : ""}`}
                                  height="84"
                                  src={`${imageSrc}`}
                                  width="84"
                                />
                                {isOverlay && (
                                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-xs font-bold">
                                    {/* Optional: Add any overlay text or content here */}
                                    <span>{`+${imagesUrl.length - 3}`}</span>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                          <Button
                            onPress={imageHandler}
                            variant="ghost"
                            className="flex  aspect-square w-full h-full items-center justify-center rounded-md border border-dashed"
                          >
                            <Upload className="h-4 w-4 text-muted-foreground" />
                            <input
                              multiple
                              type="file"
                              ref={fileInputRef}
                              onChange={handleFileChange}
                              className="hidden"
                            />
                            <span className="sr-only">Upload</span>
                          </Button>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 md:hidden">
                <Button color="danger" variant="bordered" size="sm">
                  Discard
                </Button>
                <Button color="success" type="submit" size="sm">
                  Save Venue
                </Button>
              </div>
            </div>
          </form>
        </main>
        <Divider className="my-4" />
      </div>
    </div>
  );
}
