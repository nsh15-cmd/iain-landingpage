import { Container } from "../shared/Container";
import logo from "/assets/logo.svg";
import { navItems } from "./Navbar";
import { NavItem } from "../shared/NavItem";
import { useThemeStore } from "../../store/ThemeStore";

export const Footer = () => {
  const { theme } = useThemeStore();
  const textColor = theme === "dark" ? "text-white" : "text-black";

  return (
    <footer className="relative pt-15 bg-box-bg">
      <Container className="pb-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <img src={logo} className="w-7 h-7" alt="IAIN Logo" />
            <span className={`text-lg font-semibold ${textColor}`}>IAIN</span>
          </div>

          <ul className={`flex gap-6 ${textColor}`}>
            {navItems.map((item, key) => (
              <NavItem key={key} href={item.href} text={item.text} />
            ))}
          </ul>
        </div>
      </Container>

      <Container className="pb-8">
        <div
          className={`flex flex-col md:flex-row justify-between items-center ${textColor}`}
        >
          © 2025 IAIN. All rights reserved.
          <div className="flex flex-col md:flex-row justify-between items-center relative gap-3 mt-3 md:mt-0">
            <a href="./terms" className={`flex hover:underline ${textColor}`}>
              Terms & Conditions
            </a>
            <a href="./privacy" className={`flex hover:underline ${textColor}`}>
              Privacy Policy
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
