"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import HeroSlide from "./HeroSlide";
import Image from "next/image";
import FadeUp from "../FadeUp";
import { Banner } from "@/types/api";
import HeroFeatures from "./HeroFeatures";

export default function Hero({ banners }: { banners: Banner[] }) {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <section className="w-full px-3 md:px-0">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden group">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            dir={locale === "ar" ? "rtl" : "ltr"}
            spaceBetween={12}
            slidesPerView={1}
            centeredSlides={true}
            loop={banners.length > 1}
            threshold={5}
            loopAdditionalSlides={2}
            grabCursor={true}
            watchSlidesProgress={true}
            observer={true}
            observeParents={true}
            speed={800}
            touchRatio={1.2}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            className="w-full h-[calc(100vh-100px)] rounded-3xl"
          >
            {banners.length > 0 ? (
              banners.map((banner) => (
                <SwiperSlide key={banner.id} className="h-full rounded-3xl">
                  <HeroSlide banner={banner} />
                </SwiperSlide>
              ))
            ) : (
              <SwiperSlide key="placeholder" className="h-full rounded-3xl">
                <HeroSlide />
              </SwiperSlide>
            )}
          </Swiper>

          <button className="swiper-button-prev-custom absolute right-6 top-1/2 -translate-y-1/2 z-10 cursor-pointer w-10 h-10 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 md:flex">
            <ChevronRight className="w-6 h-6" />
          </button>

          <button className="swiper-button-next-custom absolute left-6 top-1/2 -translate-y-1/2 z-10 cursor-pointer w-10 h-10 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 md:flex">
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="custom-pagination absolute bottom-32! z-10 flex gap-2 justify-center"></div>

          <HeroFeatures />
        </div>
      </div>
    </section>
  );
}
