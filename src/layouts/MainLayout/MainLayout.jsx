import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { Outlet } from "react-router";
import Footer from "../../shared/Footer/Footer";
// import Navbar from "../../shared/Navbar/Navbar";
gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);
const MainLayout = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
