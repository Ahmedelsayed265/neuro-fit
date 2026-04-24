"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Facebook, Linkedin } from "lucide-react";
import { Doctor } from "@/types/api";

import "swiper/css";
import "swiper/css/pagination";
import FadeUp from "../FadeUp";

export default function Team({ doctors }: { doctors: Doctor[] }) {
  const t = useTranslations("team");


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
          modules={[Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={2}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
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
                    src={doc.image_url || "/images/d1.jpg"}
                    alt={doc.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-[#CDB2554D] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4">
                    {doc.facebook_url && (
                      <a
                        href={doc.facebook_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="translate-y-4 group-hover:translate-y-0 transition-all duration-500 md:w-12 w-8 h-8 md:h-12 rounded-full bg-[#ffffff] flex items-center justify-center"
                      >
                        <Facebook className="md:w-6 w-4 h-4 md:h-6 text-[#CDB255] hover:text-[#CDB255] transition-colors" />
                      </a>
                    )}
                    {doc.linkedin_url && (
                      <a
                        href={doc.linkedin_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75 md:w-12 w-8 h-8 md:h-12 rounded-full bg-[#ffffff] flex items-center justify-center"
                      >
                        <Linkedin className="md:w-6 w-4 h-4 md:h-6 text-[#CDB255] hover:text-[#CDB255] transition-colors" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-4 md:p-6 flex flex-col grow">
                  <h3 className="md:text-xl text-sm font-bold text-[#000000] mb-2 line-clamp-1">
                    {doc.name}
                  </h3>

                  <p className="text-[#606060] font-medium mb-4 line-clamp-1 text-xs md:text-base">
                    {doc.specialism}
                  </p>

                  <span className="text-[#9F782F] text-xs font-bold mt-auto">
                    {doc.experience_years} {t("experience_label")}
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
