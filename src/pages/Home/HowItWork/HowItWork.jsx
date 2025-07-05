import { useEffect, useState } from "react";
import circle from "../../../assets/howitworks/circle.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HowItWork = () => {
  const [data, setData] = useState([]);

  useGSAP(() => {
    gsap.from("#circle", {
      scrollTrigger: {
        trigger: "#circle",
        start: "top 80%",
        toggleActions: "restart",
        scrub: true,
      },
      x: -200,
      duration: 2,
    });
  }, []);
  useEffect(() => {
    fetch("/howitworks.json")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div className="relative ">
      <div className="container mx-auto p-4 mt-10 relative z-10">
        <h1 className="text-5xl text-center font-montHeavy font-bold">
          How It Works
        </h1>
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 shadow-2xl px-4 py-10 md:px-10 md:py-14 lg:px-16 lg:py-20 rounded-2xl bg-white z-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="relative w-full md:w-72 h-56 bg-gray-100 rounded-xl p-6 pt-12 shadow-md mt-5 md:mt-0"
            >
              <div
                className={`absolute -top-4 left-6 ${item.color} text-black px-7 rounded-b-[10px] py-1 rounded-md font-semibold text-sm shadow`}
              >
                Step
              </div>
              <div className="flex items-start gap-4">
                <div className="text-5xl font-bold text-black">{item.step}</div>
                <div>
                  <h3 className="text-2xl font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className="text-md mt-1 text-gray-700">
                    {item.description}
                  </p>
                </div>
              </div>
              <div
                className={`w-20 left-3 h-28 absolute -bottom-8 ${item.color} rounded-md mt-6`}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <img
        src={circle}
        alt="circle"
        className="absolute top-44  w-[300px] z-0 pointer-events-none"
        id="circle"
      />
    </div>
  );
};

export default HowItWork;
