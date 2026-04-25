import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import Image from "next/image";
import FadeUp from "@/components/FadeUp";
import { getServiceBySlug, getServices } from "@/app/fetches";
import ServiceBreadcrumbs from "@/components/services/ServiceBreadcrumbs";
import FAQSection from "@/components/FAQSection";

export async function generateStaticParams() {
  const locales = ["ar", "en"];
  
  const allParams = await Promise.all(
    locales.map(async (locale) => {
      const services = await getServices(locale);
      return services.map((service) => ({
        locale,
        slug: service.slug,
      }));
    })
  );

  return allParams.flat();
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = await getTranslations("services");

  const service = await getServiceBySlug(slug, locale);

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceBreadcrumbs 
        homeLabel={t("home")}
        serviceTitle={service.title}
        iconUrl={service.icon_url}
      />

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        {/* Main Image */}
        <FadeUp className="relative w-full aspect-video rounded-3xl overflow-hidden mb-12 shadow-sm">
          <Image
            src={service.image_url}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
        </FadeUp>

        <div className="text-start">
          <FadeUp>
            <div
              className="prose prose-lg max-w-none text-[#606060] leading-loose whitespace-pre-line mb-16"
              dangerouslySetInnerHTML={{ __html: service.content || service.description || "" }}
            />
          </FadeUp>

          {service.faqs && service.faqs.length > 0 && (
            <FadeUp>
              <FAQSection 
                faqs={service.faqs} 
                title={t("faqs_title")} 
              />
            </FadeUp>
          )}
        </div>
      </div>
    </>
  );
}
