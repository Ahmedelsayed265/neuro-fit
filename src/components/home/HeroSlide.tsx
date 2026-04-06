"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useSwiperSlide } from "swiper/react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSlide() {
  const t = useTranslations("hero");
  const { isActive } = useSwiperSlide();

  return (
    <div className="relative w-full h-full">
      <Image
        src="/images/slide.png"
        alt="Hero Slide"
        className="object-cover rounded-3xl"
        fill
      />
      <div className="absolute inset-0 hero_gradient flex items-center justify-center">
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.8,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="max-w-5xl w-full px-4 pb-16 md:pb-0"
            >
              <h2 className="text-[22px] md:text-[56px] font-bold text-white text-center text-animated">
                {t("title")}
              </h2>

              <div className="flex items-center justify-center gap-3 md:gap-6 mt-6 md:mt-8">
                <a
                  href="#about"
                  className="text-[#5D3F26] bg-white border-[3px] min-w-36 md:min-w-52 h-14 p-2 flex items-center justify-center rounded-xl font-bold text-sm md:text-base border-[#CDB255] btn-premium-gold"
                >
                  {t("cta_about")}
                </a>

                <a
                  href="#about"
                  className="text-[#000000] bg-[#CDB255] border-[3px] min-w-36 md:min-w-52 h-14 p-2 flex items-center justify-center rounded-xl font-bold text-sm md:text-base border-[#000000] btn-premium"
                >
                  {t("cta_contact")}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
