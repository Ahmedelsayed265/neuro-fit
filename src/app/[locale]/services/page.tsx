import FadeUp from "@/components/FadeUp";
import ServiceCard from "@/components/ServiceCard";
import { Link } from "@/i18n/navigation";
import { ChevronLeft } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function ServicesPage() {
  const t = await getTranslations("services");

  const servicesList = [
    {
      id: 1,
      title: t("item1.title"),
      image: "/images/about1.jpg",
      description: t("item1.description"),
      icon: "/images/nervous system.svg",
    },
    {
      id: 2,
      title: t("item2.title"),
      image: "/images/about2.jpg",
      description: t("item2.description"),
      icon: "/images/hroom.svg",
    },
    {
      id: 3,
      title: t("item3.title"),
      image: "/images/about1.jpg",
      description: t("item3.description"),
      icon: "/images/exercise.svg",
    },
    {
      id: 4,
      title: t("item4.title"),
      image: "/images/about2.jpg",
      description: t("item4.description"),
      icon: "/images/rehabilitation.svg",
    },
    {
      id: 5,
      title: t("item5.title"),
      image: "/images/about1.jpg",
      description: t("item5.description"),
      icon: "/images/rehabilitation.svg",
    },
    {
      id: 6,
      title: t("item6.title"),
      image: "/images/about2.jpg",
      description: t("item6.description"),
      icon: "/images/rehabilitation.svg",
    },
    {
      id: 7,
      title: t("item7.title"),
      image: "/images/about1.jpg",
      description: t("item7.description"),
      icon: "/images/rehabilitation.svg",
    },
    {
      id: 8,
      title: t("item8.title"),
      image: "/images/about2.jpg",
      description: t("item8.description"),
      icon: "/images/rehabilitation.svg",
    },
  ];

  return (
    <section>
      <div
        style={{
          backgroundImage: "url(/images/crumb.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <FadeUp className="max-w-7xl mx-auto py-6">
          <nav className="flex items-center justify-center gap-3 text-base text-white/50">
            <Link href="/" className="text-[#FFFFFFB2] transition-colors">
              {t("home")}
            </Link>

            <ChevronLeft size={16} className="rtl:rotate-0 ltr:rotate-180" />

            <span className="text-[#FFFFFF] font-bold">{t("title")}</span>
          </nav>
        </FadeUp>
      </div>

      <div className="py-12 px-3 md:px-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {servicesList.map((service, index) => (
              <FadeUp key={index} delay={index * 0.1}>
                <ServiceCard service={service} />
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
