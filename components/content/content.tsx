import { Card } from "@nextui-org/card";

export const Content = () => {
  return (
    <Card
      className=" bg-gray-600 dark:bg-slate-950 block rounded-xl p-8 shadow-xl transition hover:border-purple-400/35 hover:shadow-purple-400/35"
      isPressable
      isBlurred
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        className="bi bi-emoji-laughing"
        viewBox="0 0 16 16"
      >
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
        <path d="M12.331 9.5a1 1 0 0 1 0 1A5 5 0 0 1 8 13a5 5 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5M7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5" />
      </svg>

      <h2 className="mt-4 text-xl font-bold">Flexible Reservations</h2>

      <p className="mt-1 text-sm">
        Secure your preferred venue for up to 2 days while you finalize your decision and payment, ensuring you don’t
        miss out on your desired date.
      </p>
    </Card>
  );
};
