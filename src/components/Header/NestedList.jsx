import { CATEGORIES } from "@/data";
import { RightFlatArrow } from "@/utilities/util.icons";
import SubMenu from "./SubMenu";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "@/store/Slices/category";
export default function NestedList({ setIsDropdownOpen }) {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <ul className="absolute w-52 top-16 py-3 shadow border left-0 bg-white text-black z-30 flex flex-col gap-2 capitalize">
      {CATEGORIES.map((category) => {
        if (category === "smartphones") {
          return (
            <li
              key={category}
              onClick={() => dispatch(setCategory(category))}
              className={`${
                isSubmenuOpen ? "lg:bg-gray-50" : ""
              } py-2 px-4 cursor-pointer hover:bg-gray-50`}
            >
              <div
                className="flex lg:hidden items-center justify-between"
                onClick={() => {
                  setIsDropdownOpen(false);
                }}
              >
                <span>{category}</span>
                <span className="hidden lg:block">
                  <RightFlatArrow />
                </span>
              </div>
              <div
                onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
                className="hidden lg:flex items-center justify-between"
              >
                <span>{category}</span>
                <span className="hidden lg:block">
                  <RightFlatArrow />
                </span>
              </div>
            </li>
          );
        }
        return (
          <li
            key={category}
            onClick={() => {
              dispatch(setCategory(category));
              setIsDropdownOpen(false);
            }}
            className="py-2 px-4 cursor-pointer hover:bg-gray-50"
          >
            {category}
          </li>
        );
      })}
      {isSubmenuOpen && <SubMenu setIsDropdownOpen={setIsDropdownOpen} />}
    </ul>
  );
}
