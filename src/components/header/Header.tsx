"use client";

import Logo from "./Logo";
import Nav from "./Nav";
import HeaderActions from "./HeaderActions";
import { useEffect, useState } from "react";

export default function Header({ locale }: { locale: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full py-4 sticky top-0 bg-[#FBFBFB] z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-[0px_8px_7.5px_0px_#E5DBA34D]" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center">
        <Logo />
        <Nav />
        <HeaderActions locale={locale} />
      </div>
    </header>
  );
}
