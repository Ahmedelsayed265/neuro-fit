import { Link } from "@/i18n/navigation";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import FadeUp from "@/components/FadeUp";

interface ServiceBreadcrumbsProps {
  homeLabel: string;
  servicesLabel: string;
  serviceTitle: string;
  iconUrl: string;
}

export default function ServiceBreadcrumbs({
  homeLabel,
  servicesLabel,
  serviceTitle,
  iconUrl,
}: ServiceBreadcrumbsProps) {
  return (
    <div
      className="relative py-8"
      style={{
        backgroundImage: "url(/images/crumb.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <FadeUp className="max-w-7xl mx-auto px-4 md:px-8">
        <nav className="flex items-center justify-center flex-col gap-3 text-base">
          <div className="flex items-center gap-2">
            <Image
              src={iconUrl}
              alt={serviceTitle}
              width={48}
              height={48}
              className="w-12 h-12 object-contain brightness-0 invert"
            />
            <h1 className="text-white font-bold md:text-3xl text-xl">
              {serviceTitle}
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="text-white/70 hover:text-white transition-colors text-sm md:text-base"
            >
              {homeLabel}
            </Link>
            <ChevronLeft
              size={16}
              className="text-white/50 rtl:rotate-0 ltr:rotate-180"
            />
            <Link
              href="/services"
              className="text-white/70 hover:text-white transition-colors text-sm md:text-base"
            >
              {servicesLabel}
            </Link>
            <ChevronLeft
              size={16}
              className="text-white/50 rtl:rotate-0 ltr:rotate-180"
            />
            <span className="text-white font-bold line-clamp-1 max-w-[300px] text-sm md:text-base">
              {serviceTitle}
            </span>
          </div>
        </nav>
      </FadeUp>
    </div>
  );
}
