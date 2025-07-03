import Navbar from "../../shared/Navbar/Navbar";
import Hero from "./Hero/Hero";

const Home = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#FFFFFF] to-[#8EC63F]">
      <div className="max-w-[1200px] mx-auto p-4">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default Home;
