import circle from "../../../assets/faq/circle.png";

const FaqHalf = () => {
  return (
    <div className="bg-green-900 min-h-screen flex items-center">
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-around flex-col lg:flex-row-reverse gap-5">
          <img src={circle} className="w-[300px]" />
          <div className="lg:w-[500px] w-auto">
            <p className="py-6 text-white font-montRegular">
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
