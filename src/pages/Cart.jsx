import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store/Slices/cart";
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6L19 20C19 21.1 18.1 22 17 22H7C5.9 22 5 21.1 5 20V6"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                    <path d="M9 6L9 3C9 2.45 9.45 2 10 2H14C14.55 2 15 2.45 15 3L15 6"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
