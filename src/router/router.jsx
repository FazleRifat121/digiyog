import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Properties from "../pages/Properties/Properties";
import Faq from "../pages/Faq/Faq";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="properties" element={<Properties />} />
      <Route path="faq" element={<Faq />} />
    </Route>
  )
);
