"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");

  return (
    <section className="w-full py-12 overflow-hidden relative" id="about-us">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full aspect-562/535">
              {/* Main Image Container */}
              <div className="absolute top-0 right-0 w-[70%] h-full rounded-2xl overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-500">
                <Image
                  src="/images/about1.jpg"
                  alt="Main Physiotherapy Session"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute bottom-[50px] left-0 w-[58%] h-[40%] rounded-2xl overflow-hidden border-12 border-[#FBFBF9] z-20 transform group-hover:translate-x-2 transition-transform duration-500 delay-75">
                <Image
                  src="/images/about2.jpg"
                  alt="Secondary Treatment Session"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Experience Card */}
              <div className="absolute top-10 -left-10 lg:left-10 bg-[#F9F8ED] p-6 rounded-2xl flex flex-col items-center gap-3 z-30 min-w-[256px] transform group-hover:scale-105 transition-transform duration-500">
                <div className="bg-[#CDB255] p-3 rounded-full shadow-[-4.61px_6.91px_0px_0px_#805A28]">
                  <Image
                    src="/images/cirtificate.svg"
                    alt="Certificate"
                    width={48}
                    height={48}
                    className="object-contain text-[#CDB255]"
                  />
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#2F2013]">
                    {t("experience_years")}
                  </p>
                  <p className="text-sm font-medium text-[#2F2013]/70 uppercase tracking-wider">
                    {t("experience_label")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-right rtl:lg:text-right ltr:lg:text-left">
            <span className="bg-[#EAE4C8] text-[#2F2013] px-6 py-1.5 rounded-full text-sm font-bold mb-6 inline-block">
              {t("badge")}
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#2F2013] mb-12 leading-tight">
              {t("title")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 w-full">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <Image
                      src="/images/vision.svg"
                      alt="Vision"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#5D3F26]">
                    {t("vision_title")}
                  </h3>
                </div>
                <p className="text-[#2F2013]/70 text-sm leading-relaxed">
                  {t("vision_desc")}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <Image
                      src="/images/target.svg"
                      alt="Mission"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#5D3F26]">
                    {t("mission_title")}
                  </h3>
                </div>
                <p className="text-[#2F2013]/70 text-sm leading-relaxed">
                  {t("mission_desc")}
                </p>
              </div>
            </div>

            <div className="w-full flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center">
                  <Image
                    src="/images/Handshake.svg"
                    alt="Values"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#5D3F26]">
                  {t("values_title")}
                </h3>
              </div>
              <p className="text-[#2F2013]/70 text-sm leading-relaxed">
                {t("values_desc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
