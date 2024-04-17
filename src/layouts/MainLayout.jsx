import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";
const MainLayout = () => {
  return (
    <div>
      <div className="container mx-auto">
        <Navbar />
        <Outlet />
      </div>
      <div className="mt-10">
        <Footer></Footer>
      </div>
      <ToastContainer
      position="top-center" />
    </div>
  );
};

export default MainLayout;
