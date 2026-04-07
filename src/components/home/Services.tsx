"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import FadeUp from "../FadeUp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Services() {
  const t = useTranslations("services");

  const servicesList = [
    {
      id: 1,
      title: t("item1.title"),
      image: "/images/about1.jpg",
      description: t("item1.description"),
      icon: "/images/nervous system.svg",
    },
    {
      id: 2,
      title: t("item2.title"),
      image: "/images/about2.jpg",
      description: t("item2.description"),
      icon: "/images/hroom.svg",
    },
    {
      id: 3,
      title: t("item3.title"),
      image: "/images/about1.jpg",
      description: t("item3.description"),
      icon: "/images/exercise.svg",
    },
    {
      id: 4,
      title: t("item4.title"),
      image: "/images/about2.jpg",
      description: t("item4.description"),
      icon: "/images/rehabilitation.svg",
    },
    {
      id: 5,
      title: t("item5.title"),
      image: "/images/about1.jpg",
      description: t("item5.description"),
      icon: "/images/rehabilitation.svg",
    },
    {
      id: 6,
      title: t("item6.title"),
      image: "/images/about2.jpg",
      description: t("item6.description"),
      icon: "/images/rehabilitation.svg",
    },
    {
      id: 7,
      title: t("item7.title"),
      image: "/images/about1.jpg",
      description: t("item7.description"),
      icon: "/images/rehabilitation.svg",
    },
    {
      id: 8,
      title: t("item8.title"),
      image: "/images/about2.jpg",
      description: t("item8.description"),
      icon: "/images/rehabilitation.svg",
    },
  ];

  const chunkedServices = [];
  for (let i = 0; i < servicesList.length; i += 4) {
    chunkedServices.push(servicesList.slice(i, i + 4));
  }

  return (
    <section className="relative w-full py-12 overflow-hidden" id="services">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "url('/images/ser_bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <FadeUp className="container relative z-10 mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="bg-[#E5DBA3] text-[#5D3F26] px-6 py-2 rounded-full font-bold text-sm mb-6">
            {t("badge")}
          </span>

          <h2 className="text-2xl md:text-5xl font-bold text-[#1A1A1A] leading-tight max-w-2xl">
            {t("title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch ">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="relative">
              <Swiper
                modules={[Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{
                  clickable: true,
                  el: ".services-pagination",
                }}
                className="w-full services-swiper rounded-2xl overflow-hidden"
              >
                {chunkedServices.map((chunk, slideIndex) => (
                  <SwiperSlide key={slideIndex}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                      {chunk.map((service) => (
                        <Link
                          key={service.id}
                          href={`/services/${service.id}`}
                          className="group relative bg-white p-6 rounded-2xl border border-[#EAEAEA] flex flex-col gap-5 overflow-hidden transition-all duration-300"
                        >
                          <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{
                              backgroundImage: `url(${service.image})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }}
                          />

                          <div className="absolute inset-0 bg-[#B8860B] opacity-0 group-hover:opacity-70 transition-opacity duration-300" />

                          <div className="relative z-10 flex flex-col gap-5">
                            <Image
                              src={service.icon}
                              alt={service.title}
                              width={40}
                              height={40}
                              className="group-hover:brightness-0 group-hover:invert transition-all duration-300"
                            />

                            <h3 className="text-base md:text-xl font-semibold text-[#170E08] group-hover:text-white transition-colors duration-300">
                              {service.title}
                            </h3>

                            <p className="text-[#606060] text-sm md:text-base group-hover:text-white/90 transition-colors duration-300">
                              {service.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="services-pagination mt-8 flex static! transform-none! justify-center gap-2 w-full!" />
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[400px] lg:min-h-full rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
            <Image
              src="/images/services.png"
              alt={t("title")}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
