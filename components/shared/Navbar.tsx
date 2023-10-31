"use client";

// next themes
import { useTheme } from "next-themes";
import Image from "next/image";

// react icons
import { BiSolidMoon, BiSun } from "react-icons/bi";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="bg-primary text-gray-200 p-3 flex justify-between items-center">
      <Image src="/images/sign2.png" height={100} width={100} alt="signature" />

      <button className="flex gap-1 text-2xl" onClick={toggleTheme}>
        {theme === "light" ? <BiSolidMoon /> : <BiSun />}
      </button>
    </nav>
  );
};

export default Navbar;
