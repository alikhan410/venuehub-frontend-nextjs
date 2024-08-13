import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div className="px-4 py-8">
      <div className={title()} style={{ fontSize: "2rem", fontWeight: "bold" }}>
        About Us
      </div>
      <br />
      <div className="text-center text-xl font-semibold">
        "Simplifying Venue Booking with Excellence and Innovation"
      </div>
      <p className="mt-4 mb-6 text-lg leading-relaxed">
        Welcome to VenueHub, Pakistan's premier platform dedicated to revolutionizing the way you book venues. Whether
        you're planning a grand wedding, a corporate event, or a special celebration, VenueHub is here to streamline
        your venue booking experience. Our platform connects you with a diverse range of venues across Pakistan,
        ensuring that you find the perfect location for your event with ease.
      </p>
      <p className="text-center text-md font-sans py-3">
        At VenueHub, we are committed to providing a seamless booking process for both customers and venue owners. Our
        user-friendly interface allows customers to browse, compare, and book venues effortlessly, while venue owners
        benefit from our efficient management tools designed to optimize their bookings and enhance their online
        presence.
      </p>
      <p className="mt-4 mb-6 text-lg leading-relaxed">
        Our mission is to simplify the venue booking process, making it accessible and convenient for everyone. With our
        dedicated team of professionals and our innovative platform, we strive to make every event a success by ensuring
        that the venue selection process is as smooth and stress-free as possible.
      </p>
      <p className="mt-4 text-lg leading-relaxed">
        Join us at VenueHub and experience a new level of ease and efficiency in venue booking. We are proud to serve
        the vibrant community of Pakistan and are committed to enhancing your event planning journey with excellence and
        dedication.
      </p>
    </div>
  );
}
