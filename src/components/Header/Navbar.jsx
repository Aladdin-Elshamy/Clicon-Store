import {
  ArrowDown,
  ArrowUp,
  Location,
  ArrowsClockwise,
  Headphones,
  Info,
  Phone,
} from "@/utilities/util.icons";
import { useState } from "react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  function handleClick() {
    setIsDropdownOpen(!isDropdownOpen);
  }
  return (
    <div className="border-b border-[#E4E7E9] py-4">
      <div className="container flex flex-col gap-4 sm:flex-row items-center justify-between">
        <ul className="flex gap-6 text-sm text-gray-600 flex-wrap">
          <li
            className={`${
              isDropdownOpen
                ? "text-white bg-[#FA8232]"
                : "bg-gray-50 text-black"
            } gap-2 cursor-pointer flex items-center py-4 px-6`}
            onClick={handleClick}
          >
            <span className="font-semibold">All Categories</span>
            <span>{isDropdownOpen ? <ArrowUp /> : <ArrowDown />}</span>
          </li>
          <li className="gap-2 flex items-center cursor-pointer">
            <span>
              <Location />
            </span>
            <span>Track Order</span>
          </li>
          <li className="gap-2 flex items-center cursor-pointer">
            <span>
              <ArrowsClockwise />
            </span>
            <span>Compare</span>
          </li>
          <li className="gap-2 flex items-center cursor-pointer">
            <span>
              <Headphones />
            </span>
            <span>Customer Support</span>
          </li>
          <li className="gap-2 flex items-center cursor-pointer">
            <span>
              <Info />
            </span>
            <span>Need Help</span>
          </li>
        </ul>
        <div className="flex gap-4 items-center mr-auto sm:mr-0 mt-8 sm:mt-0">
          <span>
            <Phone />
          </span>
          <span className="text-black text-lg">+1-202-555-0104</span>
        </div>
      </div>
    </div>
  );
}
