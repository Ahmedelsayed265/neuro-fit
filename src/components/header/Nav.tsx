"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Nav() {
  const t = useTranslations();

  const navItems = [
    {
      href: "/",
      text: t("home"),
    },
    {
      href: "#medical-team",
      text: t("medical team"),
    },
    {
      href: "#about-us",
      text: t("about us"),
    },
    {
      href: "#services",
      text: t("services.badge"),
    },
    {
      href: "#contact-us",
      text: t("contact us"),
    },
  ];

  return (
    <nav className="flex-2 flex justify-center items-center gap-6">
      {navItems.map((item) => (
        <Link key={item.href} href={item.href}>
          <span className="text-[14px] font-bold text-[#606060]">
            {item.text}
          </span>
        </Link>
      ))}
    </nav>
  );
}
