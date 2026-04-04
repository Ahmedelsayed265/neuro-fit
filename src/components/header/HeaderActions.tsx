import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default function HeaderActions({ locale }: { locale: string }) {
  return (
    <div className="flex-1 flex justify-end items-center gap-6">
      <a
        href="tel:+201234567890"
        className="flex items-center justify-center gap-2"
      >
        <span className="w-10 h-10 flex items-center justify-center bg-[#CDB255] rounded-full">
          <Image
            src="/images/call.svg"
            loading="lazy"
            alt="call"
            width={20}
            height={20}
          />
        </span>
        01234567890
      </a>

      <Link
        href={locale === "ar" ? "en" : "ar"}
        className="flex items-center justify-center gap-2"
      >
        <span className="w-10 h-10 flex items-center justify-center bg-[#CDB255] rounded-full">
          <Image
            src="/images/globe.svg"
            loading="lazy"
            alt="globe"
            width={20}
            height={20}
          />
        </span>
        {locale === "ar" ? "English" : "العربية"}
      </Link>
    </div>
  );
}
