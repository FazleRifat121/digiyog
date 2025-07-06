import Navbar from "../../shared/Navbar/Navbar";
import ClientReviews from "./ClientReviews/ClientReviews";
import Faq from "./ClientReviews/Faq";
import Hero from "./Hero/Hero";
import HowItWork from "./HowItWork/HowItWork";
import WhyDigiyog from "./WhyDigiyog/WhyDigiyog";

const Home = () => {
  return (
    <div>
      <div className="w-full bg-gradient-to-b from-[#FFFFFF] to-[#8EC63F]">
        <div className="max-w-[1200px] mx-auto p-4">
          <Navbar />
          <Hero />
        </div>
      </div>
      <HowItWork />
      <WhyDigiyog />
      <ClientReviews />
      <Faq />
    </div>
  );
};

export default Home;
