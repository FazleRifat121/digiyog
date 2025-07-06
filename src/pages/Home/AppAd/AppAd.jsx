import bgCircle from "../../../assets/appAd/bgCircle.png";
import mobileDown from "../../../assets/appAd/mobileDown.png";
import mobileUp from "../../../assets/appAd/mobileUp.png";
import appComingSoon from "../../../assets/appAd/appComingSoon.png";
import googleplay from "../../../assets/appAd/googleplay.png";
import appstore from "../../../assets/appAd/appstore.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AppAd = () => {
  useGSAP(() => {
    gsap.from("#mobileUp", {
      scrollTrigger: {
        trigger: "#appAd",
        start: "top 80%",
        toggleActions: "restart none none none",
      },
      y: -100,
      duration: 2,
      opacity: 0,
      ease: "power1.out",
    });
    gsap.from("#mobileDown", {
      scrollTrigger: {
        trigger: "#appAd",
        start: "top center",
        toggleActions: "restart none none none",
      },
      y: 100,
      duration: 2,
      opacity: 0,
      ease: "power1.out",
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#appAd",
        start: "top 80%",
        toggleActions: "restart none none none",
      },
    });
    tl.from("#comingSoon", {
      x: 100,
      delay: 3,
      duration: 0.1,
      opacity: 0,
      ease: "power1.out",
    }).from(
      "#googlePlay, #appStore",
      {
        x: 100,
        duration: 0.1,
        opacity: 0,
        ease: "power1.out",
        stagger: 0.2,
      },
      "<=0.5"
    );
  }, []);
  return (
    <div className="relative bg-base-200 mt-10" id="appAd">
      <div className="grid items-center min-h-[770px] container mx-auto ">
        <div className="flex flex-col lg:flex-row justify-around items-center">
          <div>
            <img
              src={mobileUp}
              alt="mobileup"
              className="absolute left-52 md:left-[400px] lg:top-0 lg:left-[340px] xl:top-0 xl:left-[627px] z-10 w-32 md:w-auto"
              id="mobileUp"
            />
            <img
              src={bgCircle}
              className="xl:absolute xl:top-10 xl:left-[270px] z-0 w-2xl"
              id="bgCircle"
            />
            <img
              src={mobileDown}
              alt="mobiledown"
              className="absolute top-[220px] left-20 md:top-[300px] md:left-32 lg:top-[385px] lg:left-20 xl:top-96 xl:left-[350px] w-32 md:w-auto"
              id="mobileDown"
            />
          </div>
          <div className="flex flex-col items-end gap-10 mt-32 xl:mt-20 xl:ml-32">
            <img src={appComingSoon} alt="app coming soon" id="comingSoon" />
            <div>
              <img
                src={googleplay}
                alt="googleplay"
                className="w-sm"
                id="googlePlay"
              />
              <img
                src={appstore}
                alt="googleplay"
                className="w-sm h-52"
                id="appStore"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppAd;
