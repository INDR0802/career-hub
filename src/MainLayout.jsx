import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const MainLayout = () => {
  return (
    <>
      <div className="max-w-[80vw] mx-auto">
        <Navbar />
        <Outlet/>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
