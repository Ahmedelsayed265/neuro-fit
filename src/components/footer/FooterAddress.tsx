"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function FooterAddress() {
  const t = useTranslations();

  return (
    <div className="relative -mt-24 z-10 flex justify-center px-4">
      <div className="relative w-full max-w-[857px] aspect-857/99 flex items-center justify-center">
        <div className="absolute inset-0 z-[-1]">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 857 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern id="footerPattern" patternUnits="userSpaceOnUse" width="100%" height="400">
                <image href="/images/footer.png" x="0" y="0" width="100%" height="400" preserveAspectRatio="xMidYMid slice" />
              </pattern>
            </defs>
            <path
              d="M811.921 33.7606C825.555 53.0131 847.198 96.1032 857 99H0C27.7364 93.3178 35.4224 48.4674 57.4778 24.0675C75.1222 4.54766 95.7964 -0.109478 103.928 0.00193656L756.448 0.00193656C767.475 0.670425 794.878 9.69501 811.921 33.7606Z"
              fill="#2F2013"
            />
            <path
              d="M811.921 33.7606C825.555 53.0131 847.198 96.1032 857 99H0C27.7364 93.3178 35.4224 48.4674 57.4778 24.0675C75.1222 4.54766 95.7964 -0.109478 103.928 0.00193656L756.448 0.00193656C767.475 0.670425 794.878 9.69501 811.921 33.7606Z"
              fill="url(#footerPattern)"
              fillOpacity="0.8"
            />
          </svg>
        </div>

        <div className="flex flex-col items-center justify-center text-center px-8 text-white pt-2">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-bold text-lg md:text-xl flex items-center gap-2">
              <Image src="/images/loc.svg" alt="Location" width={24} height={24} />
              {t("footer.address_label")}
            </span>
          </div>
          <p className="text-xs md:text-[14px] font-medium max-w-2xl leading-relaxed opacity-90">
            {t("footer.address")}
          </p>
        </div>
      </div>
    </div>
  );
}
