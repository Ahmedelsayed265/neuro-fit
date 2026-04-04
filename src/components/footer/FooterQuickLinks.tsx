"use client";

import { useTranslations } from "next-intl";

export default function FooterQuickLinks() {
  const t = useTranslations();

  const links = [
    { label: t("medical team"), href: "#" },
    { label: t("about us"), href: "#" },
    { label: t("services.badge"), href: "#" },
    { label: t("contact us"), href: "#" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-xl md:text-2xl font-bold">{t("footer.quick_links")}</h3>
      <ul className="space-y-4 font-medium">
        {links.map((link, idx) => (
          <li key={idx}>
            <a href={link.href} className="hover:text-[#CDB255] transition-colors text-sm md:text-base">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
