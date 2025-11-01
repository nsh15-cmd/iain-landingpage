import React from "react";
import { useThemeStore } from "../store/ThemeStore";

const TermsPage: React.FC = () => {
  const { theme } = useThemeStore();
  const textColor = theme === "dark" ? "text-white" : "text-black";

  return (
    <div className={`max-w-7xl mx-auto py-10 pt-34  ${textColor}`}>
      <h1 className="text-3xl font-bold mb-6">IAIN Terms and Conditions</h1>

      <p className="leading-relaxed mb-4">
        Welcome to <strong>IAIN</strong>! By accessing or using our platform,
        you agree to follow these Terms and Conditions. Please read them
        carefully before using our services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        1. Account Information and Sharing
      </h2>
      <p className="mb-4">
        1.1 Registration, Username, and Passwords. To use IAIN’s services and
        software, you may need to provide personal information. You confirm that
        all information you provide, including any data you upload, is accurate
        and complete, and IAIN is not responsible for any errors or missing
        information. You may also need to create a username and password. IAIN
        can reject or require changes to your chosen username or password at its
        discretion. You are fully responsible for keeping your username and
        password secure and agree not to share them with anyone else.
      </p>

      <p className="mb-4">
        1.2 Sharing Restrictions. You may not share your account, host
        privileges, or any other user rights with anyone else unless IAIN gives
        written permission. Sharing login details or passwords is strictly
        prohibited. Your access to IAIN’s services and software is personal and
        cannot be transferred. Accounts or user rights can only be reassigned in
        specific cases, such as when an employee or user leaves an organization,
        or with IAIN’s prior written approval.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. Access and Use; Software License{" "}
      </h2>

      <p className="mb-4">
        2.1 Access and Use; Software License. Under this Agreement, you may
        access and use IAIN’s services. If using the services requires
        downloading, installing, or using IAIN software (“Software”), IAIN
        grants you a limited, revocable, non-exclusive, non-transferable,
        non-assignable, non-sublicensable, and royalty-free license to use the
        Software in object code form on a compatible device. This license is for
        your internal use only and solely to access and use the services during
        your subscription period. You acknowledge that IAIN can revoke your
        access to the services or software at any time, at its sole discretion.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        3. Responsibility for Use and End Users
      </h2>
      <p className="mb-4">
        3.1 Use of the Services; End User Responsibility. You, and anyone you
        allow to use the services (“End Users”), must follow all terms and
        conditions of this Agreement. The services cannot be used where
        prohibited by law. You are responsible for your own access and use, as
        well as the access and use by your End Users. You are accountable for
        the actions of anyone you let use the services or software, even if such
        access wasn’t explicitly approved by IAIN.
      </p>

      <p className="mb-4">
        3.2 Violations by End Users or Third Parties. IAIN is not responsible
        for any violations of this Agreement by your End Users or anyone else
        you allow to access the services or software. If you become aware of any
        such violation, you must notify IAIN immediately at the appropriate
        contact email.
      </p>

      <p className="mb-4">
        3.3 Liability for Content and Data. IAIN is not liable for any data or
        content viewed or used through the services, including any errors,
        omissions, or loss resulting from access to or use of such data or
        content.
      </p>

      <p className="mb-4">
        3.4 Investigation of Use. IAIN may investigate any complaints or
        violations and take actions it deems necessary, including issuing
        warnings, suspending or disconnecting services, removing data or
        content, terminating accounts or End User profiles, or taking other
        reasonable actions at its discretion.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        4. System Requirements; Changes
      </h2>
      <p className="mb-4">
        4. Using IAIN’s services and software requires compatible devices,
        internet access, and certain third-party software. You may need to
        install updates or upgrades for the software or third-party software,
        which could incur additional costs. Because the services depend on
        hardware, software, and internet performance, your ability to access or
        use them may be affected. High-speed internet is recommended. You are
        solely responsible for any costs related to hardware, software, internet
        access, or messaging required to use the services. You also agree that
        these requirements are your responsibility, and IAIN may, at its
        discretion, stop supporting or making the services compatible with
        certain devices, operating systems, or platforms.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Recordings</h2>
      <p className="mb-4">
        As a Host, you are responsible for following all laws regarding
        monitoring or recording conversations. Hosts may choose to record
        meetings, or interviews, for quality assurance or training purposes. By
        using IAIN’s services, you give permission for IAIN to store these
        recordings. You will be notified (visually or otherwise) when a
        recording starts. If you do not agree to be recorded, you have the
        option to leave the session.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Termination</h2>
      <p className="mb-4">
        We reserve the right to suspend or terminate accounts violating these
        Terms or engaging in fraudulent or abusive behavior.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Confidentiality</h2>
      <p className="mb-4">7.1 Definition. “Confidential Information” means:</p>
      <ul className="list-disc list-inside mb-4">
        <li>
          For IAIN, any information shared with you or your End Users, or
          learned through your use of the services or software, including
          business plans, product details, pricing, systems, source code, trade
          secrets, financial data, methods, processes, and marketing plans, in
          any form. This includes information labeled as confidential or that
          you should reasonably know is confidential (“IAIN Confidential
          Information”).
        </li>
        <li>
          For you, any information you share with IAIN that must legally remain
          confidential or is clearly marked as “confidential,” such as sensitive
          security or technical information (“Customer Confidential
          Information”). Customer Content is not considered Customer
          Confidential Information, though it will still be protected under
          Section 10.3.
        </li>
      </ul>
      <p className="mb-4">
        7.2 Exclusions. Confidential Information does not include information
        that:
      </p>
      <ul className="list-decimal list-inside mb-4">
        <li>
          Was already known to the receiving party without obligation to keep it
          secret;
        </li>
        <li>
          Becomes publicly known without any fault of the receiving party;
        </li>
        <li>
          Is independently developed by the receiving party without using the
          disclosing party’s Confidential Information.{" "}
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        8. Policies; Data Processing Addendum
      </h2>
      <p className="mb-4">
        8.1 1 Privacy Statement. By using IAIN’s services, you agree to and
        acknowledge our Privacy Statement. You understand that the collection,
        sharing, and processing of your personal data which may include
        organizing, storing, using, or disclosing it will be governed by our
        Privacy Statement and, if applicable, by any Global Data Processing
        Addendum or applicable local privacy laws.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">9. DEFINITIONS</h2>
      <ul className="list-item list-inside mb-4 ">
        <li className="mb-2">
          <strong>IAIN Services</strong>- The software, platform, and services
          provided by IAIN, including all related features, functionalities, and
          content.
        </li>
        <li className="mb-2">
          <strong>User / End User</strong> – Any person who accesses or uses
          IAIN Services, whether individually or through an organization.
        </li>
        <li className="mb-2">
          <strong>Account</strong> – A personal or organizational account
          created to access IAIN Services, including login credentials and any
          associated rights.
        </li>
        <li className="mb-2">
          <strong>Software</strong> – Any downloadable or installable program
          provided by IAIN to access or use the Services.
        </li>
        <li className="mb-2">
          <strong>Customer Data</strong> – Any data, information, or content
          uploaded, submitted, or shared by a User in connection with the
          Services.
        </li>
        <li className="mb-2">
          <strong>Confidential Information</strong> – Any non-public information
          disclosed by IAIN or the User that is designated as confidential or
          reasonably understood to be confidential.
        </li>
        <li className="mb-2">
          <strong>Privacy Statement</strong> – IAIN’s official policy explaining
          how personal data is collected, used, stored, and shared, including
          any related Data Processing Addenda or applicable privacy laws.
        </li>
        <li className="mb-2">
          <strong>Host</strong> – A User with privileges to organize or conduct
          meetings, intervies, or calls through IAIN Services.
        </li>
        <li className="mb-2">
          <strong>Recordings</strong> – Any audio, video, or other content
          captured during use of IAIN Services where recording functionality is
          enabled.{" "}
        </li>
      </ul>

      <p className="mt-6 pt-10">
        If you do not agree with these terms, please stop using{" "}
        <strong>IAIN</strong> immediately.
      </p>

      <p className="mt-6 text-gray-500 text-sm">Last updated: November 2025</p>
    </div>
  );
};

export default TermsPage;
