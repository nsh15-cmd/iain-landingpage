import React, { useState, useEffect } from 'react';

// --- Mock Dependencies ---
// To fix the import errors, I've created simple mock versions of
// the components and hooks your file was trying to import.

// 1. Mock for "../../assets/logo.svg" as a React component
const LogoSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-10 h-10 text-violet-600" fill="currentColor">
     <rect width="100" height="100" rx="20" />
     <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="60" fill="white" dy=".1em">I</text>
  </svg>
);

// 2. Mock for "../shared/Container"
const Container = ({ children }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {children}
  </div>
);

// 3. Mock for "../shared/NavItem"
const NavItem = ({ href, text }) => (
  <li>
    <a
      href={href}
      className="transition-colors hover:text-violet-600"
    >
      {text}
    </a>
  </li>
);

// 4. Mock for "../../store/ThemeStore"
const useThemeStore = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  // This effect applies the 'dark' class to the <html> tag
  // so Tailwind's dark mode can work.
  useEffect(() => {
     if (theme === 'dark') {
       document.documentElement.classList.add('dark');
     } else {
       document.documentElement.classList.remove('dark');
     }
  }, [theme]);

  return { theme, toggleTheme };
};

// --- Original Navbar Component (Modified) ---

export const navItems = [
  { href: "#", text: "Home" },
  { href: "#services", text: "Services" },
  { href: "#about-us", text: "About Us" },
];

export const Navbar = () => {
  const { toggleTheme, theme } = useThemeStore();

  return (
    <header className="absolute inset-x-0 top-0 z-50 py-6 bg-white dark:bg-gray-900 shadow-sm">
      <Container>
        <nav className="w-full flex justify-between gap-6 relative text-gray-800 dark:text-white">
          {/* Logo */}
          <div className="min-w-max inline-flex relative">
            <a href="/" className="relative flex items-center gap-3">
              <LogoSvg /> {/* <-- FIXED: Using the mock SVG component */}
              <div className="inline-flex text-lg font-semibold text-heading-1">
                IAIN
              </div>
            </a>
          </div>

          <div
            className="flex flex-col lg:flex-row w-full lg:justify-between lg:items-center 
                        absolute top-full left-0 lg:static lg:top-0 bg-white dark:bg-gray-900 lg:bg-transparent lg:dark:bg-transparent 
                        border-x border-x-box-border lg:border-x-0 lg:h-auto h-0 overflow-hidden"
          >
            <ul
              className="border-t border-box-border lg:border-t-0 px-6 lg:px-0 
                            pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-4
                            text-lg text-heading-2 w-full lg:justify-center lg:items-center"
            >
              {navItems.map((item, key) => (
                <NavItem href={item.href} text={item.text} key={key} />
              ))}
            </ul>
          </div>

          <div className="min-w-max flex items-center gap-x-3">
            <button
              onClick={toggleTheme}
              className="outline-hidden flex relative text-heading-2 rounded-full p-2 lg:p-3 cursor-pointer"
            >
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              )}
            </button>
            {/* Log In & Sign Up */}
            <a
              href="https://iain-admin11-11-gw3q.vercel.app/login"
              className="px-4 py-2 text-heading-1 font-medium rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              Admin Login
            </a>
            <a
              href="https://iain-f7c30.web.app/signin"
              className="px-4 py-2 bg-violet-800 text-white font-medium rounded-md hover:bg-violet-900 transition"
            >
              Log In
            </a>
          </div>
        </nav>
      </Container>
    </header>
  );
};

// Added a default App component to render the Navbar for preview.
export default function App() {
  return (
    <div className="h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <div className="pt-32 text-center text-gray-800 dark:text-white">
        <h1 className="text-3xl font-bold">Page Content</h1>
        <p>This is the content below the navbar.</p>
      </div>
    </div>
  );
}
