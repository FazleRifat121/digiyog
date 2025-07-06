import { useGSAP } from "@gsap/react";
import circle from "../../../assets/faq/circle.png";
import gsap from "gsap";
const Faq = () => {
  useGSAP(() => {
    gsap.from("#circle2", {
      scrollTrigger: {
        trigger: "#circle2",
        start: "top 80%",
        toggleActions: "restart",
        scrub: true,
      },
      x: 100,
      duration: 2,
    });
  }, []);
  return (
    <div className="relative">
      <div className="container mx-auto p-4 bg-green-800 rounded-3xl relative z-10">
        <div className="flex flex-col items-center justify-around lg:flex-row ">
          <div className="lg:w-52 text-center lg:text-left mt-20">
            <h1 className="text-6xl text-white font-bold leading-15 ">
              Frequently Asked Questions
            </h1>
          </div>
          <div className="mt-20">
            <div className="collapse collapse-arrow bg-base-100 border border-base-300 my-3">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title font-semibold">
                How do I create an account?
              </div>
              <div className="collapse-content text-sm">
                Click the "Sign Up" button in the top right corner and follow
                the registration process.
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300  my-3">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">
                I forgot my password. What should I do?
              </div>
              <div className="collapse-content text-sm">
                Click on "Forgot Password" on the login page and follow the
                instructions sent to your email.
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300  my-3">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">
                How do I update my profile information?
              </div>
              <div className="collapse-content text-sm">
                Go to "My Account" settings and select "Edit Profile" to make
                changes.
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300  my-3">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">
                How do I update my profile information?
              </div>
              <div className="collapse-content text-sm">
                Go to "My Account" settings and select "Edit Profile" to make
                changes.
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src={circle}
        className="absolute -bottom-44 right-0 w-[250px] hidden lg:block"
        id="circle2"
      />
    </div>
  );
};

export default Faq;
