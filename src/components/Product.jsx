import { useNavigate } from "react-router-dom";
export default function Product({ product }) {
  const { images, description, price, rating } = product;

  const navigate = useNavigate();

  return (
    <>
      <div className="overflow-hidde relative flex justify-center flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
        <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
          <img className="object-contain w-full" src={images[0]} />
        </div>
        <div className="mt-4 px-5 pb-5">
          <a href="#">
            <h5 className="text-xl tracking-tight text-slate-900">
              {description.slice(0, 15)}
            </h5>
          </a>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-3xl font-bold text-slate-900">
                {Number(price).toFixed(2)}
              </span>
              <span className="text-sm text-slate-900 line-through">
                {Number(price).toFixed(1)}
              </span>
            </p>
            <div className="flex items-center">
              <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                {rating}
              </span>
            </div>
          </div>
          <button
            onClick={() => navigate(`/${product.id}`)}
            className="w-full flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            View Details
          </button>
        </div>
      </div>
    </>
  );
}
