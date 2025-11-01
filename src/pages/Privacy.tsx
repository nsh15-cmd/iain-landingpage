import React from "react";
import { useThemeStore } from "../store/ThemeStore";

const PrivacyPage: React.FC = () => {
  const { theme } = useThemeStore();
  const textColor = theme === "dark" ? "text-white" : "text-black";

  return (
    <div className={`max-w-7xl mx-auto py-12 px-3 pt-34 pb-70 ${textColor}`}>
      <h1 className="text-3xl font-bold mb-6">IAIN Privacy Policy</h1>

      <p className="leading-relaxed mb-4">
        At <strong>IAIN</strong>, your privacy is important to us. This Privacy
        Policy explains how we collect, use, and protect your personal
        information.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        1. Information We Collect
      </h2>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Personal details such as name, email address, and contact info.</li>
        <li>
          Usage data, including activity on the platform and device information.
        </li>
        <li>
          Information you provide voluntarily through forms, messages, or
          support.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. How We Use Your Information
      </h2>
      <p className="mb-4">
        We use collected data to provide, improve, and personalize IAIN
        services, communicate important updates, and analyze platform usage.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Sharing</h2>
      <p className="mb-4">
        We do not sell or share personal information with third parties except
        as required by law or to protect our rights.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Data Protection</h2>
      <p className="mb-4">
        We implement industry-standard security measures to safeguard your data.
        However, no system can be completely secure.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        5. Cookies and Tracking
      </h2>
      <p className="mb-4">
        IAIN may use cookies or similar technologies to enhance user experience,
        track usage, and provide personalized features.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        6. Updates to this Policy
      </h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Changes will be
        posted on this page with a new “last updated” date.
      </p>

      <p className="mt-6">
        By using <strong>IAIN</strong>, you consent to the collection and use of
        your information as described in this policy.
      </p>

      <p className="mt-6 text-gray-500 text-sm">Last updated: November 2025</p>
    </div>
  );
};

export default PrivacyPage;
