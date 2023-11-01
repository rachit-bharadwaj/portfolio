"use client";

// next themes
import { useTheme } from "next-themes";
import Image from "next/image";

// react icons
import { BiSolidMoon, BiSun } from "react-icons/bi";

const Header = () => {
  
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="text-dark dark:text-gray-200 p-3 flex justify-between items-center md:px-64 xl:px-80">
      <Image src="/images/sign.png" height={100} width={100} alt="signature" className="filter invert dark:filter-none" />

      <button className="flex gap-1 text-3xl lg:text-3xl" onClick={toggleTheme}>
        {theme === "light" ? <BiSolidMoon /> : <BiSun />}
      </button>
    </header>
  );
};

export default Header;
