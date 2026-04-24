"use client";

import Image from "next/image";

import { Settings } from "@/types/api";

export default function FooterSocialLinks({
  settings,
}: {
  settings: Settings | null;
}) {
  const socialLinks = [
    {
      icon: (
        <Image src="/images/youtube.svg" alt="Youtube" width={20} height={20} />
      ),
      href: settings?.youtube_url || "#",
    },
    {
      icon: (
        <Image src="/images/tiktok.svg" alt="Tiktok" width={20} height={20} />
      ),
      href: settings?.tiktok_url || "#",
    },
    {
      icon: (
        <Image src="/images/insta.svg" alt="Instagram" width={20} height={20} />
      ),
      href: settings?.intgram_url || "#",
    },
    {
      icon: (
        <Image src="/images/face.svg" alt="Facebook" width={13} height={13} />
      ),
      href: settings?.facebook_url || "#",
    },
  ];

  return (
    <div className="flex gap-4 mt-2">
      {socialLinks.map((link, idx) => (
        <a
          key={idx}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#000000] bg-[#CDB255] border-[3px] min-w-12 h-12 p-2 flex items-center justify-center rounded-xl font-bold text-base border-black btn-premium"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}

