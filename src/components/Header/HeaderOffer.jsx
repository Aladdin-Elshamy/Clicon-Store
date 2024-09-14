import { HashLink } from "react-router-hash-link";
import { RightArrow } from "../../utilities/util.icons";
export default function HeaderOffer() {
  return (
    <div className="bg-gray-900 py-6">
      <div className="container flex items-center justify-between text-white">
        <div className="flex items-center gap-3 font-semibold text-2xl">
          <span className="block bg-warning-300 text-black px-3 py-2 -rotate-3 text-xl">
            Black
          </span>
          Friday
        </div>
        <p className="font-semibold flex items-center gap-2">
          <span className="text-xs font-medium">Up to</span>
          <span className="text-warning-500 text-4xl">59%</span>
          <span className="text-xl">OFF</span>
        </p>
        <HashLink
          to="/#"
          className="flex items-center gap-2 px-6 py-3 bg-warning-500 text-black font-bold rounded-sm"
        >
          <span>Shop Now</span>
          <RightArrow />
        </HashLink>
      </div>
    </div>
  );
}
