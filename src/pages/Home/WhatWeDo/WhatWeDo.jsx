import magnify from "../../../assets/whatwedo/magnify.png";
const WhatWeDo = () => {
  return (
    <div>
      <div className=" py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-7xl font-bold mb-6 ">
            What <br /> We Do
          </h2>
          <p className="text-lg w-[490px]">
            All legal, financial, and operational tasks? We handle that. You
            simply invest, track, and earn
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* card 1  */}
            <div className="p-[2px] mt-8 rounded-lg bg-gradient-to-r  from-[#A3D65C] to-[#006838 shadow-md xl:w-[400px]">
              <div className="bg-[#D9D9D9] p-6 rounded-lg flex items-center justify-around">
                <img src={magnify} alt="Magnify" className="w-10 h-10" />
                <p className="w-44 bg-gradient-to-r from-[#A3D65C] to-[#006838] bg-clip-text text-transparent font-semibold">
                  Carefully select lands, flats, and commercial assets
                </p>
              </div>
            </div>
            {/* card 2  */}
            <div className="p-[2px] mt-8 rounded-lg bg-gradient-to-r  from-[#A3D65C] to-[#006838 shadow-md xl:w-[400px]">
              <div className="bg-[#D9D9D9] p-6 rounded-lg flex items-center justify-around">
                <img src={magnify} alt="Magnify" className="w-10 h-10" />
                <p className="w-44 bg-gradient-to-r from-[#A3D65C] to-[#006838] bg-clip-text text-transparent font-semibold">
                  Legally verify each property through due diligence
                </p>
              </div>
            </div>
            {/* card 3  */}
            <div className="p-[2px] mt-8 rounded-lg bg-gradient-to-r  from-[#A3D65C] to-[#006838 shadow-md xl:w-[400px]">
              <div className="bg-[#D9D9D9] p-6 rounded-lg flex items-center justify-around">
                <img src={magnify} alt="Magnify" className="w-10 h-10" />
                <p className="w-44 bg-gradient-to-r from-[#A3D65C] to-[#006838] bg-clip-text text-transparent font-semibold">
                  Fractionalize the property into digital shares
                </p>
              </div>
            </div>
            {/* card 4  */}
            <div className="p-[2px] mt-8 rounded-lg bg-gradient-to-r  from-[#A3D65C] to-[#006838 shadow-md xl:w-[400px] xl:ml-40">
              <div className="bg-[#D9D9D9] p-6 rounded-lg flex items-center justify-around">
                <img src={magnify} alt="Magnify" className="w-10 h-10" />
                <p className="w-44 bg-gradient-to-r from-[#A3D65C] to-[#006838] bg-clip-text text-transparent font-semibold">
                  Fractionalize the property into digital shares
                </p>
              </div>
            </div>
            {/* card 5  */}
            <div className="p-[2px] mt-8 rounded-lg bg-gradient-to-r  from-[#A3D65C] to-[#006838 shadow-md xl:w-[400px]  xl:ml-40">
              <div className="bg-[#D9D9D9] p-6 rounded-lg flex items-center justify-around">
                <img src={magnify} alt="Magnify" className="w-10 h-10" />
                <p className="w-44 bg-gradient-to-r from-[#A3D65C] to-[#006838] bg-clip-text text-transparent font-semibold">
                  Fractionalize the property into digital shares
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
