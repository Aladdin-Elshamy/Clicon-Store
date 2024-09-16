import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "@/store/Slices/cart";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.products);
  function handleClick() {
    const isProductInCart = cartData.find((item) => item.id === product.id);
    if (isProductInCart) return;
    dispatch(addToCart(product));
  }
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="text-center text-2xl py-52">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-2xl py-32">{error}</div>;
  }
  return (
    <section className="container my-4 items-center flex justify-center gap-8 flex-col md:flex-row">
      <div className="">
        {product.images && (
          <img
            src={product.images[0]}
            alt={product.title}
            className="max-h-[400px] w-full object-cover"
          />
        )}
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl">{product.title}</h2>
        <p className="text-xl text-gray-600 max-w-96 pt-4">
          {product.description}
        </p>
        <p className="text-secondray pt-2">${product.price}</p>
        <button
          onClick={handleClick}
          className="mt-8 w-full flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Add to cart
        </button>
      </div>
    </section>
  );
}
