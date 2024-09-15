import { Logo, Cart, Favourite, User, Search } from "@/utilities/util.icons";
import { useState } from "react";

export default function LowerHeader() {
  const [product, setProduct] = useState("");
  return (
    <div className="bg-secondray">
      <div className="container gap-4 py-5 flex items-center justify-between flex-col sm:flex-row">
        <div className="flex items-center gap-2 mx-auto md:mx-0">
          <Logo />
          <h1 className="uppercase text-white font-bold text-3xl">Clicon</h1>
        </div>
        <form
          action=""
          className="w-full sm:w-2/4 relative"
          onSubmit={(e) => {
            e.preventDefault();
            setProduct("");
          }}
        >
          <input
            placeholder="Search for anything..."
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            type="text"
            className="bg-white px-5 py-4 w-full text-sm rounded-sm placeholder:text-gray-500"
          />
          <button className="absolute top-1/2 -translate-y-1/2 right-5">
            <Search />
          </button>
        </form>
        <div className="flex items-center gap-4">
          <Cart />
          <Favourite />
          <User />
        </div>
      </div>
    </div>
  );
}
