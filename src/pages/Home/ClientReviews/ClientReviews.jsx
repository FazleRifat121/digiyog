import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { IoMdStar } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
const ClientReviews = () => {
  useGSAP(() => {
    gsap.from("#reviewCards > div", {
      scrollTrigger: {
        trigger: "#reviewCards",
        start: "top 80%",
        toggleActions: "restart none none none",
      },
      y: 100,
      opacity: 0,
      duration: 1.5,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, []);
  return (
    <div className=" p-4">
      <div>
        <h2 className=" text-5xl text-center font-montHeavy font-bold mt-10">
          Client Reviews
        </h2>

        <div
          className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20"
          id="reviewCards"
        >
          {/* firstCard */}
          <div className="max-w-sm h-56 p-6 bg-green-800 text-white rounded-2xl relative lg:ml-10">
            <div className="absolute top-4 right-4 flex gap-1 text-yellow-400">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <span key={i}>
                    <IoMdStar />
                  </span>
                ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-300"></div>
              <div>
                <h2 className="font-bold text-xl">Tanim</h2>
                <p className="text-md text-gray-200 font-bold">Dhaka</p>
              </div>
            </div>

            <div className="mt-7 text-md  text-gray-100 relative">
              <span className="text-green-300 text-xl leading-none">“</span>
              <p className="inline text-gray-300">
                I invested just 5,000 taka and now I’m earning rent every month.
                Finally, something real!
              </p>
              <span className="text-green-300 text-xl leading-none">”</span>
            </div>

            <div className="absolute bottom-2 right-2 text-white text-4xl">
              <IoMdArrowDropright />
            </div>
          </div>
          {/* second */}
          <div className="max-w-sm h-56 p-6 bg-green-800 text-white rounded-2xl relative  lg:ml-10">
            <div className="absolute top-4 right-4 flex gap-1 text-yellow-400">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <span key={i}>
                    <IoMdStar />
                  </span>
                ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-300"></div>
              <div>
                <h2 className="font-bold text-xl">Tanim</h2>
                <p className="text-md text-gray-200 font-bold">Dhaka</p>
              </div>
            </div>

            <div className="mt-7 text-md  text-gray-100 relative">
              <span className="text-green-300 text-xl leading-none">“</span>
              <p className="inline text-gray-300">
                I invested just 5,000 taka and now I’m earning rent every month.
                Finally, something real!
              </p>
              <span className="text-green-300 text-xl leading-none">”</span>
            </div>

            <div className="absolute bottom-2 right-2 text-white text-4xl">
              <IoMdArrowDropright />
            </div>
          </div>
          {/* third */}
          <div className="max-w-sm h-56 p-6 bg-green-800 text-white rounded-2xl relative  lg:ml-10">
            <div className="absolute top-4 right-4 flex gap-1 text-yellow-400">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <span key={i}>
                    <IoMdStar />
                  </span>
                ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-300"></div>
              <div>
                <h2 className="font-bold text-xl">Tanim</h2>
                <p className="text-md text-gray-200 font-bold">Dhaka</p>
              </div>
            </div>

            <div className="mt-7 text-md  text-gray-100 relative">
              <span className="text-green-300 text-xl leading-none">“</span>
              <p className="inline text-gray-300">
                I invested just 5,000 taka and now I’m earning rent every month.
                Finally, something real!
              </p>
              <span className="text-green-300 text-xl leading-none">”</span>
            </div>

            <div className="absolute bottom-2 right-2 text-white text-4xl">
              <IoMdArrowDropright />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;
