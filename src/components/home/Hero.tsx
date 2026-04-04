"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import HeroSlide from "./HeroSlide";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="w-full px-3 md:px-0">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden group">
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
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
            modules={[Pagination, Navigation, Autoplay]}
            className="w-full h-158"
          >
            <SwiperSlide>
              <HeroSlide />
            </SwiperSlide>
            <SwiperSlide>
              <HeroSlide />
            </SwiperSlide>
            <SwiperSlide>
              <HeroSlide />
            </SwiperSlide>
          </Swiper>

          <button className="swiper-button-prev-custom absolute left-6 top-1/2 -translate-y-1/2 z-10 cursor-pointer w-10 h-10 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 md:flex">
            <ChevronLeft className="w-6 h-6 ltr:rotate-180" />
          </button>

          <button className="swiper-button-next-custom absolute right-6 top-1/2 -translate-y-1/2 z-10 cursor-pointer w-10 h-10 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 md:flex">
            <ChevronRight className="w-6 h-6 ltr:rotate-180" />
          </button>

          <div className="custom-pagination absolute bottom-32! justify-center z-10 flex gap-2"></div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 w-full max-w-200">
            <div className="relative w-full h-25 flex items-center justify-center">
              <svg 
                width="809" 
                height="140" 
                viewBox="0 0 809 99" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-full h-full drop-shadow-lg"
                preserveAspectRatio="none"
              >
                <path d="M763.921 33.7606C777.555 53.0131 799.198 96.1032 809 99H0C27.7364 93.3178 35.4224 48.4674 57.4778 24.0675C75.1222 4.54766 95.7964 -0.109478 103.928 0.00193656H708.448C719.475 0.670425 746.878 9.69502 763.921 33.7606Z" fill="#fbfbf9"/>
              </svg>
              
              <div className="relative z-10 w-full px-10 py-4 flex flex-col items-center gap-4">
                <div className="flex items-center gap-2 text-center justify-center">
                  <Image src="/images/heart.svg" alt="Heart" className="w-5 h-5" width={24} height={24} />
                  <p className="text-[#5D3F26] font-semibold md:text-sm text-xs text-start">
                    {t("feature_1")}
                  </p>
                </div>
                
                <div className="flex items-center justify-center md:gap-12 gap-4 w-full">
                  <div className="flex items-center gap-2">
                    <Image src="/images/lamp.svg" alt="Lightbulb" className="w-5 h-5" width={24} height={24} />
                    <p className="text-[#5D3F26] font-semibold md:text-sm text-xs">
                      {t("feature_2")}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Image src="/images/cir.svg" alt="Graduation cap" className="w-5 h-5" width={24} height={24} />
                    <p className="text-[#5D3F26] font-semibold md:text-sm text-xs">
                      {t("feature_3")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
