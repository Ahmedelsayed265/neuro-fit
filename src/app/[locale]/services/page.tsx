import FadeUp from "@/components/FadeUp";
import ServiceCard from "@/components/ServiceCard";
import { Link } from "@/i18n/navigation";
import { ChevronLeft } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { getServices } from "../../fetches";


export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("services");
  const services = await getServices(locale);

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
            {services.map((service, index) => (
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
