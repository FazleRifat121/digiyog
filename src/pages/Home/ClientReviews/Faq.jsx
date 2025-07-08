import { useGSAP } from "@gsap/react";
import { IoMdArrowForward } from "react-icons/io";
import gsap from "gsap";
import { Link } from "react-router";
const Faq = () => {
  useGSAP(() => {
    gsap.from("#faqCards > div", {
      scrollTrigger: {
        trigger: "#faqCards",
        start: "top 80%",
        toggleActions: "restart none none none",
      },
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, []);
  return (
    <div className="relative my-5 lg:my-0 p-4 ">
      <div className="container mx-auto p-4 bg-green-800 rounded-3xl relative z-10">
        <div className="flex flex-col items-center justify-around lg:flex-row ">
          <div className="lg:w-52 text-center lg:text-left mt-20">
            <h1 className="text-6xl lg:text-4xl 2xl:text-6xl text-white font-bold leading-15 ">
              Frequently Asked Questions
            </h1>
          </div>
          <div className="mt-20" id="faqCards">
            <div className="collapse collapse-arrow bg-base-100 border border-base-300 my-3">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title font-semibold">
                 How is my investment protected?
              </div>
              <div className="collapse-content text-sm">
                Click the "Sign Up" button in the top right corner and follow
                the registration process.
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300  my-3">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">
                Can I withdraw or sell anytime?
              </div>
              <div className="collapse-content text-sm">
                Click on "Forgot Password" on the login page and follow the
                instructions sent to your email.
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300  my-3">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">
                What are the fees?
              </div>
              <div className="collapse-content text-sm">
                Go to "My Account" settings and select "Edit Profile" to make
                changes.
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300  my-3">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">
                How is Digiyog different from other apps?
              </div>
              <div className="collapse-content text-sm">
                Go to "My Account" settings and select "Edit Profile" to make
                changes.
              </div>
            </div>
            <Link
              to="/"
              className="text-[#8EC63F] flex justify-end items-center"
            >
              <p>View More</p>
              <IoMdArrowForward className="mt-[3px]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
