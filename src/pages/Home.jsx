import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "@/store/Slices/productList";
import Product from "../components/Product";

export default function Home() {
  const [email, setEmail] = useState("");
  const data = useSelector((state) => state.productList);
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");
  const categories = [
    "beauty",
    "fragrances",
    "furniture",
    "groceries",
    "home-decoration",
    "kitchen-accessories",
    "laptops",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "mobile-accessories",
    "motorcycle",
    "skin-care",
    "smartphones",
    "sports-accessories",
    "sunglasses",
    "tablets",
    "tops",
    "vehicle",
    "womens-bags",
    "womens-dresses",
    "womens-jewellery",
    "womens-shoes",
    "womens-watches",
  ];
  function handleCategoryChange(newCategory) {
    setCategory(newCategory);
  }

  useEffect(() => {
    if (!category) {
      dispatch(fetchProducts());
      return;
    }
    dispatch(
      fetchProducts(`https://dummyjson.com/products/category/${category}`)
    );
  }, [category, dispatch]);
  return (
    <>
      <div className="container text-black">
        <div className="my-4 flex items-center justify-between">
          <h2 className="text-2xl">
            <span className="text-secondray font-semibold capitalize">
              {category ? category : "All"}
            </span>{" "}
            Products
          </h2>
          <div>
            <label htmlFor="category">Filter by Category:</label>
            <select
              id="category"
              value={category}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="ml-2 p-2 border border-gray-300"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
        {data.loading && (
          <p className="text-center text-2xl font-medium text-secondray py-52">
            Loading...
          </p>
        )}
        {!data.loading && data.error ? (
          <p className="text-center text-2xl font-medium text-secondray py-52">
            {data.error}
          </p>
        ) : null}
        {!data.loading && data.data.products?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.data.products?.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        ) : null}
      </div>
      <div className="bg-secondray text-center py-20 mt-4 ">
        <div className="container flex flex-col items-center">
          <h3 className="font-semibold text-3xl text-white">
            Subscribe to our newsletter
          </h3>
          <p className="py-3 text-gray-300 max-w-xl">
            Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
            libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.
          </p>
          <form
            action=""
            className="w-full lg:w-3/5 max-w-9xl relative"
            onSubmit={(e) => {
              e.preventDefault();
              setEmail("");
            }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-6 text-black placeholder:text-gray-500 pl-7"
              placeholder="Email address"
            />
            <button className="bg-[#FA8232] absolute top-1/2 -translate-y-1/2 right-5 uppercase text-white px-4 py-4 flex items-center gap-2">
              Subscribe
            </button>
          </form>
          <div className="bg-[#3376a0] w-48 sm:w-96 h-[1.5px] mt-8 mb-4 sm:mb-0"></div>
          <img src="/images/brands.png" />
        </div>
      </div>
    </>
  );
}
