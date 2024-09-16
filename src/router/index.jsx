import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomePage from "../pages/Home";
import RootLayout from "../pages/RootLayout";
import ProductDetailPage from "../pages/ProductDetail";
import CartPage from "../pages/Cart";
import Protected from "../auth/Protected";
import Login from "../pages/Login";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path=":id"
          element={
            <Protected>
              <ProductDetailPage />
            </Protected>
          }
        />
        <Route
          path="cart"
          element={
            <Protected>
              <CartPage />
            </Protected>
          }
        />
        <Route path="login" element={<Login />} />
      </Route>
    </>
  )
);
