import {
  Twitter,
  Facebook,
  Pinterest,
  Reddit,
  Youtube,
  Instgram,
} from "@/utilities/util.icons";
import DropdownMenu from "../DropdownMenu";
import Select from "../Select";
export default function TopHeader() {
  return (
    <div className="bg-secondray text-white py-4 text-sm border-b border-[#77adc5]">
      <div className="container flex items-center justify-between flex-col md:flex-row gap-4 md:gap-0">
        <p>Welcome to Clicon online eCommerce store.</p>
        <div className="flex md:gap-4 gap-0 items-center flex-col md:flex-row">
          <div className="flex items-center gap-4 border-r pr-4 mb-3 md:mb-0">
            <div className="flex items-center gap-2">
              <p>Follow us:</p>
              <ul className="flex items-center gap-3">
                <li>
                  <a href="#">
                    <Twitter />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Facebook />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Pinterest />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Reddit />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Youtube />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Instgram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center">
            <Select />
            <DropdownMenu />
          </div>
        </div>
      </div>
    </div>
  );
}
