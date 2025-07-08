import circle from "../../../assets/faq/circle.png";
import ellipse from "../../../assets/faq/Ellipse 34.png";
const FaqHalf = () => {
  return (
    <div className="bg-green-900 min-h-screen flex items-center">
      <div className="container mx-auto p-4 lg:mt-32">
        <div className="flex items-center justify-center flex-col lg:flex-row-reverse gap-5 relative">
          <img
            src={ellipse}
            className="absolute left-5 -top-8 w-[240px] md:left-44 md:-top-7  lg:w-auto lg:left-[550px] xl:left-[670px] 2xl:left-[800px] "
          />
          <img src={circle} className="w-[300px] lg:w-auto" />
          <div className="lg:w-[500px] w-auto ">
            <p className="py-6 text-white font-montRegularg">
              Your investment shares are digitally secured on the blockchain.
              That means no one—not even us—can change or manipulate your
              ownership once recorded. This system is future-proof, scalable,
              and designed with global interoperability in mind.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqHalf;
