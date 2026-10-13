import { ContactDetails } from "@/types/contact";

export default function ContactCard({ card }: { card: ContactDetails }) {
  return (
    <>
      <div className="flex items-center gap-3 text-lg relative after:content-[''] after:absolute after:-bottom-1.5 after:left-1/2 after:w-10/12 after:transform after:-translate-x-1/2 after:border-b after:border-gray-300 dark:after:border-gray-600">
        <div className="bg-emerald-500 dark:bg-emerald-800 text-white p-1.5 sm:p-3 rounded-full">
          {card.icon}
        </div>

        <div className="flex flex-col">
          <span className="font-semibold">{card.title}</span>
          <span dir={card.forceLtr ? "ltr" : "auto"} className="dark:text-mist-200 sm:mx-2.5 text-sm sm:text-base">
            {card.value}
          </span>
        </div>
      </div>
    </>
  );
}
