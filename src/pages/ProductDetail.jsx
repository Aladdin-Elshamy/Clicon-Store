import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "@/store/Slices/cart";
import { Add } from "@/utilities/util.icons";

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
          <Add />
          Add to cart
        </button>
      </div>
    </section>
  );
}
