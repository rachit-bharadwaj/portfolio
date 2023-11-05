"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// next themes
import { useTheme } from "next-themes";

// react icons
import { BiSolidMoon, BiSun } from "react-icons/bi";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolling = window.scrollY > 40;
      setScrolling(isScrolling);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={`text-dark sticky z-50 top-0 dark:text-gray-200 p-3 flex justify-between items-center md:px-64 xl:px-80 ${
        scrolling ? "bg-blur" : "bg-transparent"
      }`}
    >
      <Link href="/">
        <Image
          src="/images/sign.png"
          height={100}
          width={100}
          alt="signature"
          className="filter invert dark:filter-none"
        />
      </Link>

      <button className="flex gap-1 text-3xl lg:text-3xl" onClick={toggleTheme}>
        {theme === "light" ? <BiSolidMoon /> : <BiSun />}
      </button>
    </header>
  );
};

export default Header;
