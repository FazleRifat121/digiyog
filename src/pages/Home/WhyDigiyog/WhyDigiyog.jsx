import firstCard from "../../../assets/whydigiyog/first-card.png";
import orangeDot from "../../../assets/whydigiyog/orange-dot.png";
import secondCard from "../../../assets/whydigiyog/second-card.png";
import limeDot from "../../../assets/whydigiyog/lime-dot.png";
import thirdCard from "../../../assets/whydigiyog/third-card.png";
import purpleDor from "../../../assets/whydigiyog/purple-dot.png";
import fourthCard from "../../../assets/whydigiyog/fourth-card.png";
import yellowDot from "../../../assets/whydigiyog/yellow-dot.png";
import fifthCard from "../../../assets/whydigiyog/fifth-card.png";
import blueDot from "../../../assets/whydigiyog/blue-dot.png";
import sixthCard from "../../../assets/whydigiyog/sixth-card.png";
import redDot from "../../../assets/whydigiyog/red-dot.png";
import vector1 from "../../../assets/whydigiyog/vector-1.png";
import vector2 from "../../../assets/whydigiyog/vector-2.png";
import buildingImg from "../../../assets/whydigiyog/building-img.png";
import buidlingBg from "../../../assets/whydigiyog/building-bg.png";
const WhyDigiyog = () => {
  return (
    <div className="bg-green-900 relative mt-10 ">
      <div className="container mx-auto p-4 ">
        <h1 className=" text-white text-5xl text-center font-montHeavy font-bold mt-10">
          Why Digiyog?
        </h1>

        <div className="flex justify-between items-center flex-col-reverse md:flex-row gap-10">
          <div className="w-[700px]  ml-70 md:ml-0 ">
            {/* first card  */}
            <div className="flex items-center relative">
              <img
                src={firstCard}
                alt=""
                className="w-32 ml-15 mt-[18px] md:w-auto md:ml-0 md:mt-0"
              />
              <img
                src={vector2}
                alt=""
                className="absolute left-[180px] top-[50px] "
              />
              <img src={orangeDot} alt="" className="absolute left-52 top-11" />
              <img
                src={vector1}
                alt=""
                className="absolute h-24 left-[215px] top-15"
              />
            </div>
            {/* second card  */}
            <div className="flex flex-col-reverse items-center relative">
              <img
                src={vector2}
                alt=""
                className="absolute right-[447px] top-[50px] "
              />
              <img
                src={limeDot}
                alt=""
                className="absolute left-[209px] top-11"
              />
              <img
                src={vector1}
                alt=""
                className="absolute h-24 left-[215px] top-15"
              />
              <img
                src={secondCard}
                alt=""
                className="mr-[68px] w-32 mt-[18px] md:w-auto md:mr-4 md:mt-0"
              />
            </div>
            {/* third card  */}
            <div className="flex items-center relative ">
              <img
                src={thirdCard}
                alt=""
                className="w-32 ml-15 mt-[18px] md:w-auto md:ml-0 md:mt-0"
              />
              <img
                src={vector2}
                alt=""
                className="absolute left-[180px] top-[50px]"
              />
              <img src={purpleDor} alt="" className="absolute left-52 top-11" />
              <img
                src={vector1}
                alt=""
                className="absolute h-24 left-[215px] top-15"
              />
            </div>
            {/* fourth card  */}
            <div className="flex flex-col-reverse items-center relative">
              <img
                src={vector2}
                alt=""
                className="absolute right-[447px] top-[50px] "
              />
              <img
                src={yellowDot}
                alt=""
                className="absolute left-[209px] top-11"
              />
              <img
                src={vector1}
                alt=""
                className="absolute h-24 left-[215px] top-15"
              />
              <img
                src={fourthCard}
                alt=""
                className="mr-[68px] w-32 mt-[18px] md:w-auto md:mr-4 md:mt-0"
              />
            </div>
            {/* fifth card  */}
            <div className="flex items-center relative ">
              <img
                src={fifthCard}
                alt=""
                className="w-32 ml-15 mt-[18px] md:w-auto md:ml-0 md:mt-0"
              />
              <img
                src={vector2}
                alt=""
                className="absolute left-[180px] top-[50px]"
              />
              <img src={blueDot} alt="" className="absolute left-52 top-11" />
              <img
                src={vector1}
                alt=""
                className="absolute h-24 left-[215px] top-15"
              />
            </div>
            {/* sixth card  */}
            <div className="flex flex-col-reverse items-center relative">
              <img
                src={vector2}
                alt=""
                className="absolute right-[447px] top-[50px] "
              />
              <img
                src={redDot}
                alt=""
                className="absolute left-[209px] top-11"
              />
              <img
                src={sixthCard}
                alt=""
                className="mr-[68px] w-32 mt-[18px] md:w-auto md:mr-4 md:mt-0"
              />
            </div>
          </div>
          <div className="relative mt-0">
            <img src={buildingImg} alt="" className="relative z-10" />
            <img src={buidlingBg} alt="" className="absolute top-28 z-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyDigiyog;
