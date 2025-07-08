import building from "../../../assets/whydigiyog/building.png";
import halfCircle from "../../../assets/whydigiyog/halfCircle.png";
import blockChain from "../../../assets/whydigiyog/blockChain.png";
import halal from "../../../assets/whydigiyog/halal.png";
import roi from "../../../assets/whydigiyog/roi.png";
import legal from "../../../assets/whydigiyog/legal.png";
import secondary from "../../../assets/whydigiyog/secondary.png";
import seller from "../../../assets/whydigiyog/seller.png";
import rectangle1 from "../../../assets/whydigiyog/Rectangle 217.png";
import rectangle2 from "../../../assets/whydigiyog/Rectangle 218.png";

const WhyDigiyog = () => {
  return (
    <div className="relative z-10">
      <div className="whyBg lg:mt-32 ">
        <div className="container mx-auto p-4">
          <h1 className="text-4xl md:text-left text-center font-montSemiBold lg:mt-96 text-white lg:text-black mt-32">
            why <br /> Digiyog?
          </h1>
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-5  lg:-mt-5 ">
            <div className="grid gap-4">
              {/* first row */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* first card */}
                <div className="p-[2px] rounded-2xl bg-gradient-to-b from-[#006838] to-[#97FF07] h-full">
                  <div className="flex items-center gap-4 p-4 bg-[#BCDC8F] rounded-2xl h-full">
                    <img src={blockChain} alt="Blockchain Secured" />
                    <h3 className="text-black ">
                      Blockchain <br /> Secured
                    </h3>
                  </div>
                </div>

                {/* second card */}
                <div className="p-[2px] rounded-2xl bg-gradient-to-b from-[#006838] to-[#97FF07] h-full">
                  <div className="flex items-center gap-4 p-4 bg-[#BCDC8F] rounded-2xl h-full">
                    <img src={halal} alt=" Halal Investment" />
                    <h3 className="text-black  ">
                      Halal <br /> Investment
                    </h3>
                  </div>
                </div>
                {/* third card */}
                <div className="p-[2px] rounded-2xl bg-gradient-to-b from-[#006838] to-[#97FF07] h-full">
                  <div className="flex items-center gap-4 p-4 bg-[#BCDC8F] rounded-2xl h-full">
                    <img src={roi} alt="High ROI Assets" />
                    <h3 className="text-black ">
                      High ROI <br /> Assets
                    </h3>
                  </div>
                </div>
              </div>
              {/* second row  */}
              <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* first card */}
                <div className="p-[2px] rounded-2xl bg-gradient-to-b from-[#006838] to-[#97FF07]">
                  <div className="flex items-center gap-4 p-4 bg-[#BCDC8F] rounded-2xl">
                    <img src={legal} alt="Legally Verified Properties" />
                    <h3 className="text-black">
                      Legally Verified <br /> Properties
                    </h3>
                  </div>
                </div>
                {/* second card  */}
                <div className="p-[2px] rounded-2xl bg-gradient-to-b from-[#006838] to-[#97FF07]">
                  <div className="flex items-center gap-4 p-4 bg-[#BCDC8F] rounded-2xl">
                    <img src={seller} alt="Seller Onboarding Option" />
                    <h3 className="text-black">
                      Seller Onboarding <br /> Option
                    </h3>
                  </div>
                </div>
              </div>
              {/* third row  */}
              <div className="grid grid-col-1 md:grid-cols-3 gap-4 ">
                <div className="p-[2px] rounded-2xl bg-gradient-to-b from-[#006838] to-[#97FF07]">
                  <div className="flex items-center gap-4 p-4 bg-[#BCDC8F] rounded-2xl">
                    <img src={secondary} alt="Secondary Marketplace" />
                    <h3 className="text-black">
                      Secondary <br />
                      Marketplace
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative justify-end">
              <img src={halfCircle} className="absolute z-0 top-28 md:top-32" />
              <img src={building} alt="building" className="relative" />
            </div>
          </div>
        </div>
      </div>
      <img
        src={rectangle1}
        className="lg:absolute lg:top-14 lg:left-44 xl:top-[70px] xl:left-80 2xl:top-52 2xl:left-80 -z-10 hidden lg:block"
        alt=""
      />
      <img
        src={rectangle2}
        className="lg:absolute top-24 right-0 2xl:top-44 -z-10 hidden lg:block "
        alt=""
      />
    </div>
  );
};

export default WhyDigiyog;
