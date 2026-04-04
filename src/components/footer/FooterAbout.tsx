"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import FooterSocialLinks from "./FooterSocialLinks";

export default function FooterAbout() {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-6 items-center md:items-start">
      <div className="relative w-48 h-24">
        <Image
          fill
          src="/images/logo-footer.svg"
          alt="Neuro Fit"
          className="object-contain"
        />
      </div>

      <p className="text-sm md:text-base leading-relaxed text-gray-300">
        {t("footer.description")}
      </p>

      <FooterSocialLinks />
    </div>
  );
}
