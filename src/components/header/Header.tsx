"use client";

import Logo from "./Logo";
import Nav from "./Nav";
import HeaderActions from "./HeaderActions";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

export default function Header({ locale }: { locale: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-8 xl:px-0">
        <Logo />
        <Nav />
        <HeaderActions locale={locale} />
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="lg:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6 text-[#606060]" />
        </button>

        {/* Mobile Menu Sidebar */}
        <MobileMenu
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          locale={locale}
        />
      </div>
    </header>
  );
}
