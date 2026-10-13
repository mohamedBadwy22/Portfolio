import { LuX } from "react-icons/lu";
import { RxTextAlignJustify } from "react-icons/rx";


export default function DropdownMenuBtn({ isOpen, setIsOpen } : { isOpen: boolean; setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <>
      <button
        aria-label="Dropdown Menu Button"
        onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
        className="bg-white text-xl dark:bg-gray-300 md:hidden dark:outline-0 p-2 outline-2 rounded-full hover:text-black font-medium hover:cursor-pointer hover:bg-gray-400 transition-all duration-300"
      >
        {isOpen ? <LuX /> : <RxTextAlignJustify />}
      </button>
    </>
  );
}
