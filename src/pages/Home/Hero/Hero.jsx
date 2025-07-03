import phone from "../../../assets/hero/iPhone-14-Pro-Perspective-Mockup 1.png";
import playStore from "../../../assets/hero/playstore.png";
const Hero = () => {
  return (
    <div className=" h-dvh">
      <div className="flex justify-around gap-10  items-center flex-col lg:flex-row-reverse">
        <img src={phone} className="max-w-sm rounded-lg" />
        <div className="md:w-[500px]">
          <h1 className="md:text-6xl text-5xl font-bold font-montHeavy lg:mt-20">
            Wanna Own <span className="text-[#06582C]">Real Estate </span>With
            Just <br /> <span className="md:text-8xl ">500 Taka?</span>
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
