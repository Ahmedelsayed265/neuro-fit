"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Play } from "lucide-react";
import Image from "next/image";
import FadeUp from "../FadeUp";

export default function HomeVideo({ videoUrl }: { videoUrl?: string }) {
  const t = useTranslations("home_video");
  const [isPlaying, setIsPlaying] = useState(false);

  // Append autoplay if playing
  const finalVideoUrl = videoUrl
    ? `${videoUrl}${videoUrl.includes("?") ? "&" : "?"}autoplay=1`
    : "https://www.youtube.com/embed/ZuDMz_RtWD8?autoplay=1";

  return (
    <section className="relative w-full overflow-hidden mb-20" id="home-video">
      <div className="absolute top-0 left-0 w-full h-[60%] bg-white -z-10" />
      <div className="absolute bottom-0 left-0 w-full h-[40%] bg-[#CDB255] -z-10" />

      <FadeUp className="max-w-7xl mx-auto px-4 py-16 bg-transparent">
        <div className="flex flex-col items-center mb-12 text-center">
          <span className="bg-[#E5DBA3] text-[#5D3F26] px-6 py-2 rounded-full font-bold text-sm mb-6">
            {t("badge")}
          </span>
          <h3 className="text-2xl md:text-5xl font-bold text-[#1A1A1A] leading-tight max-w-2xl">
            {t("title")}
          </h3>
        </div>

        <div className="relative mx-auto aspect-video rounded-3xl md:rounded-[2.5rem] overflow-hidden border-4 border-white/20 shadow-2xl bg-transparent">
          {!isPlaying ? (
            <div
              className="relative w-full h-full group cursor-pointer"
              onClick={() => setIsPlaying(true)}
            >
              <Image
                src="/images/home-video.jpg"
                alt="Video Thumbnail"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center border-4 border-white/60 relative group-hover:bg-[#CDB255] group-hover:border-[#CDB255] transition-all duration-300">
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white group-hover:text-black group-hover:fill-black transition-colors" />
                </div>
              </div>
            </div>
          ) : (
            <iframe
              src={finalVideoUrl}
              title="NeuroFit Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          )}
        </div>
      </FadeUp>
    </section>
  );
}
