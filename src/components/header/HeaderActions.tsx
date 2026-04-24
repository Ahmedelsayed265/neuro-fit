import { Link } from "@/i18n/navigation";
import Image from "next/image";

import { Settings } from "@/types/api";

export default function HeaderActions({
  locale,
  settings,
}: {
  locale: string;
  settings: Settings | null;
}) {
  return (
    <div className="hidden lg:flex justify-end items-center gap-8">
      <a
        href={`tel:${settings?.telephone || "+201234567890"}`}
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
        {settings?.telephone || "01234567890"}
      </a>

      <Link
        href="/"
        locale={locale === "ar" ? "en" : "ar"}
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

