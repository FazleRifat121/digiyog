import { useState } from "react";
import Navbar from "../../shared/Navbar/Navbar";

const faqs = [
  {
    question: "Who can invest with Digiyog?",
    answer:
      "Anyone with a Bangladeshi bank account or MFS (Mobile Financial Services) account can invest in fractionalized real estate properties through Digiyog.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "We use advanced cybersecurity technologies and strict access controls to protect user data stored in the cloud.",
  },
  {
    question: "Can I visit the property myself?",
    answer:
      "Yes! We provide property details and encourage you to visit the properties in person.",
  },
  {
    question: "What is the minimum investment amount on Digiyog?",
    answer: "The minimum investment is BDT 500.",
  },
  {
    question: "Is there a maximum amount that I can invest?",
    answer:
      "Digiyog does not set a maximum, but certain properties may have share caps based on demand.",
  },
  {
    question: "What is fractional investment?",
    answer:
      "It's a way for multiple investors to own shares of a single property and earn rental income and appreciation.",
  },
  {
    question: "What benefit does a fractional investment platform provide?",
    answer:
      "It lets anyone invest in real estate affordably by buying small shares of properties.",
  },
  {
    question: "How does it work on Digiyog?",
    answer:
      "You invest from BDT 500, choose properties, and earn returns based on property category and performance.",
  },
];

const investmentFaqs = [
  {
    question: "What is the investment process?",
    answer: `Users can choose from a variety of real estate properties (land, flats, apartments, etc.) and select the number of fractional shares they would like to invest in. After confirming their selection, users can proceed with the checkout process. To complete the transaction, users need to log into their Digiyog account and make the payment. Once payment is completed and verified by Digiyog (which may take 2-3 business days), users will be able to track their investment progress in their <strong>Portfolio</strong> page.`,
  },
  {
    question: "When do I get my return?",
    answer: `Returns depend on the type of investment you make. You can hold your investment until the property reaches maturity or choose to exit early by selling your shares through the <strong>Secondary Marketplace</strong>. The maturity period for each property is clearly stated on the property details page.`,
  },
  {
    question:
      "What if something goes wrong with Digiyog? Is my investment secured?",
    answer: `Your investment is fully secured. Even if Digiyog faces operational challenges, you still own your real estate shares. Your investment is legally protected, and in the event of Digiyog’s closure, you retain full ownership of the property shares and will receive any proceeds from property sales.`,
  },
  {
    question: "What will Digiyog charge me?",
    answer: `Digiyog operates on a profit-sharing model. The platform keeps <strong>20%</strong> of any profits generated from your investment, while you keep <strong>80%</strong>. This percentage only applies to profits, not the original investment amount. There is also a small platform fee that applies to transactions, which is detailed in our <strong>Terms & Conditions</strong>.`,
  },
  {
    question: "How much return do I get on my investment?",
    answer: `The return on investment (ROI) varies by property type and market conditions. Digiyog does not offer fixed returns or interest, and your profits will depend on the performance and appreciation of the property over time. The <strong>forecasted return at maturity</strong> is provided on each property’s details page to give you an estimate. However, please note that these figures are based on previous market data and current trends and may fluctuate.`,
  },
  {
    question: "How do you calculate the value of the property?",
    answer: `The value of properties is evaluated every 3 to 6 months. Digiyog uses market comparables and independent land brokers' average prices to adjust property values. The prices are updated regularly to reflect current market trends, ensuring that the price of your shares aligns with the real-time market value of the property.`,
  },
  {
    question: "When and how will I receive my returns with profit?",
    answer: `Properties on Digiyog are typically held for a maturity period of 3 to 5 years, depending on the type of investment. Once the property is sold, the total appreciated value, including profits, is distributed to investors who hold shares in the property, on a pro-rata basis. The exact maturity period for each property is clearly outlined on the property details page.`,
  },
  {
    question:
      "What if I want to withdraw my invested amount? What is the process?",
    answer: `Currently, withdrawals are not possible unless the property is sold or has reached its maturity. However, Digiyog offers a <strong>Secondary Marketplace</strong> where you can sell your shares to other investors. For more details, please visit the <strong>Marketplace</strong> section.`,
  },
  {
    question: "How do I make the payment for my investment?",
    answer: `Digiyog accepts payments via direct bank transfers or MFS (Mobile Financial Services) platforms like <strong>bKash</strong>. After transferring the funds, you must upload a screenshot of the transaction proof to complete the process. Further details on payment methods are provided during the checkout.`,
  },
];

const Frequent = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [openInvestmentIndex, setOpenInvestmentIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const toggleInvestmentFaq = (index) => {
    setOpenInvestmentIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="bg-green-900">
      <Navbar pic="/white-logo.png" />
      <div className="flex justify-center items-center h-[500px]">
        <h1 className="text-6xl lg:text-4xl 2xl:text-6xl text-white font-bold leading-15 w-[400px] text-center">
          Frequently Asked Questions
        </h1>
      </div>

      <div className="bg-white">
        <div className="container mx-auto p-4">
          {/* first grid */}
          <div className="flex flex-wrap gap-5 mt-10 lg:mt-20">
            {faqs.map((faq, index) => (
              <div key={index} className="w-full md:w-[calc(50%-10px)]">
                <div
                  className={`collapse collapse-arrow border border-base-300 bg-base-100 ${
                    openFaqIndex === index
                      ? "collapse-open [&>div::after]:text-green-500"
                      : ""
                  }`}
                >
                  <div
                    className="collapse-title font-semibold cursor-pointer"
                    onClick={() => toggleFaq(index)}
                  >
                    {faq.question}
                  </div>
                  {openFaqIndex === index && (
                    <div
                      className="collapse-content text-sm"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* second grid */}
          <h1 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold mt-10 lg:mt-20">
            INVESTMENT
          </h1>
          <div className="flex flex-wrap gap-5 mt-10 lg:mt-20">
            {investmentFaqs.map((faq, index) => (
              <div key={index} className="w-full md:w-[calc(50%-10px)]">
                <div
                  className={`collapse collapse-arrow border border-base-300 bg-base-100 ${
                    openInvestmentIndex === index
                      ? "collapse-open [&>div::after]:text-green-500"
                      : ""
                  }`}
                >
                  <div
                    className="collapse-title font-semibold cursor-pointer"
                    onClick={() => toggleInvestmentFaq(index)}
                  >
                    {faq.question}
                  </div>
                  {openInvestmentIndex === index && (
                    <div
                      className="collapse-content text-sm"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frequent;
