import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store/Slices/cart";
import { Delete } from "@/utilities/util.icons";
export default function Cart() {
  const cartProducts = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  if (cartProducts.length === 0)
    return (
      <h2 className="container mt-4 text-center text-2xl py-52 text-secondray font-semibold">
        Your cart is empty
      </h2>
    );
  return (
    <div className="container my-8">
      <h2 className="text-2xl text-secondray font-semibold">Your Cart</h2>
      {cartProducts.map((product) => (
        <div
          key={product.id}
          className="bg-gray-200 rounded-lg transition-all hover:shadow-md"
        >
          <div className="mt-4 items-center flex justify-between gap-4 flex-col md:flex-row">
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
              <p className="text-xl text-gray-800 pt-4">
                {product.description}
              </p>
              <div className="flex items-center justify-between pr-8">
                <p className="text-secondray pt-2">${product.price}</p>
                <button onClick={() => dispatch(removeFromCart(product.id))}>
                  <Delete />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
