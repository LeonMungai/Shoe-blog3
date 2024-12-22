import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      {" "}
      <div className="sticky top-0">
      <Navbar />
      </div>
      <div className="bg-white min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;