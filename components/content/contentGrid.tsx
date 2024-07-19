import { ContentBody, EmojiKey } from "@/types";
import { Card } from "@nextui-org/card";
import { SecureIcon, SmileIcon, TickIcon } from "../icons";
import { data } from "./data";

const emojis: Record<EmojiKey, JSX.Element> = {
  smile: <SmileIcon />,
  secure: <SecureIcon />,
  tick: <TickIcon />,
};
export const ContentGrid = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Jumpstart Your Event Planning</h2>

          <p className="mt-4">
            VenueHub makes finding and booking the perfect venue for your events a breeze. Discover and reserve venues
            effortlessly with our user-friendly platform.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
          {data.map((el: ContentBody, i) => (
            <Card
            className="flex flex-col justify-start dark:bg-zinc-950 rounded-xl p-8 shadow-xl transition-shadow duration-300 hover:shadow-[10px_10px_20px_rgba(75,0,130,0.3),-10px_10px_20px_rgba(138,43,226,0.3),10px_20px_30px_rgba(255,20,147,0.3)]"
            isPressable
              isBlurred
              key={i}
            >
              {emojis[el.emoji]}

              <h2 className="mt-4 text-xl font-bold text-left">{el.title}</h2>

              <p className="mt-1 text-sm text-left">{el.content}</p>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center"></div>
      </div>
    </section>
  );
};
