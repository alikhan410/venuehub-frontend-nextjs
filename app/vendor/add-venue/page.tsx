"use client";
import { ChevronLeft, PlusCircle, Upload, Users2 } from "lucide-react";
import React, { useState, useRef } from "react";
import { CardContent, CardDescription, CardTitle } from "@/components/ui/card";
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
} from "@nextui-org/react";
import { Card, CardFooter, CardHeader, CardBody } from "@nextui-org/card";
import { IconSelector } from "@/components/iconSelector/IconSelector";

export default function Page() {
  // Explicitly typing the ref as an input element
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<JSX.Element | null>(null);
  const [rows, setRows] = useState([{ id: 1 }]);

  const imageHandler = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      console.log("Selected file:", file);
    }
  };
  const addRow = () => {
    console.log(rows.length);
    if (rows.length === 5) {
      setError(<Chip color="danger">Can't add more than 5</Chip>);
      return;
    }
    setError(null);
    setRows([...rows, { id: rows.length + 1 }]);
  };
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData.get("title"));
    console.log(formData.get("description"));
    console.log(formData.getAll("service name"));
    console.log(formData.getAll("service description"));
    console.log(formData.get("guests"));
    console.log(formData.get("booking fee"));
    console.log(formData.get("venue type"));
  };
  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <form onSubmit={submitHandler}>
            <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
              <div className="flex items-center gap-4">
                <Button isIconOnly radius="sm" variant="ghost" className="h-7 w-7">
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Back</span>
                </Button>
                <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                  Add a Venue
                </h1>
                <div className="hidden items-center gap-2 md:ml-auto md:flex">
                  <Button variant="flat" size="sm">
                    Discard
                  </Button>
                  <Button variant="ghost" size="sm">
                    Save Venue
                  </Button>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Venue Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-6">
                        <div className="grid gap-3">
                          <Input
                            name="title"
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
                            name="description"
                            label="Venue Description"
                            size="md"
                            labelPlacement="outside"
                            variant="bordered"
                            placeholder="Enter your description"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>{" "}
                  <Card>
                    <CardHeader>
                      <CardTitle>Venue Features and Services</CardTitle>
                    </CardHeader>
                    <CardContent>
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
                                    <Input size="sm" type="text" name="service name" />
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
                                      name="service description"
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
                    </CardContent>
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
                  <Card x-chunk="dashboard-07-chunk-2">
                    <CardHeader>
                      <CardTitle>Venue Specifications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-6 sm:grid-cols-3">
                        <div className="grid gap-3">
                          <Select
                            name="venue type"
                            size="md"
                            label="Venue Category"
                            labelPlacement="outside"
                            placeholder="Select venue type"
                            className="max-w-xs"
                          >
                            <SelectItem key={"hall"}>Hall</SelectItem>
                            <SelectItem key={"banquet"}>Banquet</SelectItem>
                          </Select>
                        </div>
                        <div className="grid gap-3">
                          <Input
                            name="guests"
                            placeholder=" "
                            size="md"
                            label="Guests Capacity"
                            labelPlacement="outside"
                            type={"number"}
                          />
                        </div>
                        <div className="grid gap-3">
                          <Input
                            name="booking fee"
                            size="md"
                            placeholder=" "
                            label="Booking Fee"
                            labelPlacement="outside"
                            id="bookingFee"
                            endContent={" PKR"}
                            type={"number"}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Product Status</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-6">
                        <div className="grid gap-3">
                          <Select
                            size="md"
                            label="Status"
                            labelPlacement="outside"
                            placeholder="Select status"
                            className="max-w-xs"
                          >
                            <SelectItem key={1} value="draft">
                              Draft
                            </SelectItem>
                            <SelectItem key={2} value="published">
                              Active
                            </SelectItem>
                            <SelectItem key={3} value="archived">
                              Archived
                            </SelectItem>
                          </Select>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
                    <CardHeader>
                      <CardTitle>Product Images</CardTitle>
                      <CardDescription>Lipsum dolor sit amet, consectetur adipiscing elit</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-2">
                        <Image
                          alt="Product image"
                          className="aspect-square w-full rounded-md object-cover"
                          height="300"
                          src={`${process.env.HOST}/images/vendor/grand-banquet/0-gb`}
                          width="300"
                        />
                        <div className="grid grid-cols-3 gap-2">
                          <button>
                            <Image
                              alt="Product image"
                              className="aspect-square w-full rounded-md object-cover"
                              height="84"
                              src={`${process.env.HOST}/images/vendor/grand-banquet/1-gb`}
                              width="84"
                            />
                          </button>
                          <button>
                            <Image
                              alt="Product image"
                              className="aspect-square w-full rounded-md object-cover"
                              height="84"
                              src={`${process.env.HOST}/images/vendor/grand-banquet/2-gb`}
                              width="84"
                            />
                          </button>
                          <Button
                            onPress={imageHandler}
                            variant="ghost"
                            className="flex  aspect-square w-full h-full items-center justify-center rounded-md border border-dashed"
                          >
                            <Upload className="h-4 w-4 text-muted-foreground" />
                            <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
                            <span className="sr-only">Upload</span>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card x-chunk="dashboard-07-chunk-5">
                    <CardHeader>
                      <CardTitle>Archive Product</CardTitle>
                      <CardDescription>Lipsum dolor sit amet, consectetur adipiscing elit.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div></div>
                      <Button size="sm">Archive Product</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 md:hidden">
                <Button variant="bordered" size="sm">
                  Discard
                </Button>
                <Button size="sm">Save Product</Button>
              </div>
            </div>
          </form>
        </main>
        <Divider className="my-4" />
      </div>
    </div>
  );
}
