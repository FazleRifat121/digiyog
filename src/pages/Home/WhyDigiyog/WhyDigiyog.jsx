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
import buildingBg from "../../../assets/whydigiyog/building-bg.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const WhyDigiyog = () => {
  useGSAP(() => {
    gsap.from("#buildingBg", {
      scrollTrigger: {
        trigger: "#why",
        start: "top 80%",
        toggleActions: "restart none none none",
      },
      x: -200,
      duration: 2,
      opacity: 0,
    });

    gsap.from("#buildingImg", {
      scrollTrigger: {
        trigger: "#why",
        start: "top 80%",
        toggleActions: "restart none none none",
      },
      x: 200,
      duration: 2,
      opacity: 0,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#why",
        start: "top 80%",
        toggleActions: "restart none none none",
      },
    });

    tl.from("#firstCardImg", {
      x: -40,
      opacity: 0,
      duration: 0.5,
      ease: "power1.out",
    })
      .from(
        "#firstVector2",
        {
          x: -40,
          opacity: 0,
          duration: 0.04,
          ease: "expo.out",
        },
        "+=0.1"
      )
      .from(
        "#firstDot",
        {
          scale: 0,
          opacity: 0,
          duration: 0.2,
          ease: "back.out(1.7)",
        },
        "+=0.1"
      )
      .from(
        "#firstVector1",
        {
          y: -30,
          opacity: 0,
          duration: 0.04,
          ease: "power2.out",
        },
        "+=0.1"
      )
      .from(
        "#secondDot",
        {
          scale: 0,
          opacity: 0,
          duration: 0.2,
          ease: "back.out(1.7)",
        },
        "+=0.1"
      )
      .from(
        "#secondVector2",
        {
          x: -40,
          opacity: 0,
          duration: 0.04,
          ease: "expo.out",
        },
        "+=0.1"
      )
      .from(
        "#secondCardImg",
        {
          x: -2,
          opacity: 0,
          duration: 0.4,
          ease: "power1.out",
        },
        "+=0.1"
      )
      .from(
        "#secondVector1",
        {
          y: -30,
          opacity: 0,
          duration: 0.04,
          ease: "power2.out",
        },
        "+=0.1"
      )
      .from(
        "#thirdDot",
        {
          scale: 0,
          opacity: 0,
          duration: 0.2,
          ease: "back.out(1.7)",
        },
        "+=0.1"
      )
      .from(
        "#thirdVector2",
        {
          x: 40,
          opacity: 0,
          duration: 0.04,
          ease: "expo.out",
        },
        "+=0.1"
      )
      .from(
        "#thirdCardImg",
        {
          x: 2,
          opacity: 0,
          duration: 0.4,
          ease: "power1.out",
        },
        "+=0.1"
      )
      .from(
        "#thirdVector1",
        {
          y: -30,
          opacity: 0,
          duration: 0.04,
          ease: "power2.out",
        },
        "+=0.1"
      )
      .from(
        "#fourthDot",
        {
          scale: 0,
          opacity: 0,
          duration: 0.2,
          ease: "back.out(1.7)",
        },
        "+=0.1"
      )
      .from(
        "#fourthVector2",
        {
          x: -40,
          opacity: 0,
          duration: 0.04,
          ease: "expo.out",
        },
        "+=0.1"
      )
      .from(
        "#fourthCardImg",
        {
          x: -2,
          opacity: 0,
          duration: 0.4,
          ease: "power1.out",
        },
        "+=0.1"
      )
      .from(
        "#fourthVector1",
        {
          y: -30,
          opacity: 0,
          duration: 0.04,
          ease: "power2.out",
        },
        "+=0.1"
      )
      .from(
        "#fifthDot",
        {
          scale: 0,
          opacity: 0,
          duration: 0.2,
          ease: "back.out(1.7)",
        },
        "+=0.1"
      )
      .from(
        "#fifthVector2",
        {
          x: 40,
          opacity: 0,
          duration: 0.04,
          ease: "expo.out",
        },
        "+=0.1"
      )
      .from(
        "#fifthCardImg",
        {
          x: 2,
          opacity: 0,
          duration: 0.4,
          ease: "power1.out",
        },
        "+=0.1"
      )
      .from(
        "#fifthVector1",
        {
          y: -30,
          opacity: 0,
          duration: 0.04,
          ease: "power2.out",
        },
        "+=0.1"
      )
      .from(
        "#sixthDot",
        {
          scale: 0,
          opacity: 0,
          duration: 0.2,
          ease: "back.out(1.7)",
        },
        "+=0.1"
      )
      .from(
        "#sixthVector2",
        {
          x: -40,
          opacity: 0,
          duration: 0.04,
          ease: "expo.out",
        },
        "+=0.1"
      )
      .from("#sixthCardImg", {
        x: -2,
        opacity: 0,
        duration: 0.4,
        ease: "power1.out",
      });
  }, []);
  return (
    <div className="bg-green-900 relative mt-10  " id="why">
      <div className="container mx-auto p-4 ">
        <h1 className=" text-white text-5xl text-center font-montHeavy font-bold mt-10">
          Why Digiyog?
        </h1>

        <div className="flex justify-between items-center flex-col-reverse lg:flex-row gap-10 mt-20">
          <div className="w-[700px]  ml-64 lg:ml-0 ">
            {/* first card  */}
            <div className="flex items-center relative ">
              <img
                src={firstCard}
                className="w-32 ml-15 mt-[17px] md:w-auto md:ml-0 md:mt-0"
                id="firstCardImg"
              />
              <img
                src={vector2}
                className="absolute left-[180px] top-[50px]  "
                id="firstVector2"
              />
              <img
                src={orangeDot}
                className="absolute left-52 top-11"
                id="firstDot"
              />
              <img
                src={vector1}
                className="absolute lg:h-24 h-[90px] left-[215px] top-15"
                id="firstVector1"
              />
            </div>
            {/* second card  */}
            <div className="flex flex-col-reverse items-center relative">
              <img
                src={vector2}
                className="absolute right-[447px] top-[50px] lg:right-[280px] xl:right-[447px] "
                id="secondVector2"
              />
              <img
                src={limeDot}
                className="absolute left-[209px] top-11"
                id="secondDot"
              />
              <img
                src={vector1}
                className="absolute lg:h-24 h-[90px] left-[215px] top-15"
                id="secondVector1"
              />
              <img
                src={secondCard}
                className="mr-[70px] w-32 mt-[17px] md:w-auto md:mr-4 md:mt-0 lg:-mr-38 xl:mr-4"
                id="secondCardImg"
              />
            </div>
            {/* third card  */}
            <div className="flex items-center relative ">
              <img
                src={thirdCard}
                className="w-32 ml-15 mt-[17px] md:w-auto md:ml-0 md:mt-0"
                id="thirdCardImg"
              />
              <img
                src={vector2}
                className="absolute left-[180px] top-[50px]"
                id="thirdVector2"
              />
              <img
                src={purpleDor}
                className="absolute left-52 top-11"
                id="thirdDot"
              />
              <img
                src={vector1}
                className="absolute lg:h-24 h-[90px] left-[215px] top-15"
                id="thirdVector1"
              />
            </div>
            {/* fourth card  */}
            <div className="flex flex-col-reverse items-center relative">
              <img
                src={vector2}
                className="absolute right-[447px] top-[50px] lg:right-[280px] xl:right-[447px] "
                id="fourthVector2"
              />
              <img
                src={yellowDot}
                className="absolute left-[209px] top-11"
                id="fourthDot"
              />
              <img
                src={vector1}
                className="absolute lg:h-24 h-[90px] left-[215px] top-15"
                id="fourthVector1"
              />
              <img
                src={fourthCard}
                className="mr-[70px] w-32 mt-[17px] md:w-auto md:mr-4 md:mt-0"
                id="fourthCardImg"
              />
            </div>
            {/* fifth card  */}
            <div className="flex items-center relative ">
              <img
                src={fifthCard}
                className="w-32 ml-15 mt-[17px] md:w-auto md:ml-0 md:mt-0"
                id="fifthCardImg"
              />
              <img
                src={vector2}
                className="absolute left-[180px] top-[50px]"
                id="fifthVector2"
              />
              <img
                src={blueDot}
                className="absolute left-52 top-11"
                id="fifthDot"
              />
              <img
                src={vector1}
                className="absolute lg:h-24 h-[90px] left-[215px] top-15"
                id="fifthVector1"
              />
            </div>
            {/* sixth card  */}
            <div className="flex flex-col-reverse items-center relative">
              <img
                src={vector2}
                className="absolute right-[447px] top-[50px] lg:right-[280px] xl:right-[447px] "
                id="sixthVector2"
              />
              <img
                src={redDot}
                className="absolute left-[209px] top-11"
                id="sixthDot"
              />
              <img
                src={sixthCard}
                className="mr-[70px] w-32 mt-[17px] md:w-auto md:mr-4 md:mt-0"
                id="sixthCardImg"
              />
            </div>
          </div>
          <div className="relative mt-0">
            <img
              src={buildingImg}
              className="relative z-10 "
              id="buildingImg"
            />
            <img
              src={buildingBg}
              className="absolute top-24 lg:top-28 z-0"
              id="buildingBg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyDigiyog;
