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
     {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.6024 0H9.5976C4.3044 0 0 4.3056 0 9.6C0 11.7 0.6768 13.6464 1.8276 15.2268L0.6312 18.7932L4.3212 17.6136C5.8392 18.6192 7.65 19.2 9.6024 19.2C14.8956 19.2 19.2 14.8932 19.2 9.6C19.2 4.3068 14.8956 0 9.6024 0ZM15.1884 13.5564C14.9568 14.2104 14.0376 14.7528 13.3044 14.9112C12.8028 15.018 12.1476 15.1032 9.942 14.1888C7.1208 13.02 5.304 10.1532 5.1624 9.9672C5.0268 9.7812 4.0224 8.4492 4.0224 7.0716C4.0224 5.694 4.722 5.0232 5.004 4.7352C5.2356 4.4988 5.6184 4.3908 5.9856 4.3908C6.1044 4.3908 6.2112 4.3968 6.3072 4.4016C6.5892 4.4136 6.7308 4.4304 6.9168 4.8756C7.1484 5.4336 7.7124 6.8112 7.7796 6.9528C7.848 7.0944 7.9164 7.2864 7.8204 7.4724C7.7304 7.6644 7.6512 7.7496 7.5096 7.9128C7.368 8.076 7.2336 8.2008 7.092 8.376C6.9624 8.5284 6.816 8.6916 6.9792 8.9736C7.1424 9.2496 7.7064 10.17 8.5368 10.9092C9.6084 11.8632 10.4772 12.168 10.788 12.2976C11.0196 12.3936 11.2956 12.3708 11.4648 12.1908C11.6796 11.9592 11.9448 11.5752 12.2148 11.1972C12.4068 10.926 12.6492 10.8924 12.9036 10.9884C13.1628 11.0784 14.5344 11.7564 14.8164 11.8968C15.0984 12.0384 15.2844 12.1056 15.3528 12.2244C15.42 12.3432 15.42 12.9012 15.1884 13.5564Z"
            fill="currentColor"
          />
        </svg>
      ),
      href: settings?.whatsaap_url || "#",
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

