"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import FadeUp from "../FadeUp";

export default function HomeVideo() {
  const t = useTranslations("home_video");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

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

        <div
          className="relative group cursor-pointer mx-auto"
          onClick={() => setIsOpen(true)}
        >
          <div className="relative aspect-video rounded-3xl md:rounded-[2.5rem] overflow-hidden border-4 border-white/20">
            <Image
              src="/images/home-video.jpg"
              alt="Video Thumbnail"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-100"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center border-2 border-white/60 relative group-hover:bg-[#CDB255] transition-colors">
                <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-white group-hover:text-black group-hover:fill-black transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </FadeUp>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-8 lg:p-12"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
              onClick={() => setIsOpen(false)}
            />

            <motion.div className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(205,178,85,0.2)] bg-black z-10">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/80 rounded-full transition-all group border border-white/10"
                aria-label="Close video"
              >
                <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform" />
              </button>

              <iframe
                src="https://www.youtube.com/embed/ZuDMz_RtWD8?si=gNIzCMJZdZjUFuiM"
                title="NeuroFit Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
