import React, { useEffect, useState } from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Tab,
  Table,
  TableBody,
  Spinner,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Chip,
  Image,
} from "@nextui-org/react";
import { BookingOrder, BookingStatusResponse, ErrorResponse } from "@/types";
import { getBookingStatus } from "@/actions/booking/getBookingStatus";
import { StripePaymentElementOptions } from "@stripe/stripe-js";

const formateDate = (date: string): string => {
  const dateObj = new Date(date);
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(dateObj);
  return formattedDate;
};

export default function CheckoutForm({ order, clientSecret }: { order: BookingOrder; clientSecret: string }) {
  const [id, setId] = useState<number | null>();
  const [error, setError] = useState<JSX.Element | null>(null);
  const stripe = useStripe();
  const elements = useElements();

  const [guests, setGuests] = useState<number>(0);
  const [venueName, setVenueName] = useState<string>("");
  const [bookingDateTime, setBookingDateTime] = useState("");
  const [mainImage, setMainImage] = useState(null);
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  //   const [vendorName, setVendorName] = useState("");

  useEffect(() => {
    console.log(order);
    if (!stripe) {
      return;
    }

    const get = async () => {
      const res = await getBookingStatus(order.bookingId);
      console.log(res);
      if ((res as ErrorResponse).error) {
        setError(<Chip color="danger">{(res as ErrorResponse).message}</Chip>);
      } else {
        setError(null);
        setGuests(+(res as BookingStatusResponse).guests);
        setVenueName((res as BookingStatusResponse).venueName);
        setBookingDateTime(formateDate((res as BookingStatusResponse).bookingDate));
      }
    };
    get();

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      const id = paymentIntent?.id;
      if (!id) return;
      setId(+id);
    });
  }, [stripe]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `http://localhost:3000/thank-you?clientId=${id}&clientSecret=${clientSecret}&vendor=${order.vendor}`,
      },
    });
    if (error.type === "card_error" || error.type === "validation_error") {
      setError(<Chip color="danger">{error.message}</Chip>);
    } else {
      setError(<Chip color="danger">An unexpected error occurred.</Chip>);
    }

    setIsLoading(false);
  };
  const paymentElementOptions: StripePaymentElementOptions = {
    layout: "tabs",
  };
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card isFooterBlurred radius="lg">
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src={`${process.env.HOST}/images/${order.vendor}/${venueName.replaceAll(" ", "-").toLowerCase()}`}
          />
          <CardFooter className="absolute bottom-0">
            <div className="flex flex-col">
              <h1 className="text-2xl lg:text-4xl font-bold mb-2 lg:mb-4">{venueName}</h1>
              <p className="text-xl lg:text-2xl mb-2 lg:mb-4">
                <em>{order.amount} PKR </em>
              </p>
              <hr className="border-t mb-2 lg:mb-4" />
              <p className="text-sm lg:text-medium leading-5 lg:leading-6 tracking-wider">
                <em>Booked </em>for <em>{guests} guests</em>
              </p>
              <p className="text-sm lg:text-medium leading-5 lg:leading-6 tracking-wider">
                <em>{bookingDateTime} </em>
              </p>
            </div>
          </CardFooter>
        </Card>

        <div className="p-4 lg:p-8">
          <div className="dark:text-zinc-100 flex flex-col gap-2 lg:gap-4 border-b pb-4 mb-4">
            <h2 className="text-base lg:text-lg">Receipt Summary</h2>
            <div>
              <Table hideHeader className="table w-full text-xs lg:text-sm mb-2">
                <TableHeader>
                  <TableColumn>Keys</TableColumn>
                  <TableColumn>Values</TableColumn>
                </TableHeader>
                <TableBody>
                  <TableRow key={1}>
                    <TableCell>Booking Fee</TableCell>
                    <TableCell className="price text-right">{order.amount}</TableCell>
                  </TableRow>
                  <TableRow key={2}>
                    <TableCell>Discount</TableCell>
                    <TableCell className="price text-right">0 PKR</TableCell>
                  </TableRow>
                  <TableRow key={3}>
                    <TableCell>Subtotal</TableCell>
                    <TableCell className="price text-right">{order.amount} PKR</TableCell>
                  </TableRow>
                  <TableRow key={4}>
                    <TableCell>Tax</TableCell>
                    <TableCell className="price text-right">0 PKR</TableCell>
                  </TableRow>
                  <TableRow key={5} className="total text-base lg:text-lg font-bold">
                    <TableCell>Total</TableCell>
                    <TableCell className="price text-right">{order.amount} PKR</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="payment-info">
            <h3 className="payment-heading text-sm lg:text-base mb-4">Payment Information</h3>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <PaymentElement id="payment-element" options={paymentElementOptions} />

              <Button
                className="text-sm lg:text-medium font-medium"
                color="success"
                type="submit"
                disabled={isLoading || !stripe || !elements}
              >
                <span>{isLoading ? <Spinner size="sm" /> : "Book Securely"}</span>
              </Button>
              {error && error}
            </form>

            <p className="footer-text text-xs text-center mt-4">
              <i className="fas fa-lock"></i>
              Your credit card information is encrypted
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
