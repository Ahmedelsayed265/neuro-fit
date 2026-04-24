"use client";

import { useTranslations } from 'next-intl';
import FadeUp from '../FadeUp';
import Image from 'next/image';

export default function HeroFeatures() {
    const t = useTranslations("hero");
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 w-full max-w-200">
            <FadeUp
              className="relative w-full h-25 flex items-center justify-center"
              delay={0.4}
            >
              <svg
                width="809"
                height="140"
                viewBox="0 0 809 99"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-full h-full drop-shadow-lg"
                preserveAspectRatio="none"
              >
                <path
                  d="M763.921 33.7606C777.555 53.0131 799.198 96.1032 809 99H0C27.7364 93.3178 35.4224 48.4674 57.4778 24.0675C75.1222 4.54766 95.7964 -0.109478 103.928 0.00193656H708.448C719.475 0.670425 746.878 9.69502 763.921 33.7606Z"
                  fill="#fbfbf9"
                />
              </svg>

              <div className="relative z-10 w-full px-10 py-4 flex flex-col items-center gap-4">
                <div className="flex items-center gap-2 text-center justify-center">
                  <Image
                    src="/images/heart.svg"
                    alt="Heart"
                    className="w-5 h-5"
                    width={24}
                    height={24}
                  />
                  <p className="text-[#5D3F26] font-semibold md:text-sm text-xs text-start">
                    {t("feature_1")}
                  </p>
                </div>

                <div className="flex items-center justify-center md:gap-12 gap-4 w-full">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/lamp.svg"
                      alt="Lightbulb"
                      className="w-5 h-5"
                      width={24}
                      height={24}
                    />
                    <p className="text-[#5D3F26] font-semibold md:text-sm text-xs">
                      {t("feature_2")}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/cir.svg"
                      alt="Graduation cap"
                      className="w-5 h-5"
                      width={24}
                      height={24}
                    />
                    <p className="text-[#5D3F26] font-semibold md:text-sm text-xs">
                      {t("feature_3")}
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
  )
}
