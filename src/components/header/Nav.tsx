"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function Nav() {
  const t = useTranslations();
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const currentHash = window.location.hash || "";
    setActiveHash(currentHash);

    const handleHashChange = () => {
      setActiveHash(window.location.hash || "");
    };

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = `#${entry.target.id}`;
          setActiveHash(id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    const sections = ["medical-team", "about-us", "services", "contact-us"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveHash("");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const navItems = [
    {
      href: "/",
      id: "",
      text: t("home"),
    },
    {
      href: "/#medical-team",
      id: "#medical-team",
      text: t("medical team"),
    },
    {
      href: "/#about-us",
      id: "#about-us",
      text: t("about us"),
    },
    {
      href: "/#services",
      id: "#services",
      text: t("services.badge"),
    },
    {
      href: "/#contact-us",
      id: "#contact-us",
      text: t("contact us"),
    },
  ];

  return (
    <nav className="hidden lg:flex justify-center items-center gap-6">
      {navItems.map((item) => {
        const isActive =
          (item.id === "" && pathname === "/" && activeHash === "") ||
          (item.id !== "" && activeHash === item.id);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`transition-all duration-300 border-b-[3px] rounded-[8px] px-2 py-1 ${
              isActive
                ? "border-[#cdb255] text-black"
                : "border-transparent text-[#606060] hover:text-black hover:border-[#cdb255]/40"
            }`}
          >
            <span className="text-[14px] font-bold">{item.text}</span>
          </Link>
        );
      })}
    </nav>
  );
}
