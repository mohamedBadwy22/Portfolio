"use client";

export default function FilterBtn<T extends string>({
  btnsArr,
  active,
  setActive,
}: {
  btnsArr: T[];
  active: T;
  setActive: React.Dispatch<React.SetStateAction<T>>;
}) {
  return (
    <>
      <div
        dir="ltr"
        className="flex justify-center items-center gap-2 sm:gap-3.5"
      >
        {btnsArr.map((btn, index) => {
          return (
            <button
              key={index}
              onClick={() => setActive(btn)}
              className={`${active === btn ? "bg-emerald-500 text-white cursor-default" : "bg-transparent text-emerald-500 outline-2 hover:outline-transparent cursor-pointer hover:bg-emerald-500 hover:text-white "} p-3 select-none outline-emerald-500 text-emerald-500 rounded-full font-bold  transition-all duration-300`}
            >
              {btn.charAt(0).toUpperCase() + btn.slice(1)}
            </button>
          );
        })}
      </div>
    </>
  );
}
