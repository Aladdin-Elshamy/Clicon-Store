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
import NestedList from "./NestedList";
import { useSelector } from "react-redux";
export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const category = useSelector((state) => state.category.category);
  function handleClick() {
    setIsDropdownOpen(!isDropdownOpen);
  }
  return (
    <div className="border-b border-[#E4E7E9] py-4">
      <div className="container flex flex-col gap-4 sm:flex-row items-center justify-between">
        <ul className="flex gap-4 text-sm text-gray-600 flex-wrap relative">
          <li
            className={`${
              isDropdownOpen
                ? "text-white bg-[#FA8232]"
                : "hover:bg-gray-50  text-black"
            } gap-2 cursor-pointer flex items-center py-4 px-6`}
            onClick={handleClick}
          >
            <span className="font-semibold capitalize">
              {category === "All" ? "All Categories" : category}{" "}
            </span>
            <span>{isDropdownOpen ? <ArrowUp /> : <ArrowDown />}</span>
          </li>
          {isDropdownOpen && (
            <NestedList setIsDropdownOpen={setIsDropdownOpen} />
          )}
          <li className="hover:bg-gray-50 px-2 gap-2 flex items-center cursor-pointer">
            <span>
              <Location />
            </span>
            <span>Track Order</span>
          </li>
          <li className="hover:bg-gray-50 px-2 gap-2 flex items-center cursor-pointer">
            <span>
              <ArrowsClockwise />
            </span>
            <span>Compare</span>
          </li>
          <li className="hover:bg-gray-50 px-2 gap-2 flex items-center cursor-pointer">
            <span>
              <Headphones />
            </span>
            <span>Customer Support</span>
          </li>
          <li className="hover:bg-gray-50 px-2 gap-2 flex items-center cursor-pointer">
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
