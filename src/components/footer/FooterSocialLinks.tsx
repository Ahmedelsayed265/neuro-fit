"use client";

import Image from "next/image";

const socialLinks = [
  {
    icon: (
      <Image src="/images/youtube.svg" alt="Youtube" width={20} height={20} />
    ),
    href: "#",
  },
  {
    icon: (
      <Image src="/images/tiktok.svg" alt="Tiktok" width={20} height={20} />
    ),
    href: "#",
  },
  {
    icon: (
      <Image src="/images/insta.svg" alt="Instagram" width={20} height={20} />
    ),
    href: "#",
  },
  {
    icon: (
      <Image src="/images/face.svg" alt="Facebook" width={13} height={13} />
    ),
    href: "#",
  },
];

export default function FooterSocialLinks() {
  return (
    <div className="flex gap-4 mt-2">
      {socialLinks.map((link, idx) => (
        <a
          key={idx}
          href={link.href}
          aria-label={link.href}
          className="text-[#000000] bg-[#CDB255] border-[3px] border-b-[6px] min-w-12 h-12 p-2 flex items-center justify-center rounded-xl font-bold text-base border-[#000000] shadow-[0px_5px_14.3px_2px_#9E852ECC] transition-transform hover:scale-110 active:scale-95"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
