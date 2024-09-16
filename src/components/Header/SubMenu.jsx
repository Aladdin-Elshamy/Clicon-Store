import { WhiteRightArrow } from "@/utilities/util.icons";

export default function SubMenu({ setIsDropdownOpen }) {
  return (
    <div className="bg-white absolute hidden xl:top-[25rem] xl:flex-row xl:-right-[63rem] border lg:flex gap-5 p-5 items-center lg:flex-col lg:-right-[40rem]">
      <div className="flex gap-5">
        <ul className="[&>li]:text-gray-400 [&>li]:cursor-pointer [&>li]:py-2 [&>li]:px-3 [&>li:hover]:bg-gray-50 flex flex-col gap-2 w-[10rem] rounded">
          <li>All</li>
          <li>iPhone</li>
          <li>Samsung</li>
          <li>Realme</li>
          <li>Xiami</li>
          <li>Oppo</li>
          <li>Vivo</li>
          <li>OnePlus</li>
          <li>Huawei</li>
          <li>Infinix</li>
          <li>Techno</li>
        </ul>
        <div className="flex flex-col gap-4 w-96">
          <h4 className="text-black font-semibold text-lg">Featured Phones</h4>
          <div
            onClick={() => setIsDropdownOpen(false)}
            className="flex items-center gap-3 border px-4 py-3 cursor-pointer"
          >
            <div>
              <img src="./images/ps5.png" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="max-w-48">
                Samsung Electronics Samsung Galexy S21 5G
              </p>
              <p className="text-[#2DA5F3] font-semibold">$160</p>
            </div>
          </div>
          <div
            onClick={() => setIsDropdownOpen(false)}
            className="flex items-center gap-3 border px-4 py-3 cursor-pointer"
          >
            <div>
              <img src="./images/camera.png" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="max-w-48">
                Simple Mobile 5G LTE Galexy 12 Mini 512GB Gaming Phone
              </p>
              <p className="text-[#2DA5F3] font-semibold">$1,500</p>
            </div>
          </div>
          <div
            onClick={() => setIsDropdownOpen(false)}
            className="flex items-center gap-3 border px-4 py-3 cursor-pointer"
          >
            <div>
              <img src="./images/phone.png" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="max-w-48">
                Sony DSCHX8 High Zoom Point & Shoot Camera
              </p>
              <p className="flex items-center gap-2 font-semibold">
                <span className="text-gray-400 line-through">$3200</span>
                <span className="text-[#2DA5F3]">$2,300</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-8 flex flex-col justify-center gap-6 bg-[#F7E99E] rounded h-[416px] max-w-96">
        <div className="flex flex-col items-center">
          <img src="./images/phone-offer.png" className="pb-3 mx-auto" alt="" />
          <h5 className="text-[#191C1F] text-xl font-semibold pb-2">
            21% Discount
          </h5>
          <p className="text-gray-700 pb-4">
            Escape the noise, It&apos;s time to hear the magic with Xiaomi
            Earbuds.
          </p>
          <div className="flex justify-center items-center gap-2">
            <p className="text-gray-700 text-sm">Starting price:</p>
            <p className="black bg-white px-3 py-2 font-semibold rounded">
              $99 USD
            </p>
          </div>
          <button
            onClick={() => setIsDropdownOpen(false)}
            className="flex gap-2 bg-[#FA8232] text-white justify-center w-full py-4 mt-6"
          >
            <span className="font-bold uppercase">Shop now</span>
            <WhiteRightArrow />
          </button>
        </div>
      </div>
    </div>
  );
}
