import { Outlet } from "react-router-dom";
import Header from "../components/Header/index.jsx";
import Footer from "../components/Footer.jsx";
export default function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
