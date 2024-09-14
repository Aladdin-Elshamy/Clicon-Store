import { Outlet } from "react-router-dom";
import Header from "../components/Header/index.jsx";
export default function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
