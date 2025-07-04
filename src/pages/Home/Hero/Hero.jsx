import phone from "../../../assets/hero/iPhone-14-Pro-Perspective-Mockup 1.png";
import playStore from "../../../assets/hero/playstore.png";
import greenBg from "../../../assets/hero/greenBg.png";
import leftCircle from "../../../assets/hero/leftCircle.png";
import rightCircle from "../../../assets/hero/rightCircle.png";
const Hero = () => {
  return (
    <div className=" min-h-screen">
      <div className="flex justify-around gap-10  items-center flex-col lg:flex-row-reverse">
        <div className="relative w-[500px]">
          <img
            src={leftCircle}
            alt="left-circle"
            className="absolute md:left-0 left-10"
          />

          <img
            src={greenBg}
            alt="greenBg"
            className="absolute top-20 left-15  w-sm"
          />
          <img src={phone} className=" relative left-14 max-w-sm rounded-lg" />
          <img
            src={rightCircle}
            alt="right-circle"
            className="absolute -bottom-5 right-10 md:right-0 "
          />
        </div>
        <div className="md:w-[500px]">
          <h1 className="md:text-6xl text-5xl font-bold font-montHeavy lg:mt-20">
            Wanna Own <span className="text-[#06582C]">Real Estate </span>With
            Just <br />{" "}
            <span className="md:text-8xl text-lime-500">500 Taka?</span>
          </h1>
          <p className="py-6 font-montLight font-bold text-xl">
            Start investing in land, flats & resorts. Legally verified.
            Blockchain secured. Earn rental income & grow your wealth.
          </p>
          <div className="flex flex-col md:flex-row lg:flex-col  gap-5">
            <button className="btn bg-[#06582C] text-white border-0 w-56">
              Get Started
            </button>

            <button className="btn border  bg-transparent border-black text-black w-56 hover:border-white hover:text-white">
              Get the app from Playstore
              <img src={playStore} alt="playstore" width={13} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
