import { serviceOptions } from "./data";

export const VenueServices = () => {
  return (
    <ul className="py-3">
      {serviceOptions.map((s, i) => {
        return (
          <li key={i} className="flex items-center gap-6 py-2 px-1 ">
            <div>{s.icon}</div>
            <div>
              <p className="font-semibold text-md ">{s.title}</p>
              <p className="text-sm  leading-7 text-zinc-600 dark:text-zinc-300">{s.description}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
