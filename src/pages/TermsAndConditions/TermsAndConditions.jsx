import Navbar from "../../shared/Navbar/Navbar";

const TermsAndConditions = () => {
  return (
    <div className="bg-base-100 text-base-content min-h-screen px-6 py-10">
      <div className="xl:-ml-32">
        <Navbar />
      </div>
      <div className="container p-4 mx-auto space-y-8 ">
        <h1 className="text-4xl font-bold">
          Terms & <br /> Conditions
        </h1>
        <p className="text-sm font-normal">
          <span className="font-semibold">Dated:</span> 8th July, 2025
        </p>

        <p className="font-normal">
          The <span className="font-medium">Digiyog</span> service and network
          (collectively, the "Service") are operated by Digiyog
          Ltd. (collectively, "Digiyog", the "Company", "we", or "us"). Our
          website [Your Website URL], including any subdomain thereof (the
          "Platform"), was designed to help our users and the public at large
          view information regarding our Service, and to use information,
          content, messages, products, services, software, and databases
          available via the Platform. By accessing the Platform, you signify
          that you have read, understood, and agreed to be bound by these terms
          of use ("Terms"), regardless of whether you are a registered member of
          the Service. In addition to these Terms, you may enter into other
          agreements with us or others that will govern your use of the Service
          or related services offered by us or others. If there is any
          contradiction between these Terms and another agreement applicable to
          specific aspects of the Service, the other agreement shall take
          precedence in relation to the specific aspects of the Service to which
          it applies.
        </p>

        <h2 className="text-2xl font-bold uppercase">Changes to These Terms</h2>
        <p>
          We may make changes to these Terms from time to time in our sole
          discretion. If we do this, we will post the changed Terms on the
          Platform and will indicate at the top of this page the date the Terms
          were last revised. Your continued use of the Service or the Platform
          after we have made any such changes constitutes your acceptance of the
          new Terms.
        </p>

        <h2 className="text-2xl font-bold uppercase">
          Eligibility, License, and Representations
        </h2>
        <ul>
          <h3 className="font-medium">Eligibility:</h3>
          <li>
            · You must be at least 18 years of age and have a valid bank or
            Mobile Financial Services (MFS) account in Bangladesh to use the
            Digiyog Service.
          </li>
          <li>
            · The Platform is only available to individuals and businesses that
            comply with the investment laws of Bangladesh.
          </li>
          <h3 className="font-medium"> Proprietary Rights:</h3>

          <li>
            · All content on the Platform, including but not limited to designs,
            text, graphics, pictures, videos, information, software, music,
            sound, and other files, and their selection and arrangement (the
            "Platform Content"), are the proprietary property of Digiyog.
          </li>
          <li>
            · Users may not copy, distribute, modify, sell, or transmit any
            Platform Content without prior written permission.
          </li>
          <h3 className="font-medium">Restrictions on Use:</h3>
          <li>
            · Users may not engage in any activity that could damage, disable,
            or impair the Platform.
          </li>
          <li>
            · Unauthorized data collection, scraping, or use of automated tools
            is strictly prohibited.
          </li>
          <li>
            · The Platform cannot be used for any illegal activities, including
            fraud, money laundering, or financing of terrorism..
          </li>
        </ul>

        <h2 className="text-2xl font-bold uppercase">
          About DigiYog’s Real Estate Tokenization System
        </h2>

        <ul>
          <p className="w-[700px] mb-2">
            Digiyog offers a{" "}
            <span className="font-medium">
              {" "}
              crowdfunding real estate tokenization platform
            </span>
            , allowing individuals to invest in real estate properties through
            fractional ownership. The system functions as follows:
          </p>
          <li>
            1. <span className="font-medium">Property Listings:</span> Verified
            real estate properties are listed on the platform, complete with
            documentation, due diligence reports, and estimated return
            forecasts.
          </li>
          <li>
            2. <span className="font-medium">Tokenization:</span> Each property
            is divided into digital investment tokens, representing fractional
            ownership of the asset.
          </li>
          <li>
            3. <span className="font-medium">Investment Process:</span> Users
            browse available properties, select investments, and purchase tokens
            securely.
          </li>
          <li>
            4. <span className="font-medium">Ownership Management:</span>
             Investors receive legally binding blockchain-based digital
            ownership certificates.{" "}
          </li>
          <li>
            5. <span className="font-medium">Profit Distribution:</span> Rental
            income and capital gains are distributed to investors based on their
            token ownership.{" "}
          </li>
          <li>
            {" "}
            6. <span className="font-medium">Exit Options:</span> Investors can
            sell their tokens on the Digiyog Secondary Marketplace, ensuring
            liquidity.
          </li>
        </ul>

        <h2 className="text-2xl font-bold uppercase">
          Investment Terms & Conditions
        </h2>
        <ul>
          <li>Minimum investment applies (as stated on the platform).</li>
          <li>
            Returns are not guaranteed; markets are subject to fluctuations.
          </li>
          <li>
            Investments are non-transferable without proper KYC updates and
            compliance checks.
          </li>
          <li>Transaction fees and administrative charges may apply.</li>
        </ul>

        <h2 className="text-2xl font-bold uppercase">
          User Obligations & Responsibilities
        </h2>
        <ol>
          <li>
            <strong>Account Verification:</strong> Users must complete KYC and
            other verification steps.
          </li>
          <li>
            <strong>Accurate Information:</strong> All user data must be correct
            and updated regularly.
          </li>
          <li>
            <strong>No Unlawful Use:</strong> Platform must not be used for
            money laundering or other illegal activities.
          </li>
        </ol>

        <h2 className="text-2xl font-bold uppercase">
          Money Laundering & Fraud Prevention
        </h2>
        <p>
          All activity is monitored for compliance with anti-money laundering
          (AML) laws. Users must provide valid ID and proof of residence.
          Suspicious activity will be reported.
        </p>

        <h2 className="text-2xl font-bold uppercase">
          Dispute Resolution & Governing Law
        </h2>
        <ul>
          <li>Jurisdiction: Bangladesh law applies.</li>
          <li>
            Disputes will be resolved through arbitration at the ADR Centre,
            BCC&I, Dhaka.
          </li>
        </ul>

        <h2 className="text-2xl font-bold uppercase">
          Taxation & Regulatory Compliance
        </h2>
        <p>
          Users are responsible for personal tax obligations. DigiYog complies
          with Bangladesh Securities and Exchange Commission (BSEC) regulations.
        </p>

        <h2 className="text-2xl font-bold uppercase">Final Provisions</h2>
        <ul>
          <li>These terms constitute the entire agreement.</li>
          <li>
            If any term is found unenforceable, the remainder remains in effect.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TermsAndConditions;
