import Navbar from "../../shared/Navbar/Navbar";

const Frequent = () => {
  return (
    <div className="bg-green-900">
      <Navbar pic="/white-logo.png" />
      <div className=" flex justify-center items-center h-[500px]">
        <h1 className="text-6xl lg:text-4xl 2xl:text-6xl text-white font-bold leading-15 w-[400px] text-center">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="bg-white  ">
        <div className="container mx-auto p-4 ">
          {/* first grid  */}
          <div className="[&_input:checked+div::after]:text-green-500 grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 lg:mt-20">
            {/* first card  */}
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">
                Who can invest with Digiyog?
              </div>
              <div className="collapse-content text-sm">
                Anyone with a Bangladeshi bank account or MFS (Mobile Financial
                Services) account can invest in fractionalized real estate
                properties through Digiyog.
              </div>
            </div>
            {/* second card  */}
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">
                Is my personal information secure?
              </div>
              <div className="collapse-content text-sm">
                At Digiyog, we prioritize the security and privacy of user data.
                We’ve built the platform using advanced cybersecurity
                technologies and protocols to ensure the protection of all our
                users' personal information. All user data is stored securely in
                the cloud, with strict access controls to maintain privacy.
              </div>
            </div>
            {/* third card  */}
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">
                Can I visit the property myself?
              </div>
              <div className="collapse-content text-sm">
                Yes! We provide property details and location on the platform,
                allowing you to visit the property in person. We encourage you
                to explore the property and get a firsthand look at your
                investment.
              </div>
            </div>
            {/* fourth card  */}
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">
                What is the minimum investment amount on Digiyog?
              </div>
              <div className="collapse-content text-sm">
                The minimum investment amount for fractionalized real estate on
                Digiyog is BDT 500. This allows anyone to start investing in the
                real estate market without requiring a large initial outlay.
              </div>
            </div>
            {/* fifth card  */}
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">
                Is there a maximum amount that I can invest with Digiyog?
              </div>
              <div className="collapse-content text-sm">
                Digiyog does not set a maximum investment limit. However,
                depending on the demand for specific properties, Digiyog may
                place a cap on the number of shares one user can purchase in a
                particular property.
              </div>
            </div>
            {/* sixth card  */}
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">
                What is fractional investment?
              </div>
              <div className="collapse-content text-sm">
                Fractional investment is a method where the total cost of an
                asset is divided into smaller shares, allowing multiple
                investors to own a portion of the asset. Each investor benefits
                proportionally from the asset's appreciation and income, based
                on their ownership stake. For Digiyog, this means investors
                share in the rental income and capital appreciation of real
                estate properties according to the fraction they own.
              </div>
            </div>
            {/* seventh card  */}
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">
                What benefit does a fractional investment platform provide?
              </div>
              <div className="collapse-content text-sm">
                A fractional investment platform lowers the "barriers to entry"
                for Bangladeshi investors in the real estate market. It enables
                a wider range of people, including those from the middle-class,
                to invest in high-value assets such as land, apartments, and
                commercial properties. By allowing smaller investment amounts,
                Digiyog makes real estate investment accessible to those who
                might not otherwise have the capital to participate in
                traditional real estate ventures.
              </div>
            </div>
            {/* eighth  card  */}
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">
                How does it work on Digiyog?
              </div>
              <div className="collapse-content text-sm">
                Digiyog offers fractional shares of real estate properties,
                starting from as low as BDT 500. Investors can purchase shares
                in various property categories, such as land, developing flats,
                fully developed apartments, and even shares in running hotels
                and resorts. Each property category offers different benefits,
                from monthly rental income to long-term property appreciation.
                For a detailed breakdown of how Digiyog works, please refer to
                the How It Works page.
              </div>
            </div>
          </div>
          {/* second grid  */}
          <h1 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold  mt-10 lg:mt-20">
            INVESTMENT
          </h1>
          <div className="[&_input:checked+div::after]:text-green-500 grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 lg:mt-20">
            {/* first card  */}
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">
                What is the investment process?
              </div>
              <div className="collapse-content text-sm">
                Users can choose from a variety of real estate properties (land,
                flats, apartments, etc.) and select the number of fractional
                shares they would like to invest in. After confirming their
                selection, users can proceed with the checkout process. To
                complete the transaction, users need to log into their Digiyog
                account and make the payment. Once payment is completed and
                verified by Digiyog (which may take 2-3 business days), users
                will be able to track their investment progress in their
                <strong>Portfolio </strong> page.
              </div>
            </div>
            {/* second card  */}
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">
                When do I get my return?
              </div>
              <div className="collapse-content text-sm">
                Returns depend on the type of investment you make. You can hold
                your investment until the property reaches maturity or choose to
                exit early by selling your shares through the{" "}
                <strong>Secondary Marketplace</strong>. The maturity period for
                each property is clearly stated on the property details page.
              </div>
            </div>
            {/* third card  */}
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">
                What if something goes wrong with Digiyog? Is my investment
                secured?
              </div>
              <div className="collapse-content text-sm">
                Your investment is fully secured. Even if Digiyog faces
                operational challenges, you still own your real estate shares.
                Your investment is legally protected, and in the event of
                Digiyog’s closure, you retain full ownership of the property
                shares and will receive any proceeds from property sales.
              </div>
            </div>
            {/* fourth card  */}
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">
                What will Digiyog charge me?
              </div>
              <div className="collapse-content text-sm">
                Digiyog operates on a profit-sharing model. The platform keeps{" "}
                <strong>20%</strong> of any profits generated from your
                investment, while you keep <strong>80%</strong>. This percentage
                only applies to profits, not the original investment amount.
                There is also a small platform fee that applies to transactions,
                which is detailed in our <strong>Terms & Conditions</strong>.
              </div>
            </div>
            {/* fifth card  */}
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">
                How much return do I get on my investment?
              </div>
              <div className="collapse-content text-sm">
                The return on investment (ROI) varies by property type and
                market conditions. Digiyog does not offer fixed returns or
                interest, and your profits will depend on the performance and
                appreciation of the property over time. The{" "}
                <strong>forecasted return at maturity</strong> is provided on
                each property’s details page to give you an estimate. However,
                please note that these figures are based on previous market data
                and current trends and may fluctuate.
              </div>
            </div>
            {/* sixth card  */}
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">
                How do you calculate the value of the property?
              </div>
              <div className="collapse-content text-sm">
                The value of properties is evaluated every 3 to 6 months.
                Digiyog uses market comparables and independent land brokers'
                average prices to adjust property values. The prices are updated
                regularly to reflect current market trends, ensuring that the
                price of your shares aligns with the real-time market value of
                the property.
              </div>
            </div>
            {/* seventh card  */}
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">
                When and how will I receive my returns with profit?
              </div>
              <div className="collapse-content text-sm">
                Properties on Digiyog are typically held for a maturity period
                of 3 to 5 years, depending on the type of investment. Once the
                property is sold, the total appreciated value, including
                profits, is distributed to investors who hold shares in the
                property, on a pro-rata basis. The exact maturity period for
                each property is clearly outlined on the property details page.
              </div>
            </div>
            {/* eighth  card  */}
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">
                What if I want to withdraw my invested amount? What is the
                process?
              </div>
              <div className="collapse-content text-sm">
                Currently, withdrawals are not possible unless the property is
                sold or has reached its maturity. However, Digiyog offers a
                <strong> Secondary Marketplace</strong> where you can sell your
                shares to other investors. For more details, please visit the
                <strong>Marketplace</strong> section
              </div>
            </div>
            {/* ninth  card  */}
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">
                How do I make the payment for my investment?
              </div>
              <div className="collapse-content text-sm">
                Digiyog accepts payments via direct bank transfers or MFS
                (Mobile Financial Services) platforms like{" "}
                <strong>bKash</strong>. After transferring the funds, you must
                upload a screenshot of the transaction proof to complete the
                process. Further details on payment methods are provided during
                the checkout.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frequent;
