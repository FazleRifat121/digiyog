import Navbar from "../../shared/Navbar/Navbar";
import AppAd from "./AppAd/AppAd";
import ClientReviews from "./ClientReviews/ClientReviews";
import Faq from "./ClientReviews/Faq";
import Hero from "./Hero/Hero";
import HowItWork from "./HowItWork/HowItWork";
import WhyDigiyog from "./WhyDigiyog/WhyDigiyog";

const Home = () => {
  return (
    <div>
      <div className="w-full bg-gradient-to-b from-[#FFFFFF] to-[#06582C] ">
        <div className="max-w-[1200px] mx-auto p-4">
          <Navbar />
          <Hero />
        </div>
      </div>
      <div className="bg-green-900">
        <HowItWork />
        <WhyDigiyog />
      </div>
      <ClientReviews />
      <Faq />
      <AppAd />
    </div>
  );
};

export default Home;
