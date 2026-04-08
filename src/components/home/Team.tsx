"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Facebook, Linkedin } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import FadeUp from "../FadeUp";

export default function Team() {
  const t = useTranslations("team");

  const doctors = [
    { id: "doctor1", image: "/images/d1.jpg" },
    { id: "doctor2", image: "/images/d2.png" },
    { id: "doctor3", image: "/images/d3.png" },
    { id: "doctor4", image: "/images/d4.png" },
    { id: "doctor5", image: "/images/d2.png" },
    { id: "doctor6", image: "/images/d3.png" }, 
  ];

  return (
    <section className="w-full py-10 px-3 md:px-0" id="medical-team">
      <FadeUp className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <span className="bg-[#E5DBA3] text-[#5D3F26] px-6 py-2 rounded-full font-bold text-sm mb-6">
            {t("badge")}
          </span>

          <h2 className="text-2xl md:text-5xl font-bold text-[#000000] text-center md:mb-4 mb-2">
            {t("title")}
          </h2>
        </div>

        <Swiper
          modules={[Pagination]}
          spaceBetween={16}
          slidesPerView={2}
          pagination={{ clickable: true }}
          breakpoints={{
            1024: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          className="pb-16 team-swiper [&_.swiper-pagination-bullet-active]:bg-[#CDB255]! [&_.swiper-pagination-bullet]:w-3! [&_.swiper-pagination-bullet]:h-3!"
        >
          {doctors.map((doc) => (
            <SwiperSlide key={doc.id}>
              <div className="bg-[#F9F8ED] rounded-2xl overflow-hidden h-full flex flex-col group cursor-pointer">
                <div className="relative w-full aspect-square bg-gray-100">
                  <Image
                    src={doc.image}
                    alt={t(`${doc.id}.name`)}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-[#CDB2554D] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-all duration-500 md:w-12 w-8 h-8 md:h-12 rounded-full bg-[#ffffff] flex items-center justify-center">
                      <Facebook className="md:w-6 w-4 h-4 md:h-6 text-[#CDB255] hover:text-[#CDB255] transition-colors" />
                    </div>
                    <div className="translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75 md:w-12 w-8 h-8 md:h-12 rounded-full bg-[#ffffff] flex items-center justify-center">
                      <Linkedin className="md:w-6 w-4 h-4 md:h-6 text-[#CDB255] hover:text-[#CDB255] transition-colors" />
                    </div>
                  </div>
                </div>

                <div className="p-4 md:p-6 flex flex-col grow">
                  <h3 className="md:text-xl text-sm font-bold text-[#000000] mb-2 line-clamp-1">
                    {t(`${doc.id}.name`)}
                  </h3>

                  <p className="text-[#606060] font-medium mb-4 line-clamp-1 text-xs md:text-base">
                    {t(`${doc.id}.specialty`)}
                  </p>

                  <span className="text-[#9F782F] text-xs font-bold mt-auto">
                    {t(`${doc.id}.experience`)}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </FadeUp>
    </section>
  );
}
