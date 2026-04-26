"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings } from "@/types/api";
import { socialLinks } from "@/constants/socialLinks";

export default function FloatingActions({
  settings,
}: {
  settings: Settings | null;
}) {
  const dynamicSocialLinks = socialLinks.map((social) => {
    let href = social.href;
    if (social.id === "whatsapp") href = settings?.whatsaap_url || "#";
    if (social.id === "facebook") href = settings?.facebook_url || "#";
    if (social.id === "instagram") href = settings?.intgram_url || "#";
    if (social.id === "tiktok") href = settings?.tiktok_url || "#";
    if (social.id === "youtube") href = settings?.youtube_url || "#";
    return { ...social, href };
  });

  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isHiddenByFooter, setIsHiddenByFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      setShowScrollTop(scrollY > 300);
      
      // Hide if near the footer (e.g., within 600px of the bottom to avoid overlap)
      const footerThreshold = 600; 
      setIsHiddenByFooter(documentHeight - (scrollY + windowHeight) < footerThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed left-4 md:left-6 bottom-6 md:bottom-16 z-50 flex flex-col items-center gap-2 md:gap-4">
      {/* Social Media Bar */}
      <AnimatePresence>
        {!isHiddenByFooter && (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            className="hidden md:flex md:flex-col bg-white p-1.5 md:p-2 rounded-full shadow-[0px_4px_20px_0px_#0000001A] gap-2 md:gap-3 border border-[#F1EDD0]"
          >
            {dynamicSocialLinks.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full border-2 border-[#CDB255] text-[#5D3F26] hover:bg-[#CDB255] hover:text-white transition-all duration-300 [&>svg]:scale-75 md:[&>svg]:scale-100"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={scrollToTop}
            className="w-10 h-10 md:w-12 md:h-12 bg-[#CDB255] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#B89A44] transition-all cursor-pointer"
          >
            <ChevronUp className="w-5 h-5 md:w-6 md:h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
