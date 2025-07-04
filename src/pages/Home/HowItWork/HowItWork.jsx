import { useEffect, useState } from "react";

const HowItWork = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/howitworks.json")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div className="container mx-auto mt-10 min-h-screen">
      <h1 className="text-5xl text-center font-montHeavy font-bold">
        How It Works
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 shadow-2xl px-4 py-10 md:px-10 md:py-14 lg:px-16 lg:py-20 rounded-2xl">
        {data.map((item, index) => (
          <div className="relative w-full md:w-72 h-56 bg-gray-100 rounded-xl p-6 pt-12 shadow-md mt-5 md:mt-0">
            {/* Floating "Step" label */}
            <div
              className={`absolute -top-4 left-6 ${item.color} text-black px-7 rounded-b-[10px] py-1 rounded-md font-semibold text-sm shadow`}
            >
              Step
            </div>

            {/* Step number and content */}
            <div className="flex items-start gap-4">
              <div className="text-5xl font-bold text-black">{item.step}</div>
              <div>
                <h3 className="text-2xl font-semibold text-black">
                  {item.title}
                </h3>
                <p className="text-md mt-1 text-gray-700">{item.description}</p>
              </div>
            </div>

            {/* Green box at bottom */}
            <div
              className={`w-20 left-3 h-28 absolute -bottom-8 ${item.color} rounded-md mt-6`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWork;
