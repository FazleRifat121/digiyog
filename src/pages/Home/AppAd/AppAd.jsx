import bgCircle from "../../../assets/appAd/bgCircle.png";
import mobileDown from "../../../assets/appAd/mobileDown.png";
import mobileUp from "../../../assets/appAd/mobileUp.png";
import appComingSoon from "../../../assets/appAd/appComingSoon.png";
import googleplay from "../../../assets/appAd/googleplay.png";
import appstore from "../../../assets/appAd/appstore.png";

const AppAd = () => {
  return (
    <div className="relative bg-base-200 mt-10">
      <div className="grid items-center min-h-[770px] container mx-auto ">
        <div className="flex flex-col lg:flex-row justify-around items-center">
          <div>
            <img
              src={mobileUp}
              alt="mobileup"
              className="absolute left-52 md:left-[400px] lg:top-0 lg:left-[340px] xl:top-0 xl:left-[600px] z-10 w-32 md:w-auto"
            />
            <img
              src={bgCircle}
              className="xl:absolute xl:top-10 xl:left-[270px] z-0 w-2xl"
            />
            <img
              src={mobileDown}
              alt="mobiledown"
              className="absolute top-[220px] left-20 md:top-[300px] md:left-32 lg:top-[385px] lg:left-20 xl:top-96 xl:left-[350px] w-32 md:w-auto"
            />
          </div>
          <div className="flex flex-col items-end gap-10 mt-32 xl:mt-20 xl:ml-32">
            <img src={appComingSoon} alt="app coming soon" />
            <div>
              <img src={googleplay} alt="googleplay" className="w-sm" />
              <img src={appstore} alt="googleplay" className="w-sm h-52" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppAd;
