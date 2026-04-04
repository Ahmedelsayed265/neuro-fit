import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronLeft } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = await getTranslations("articles");
  const isRTL = locale === "ar";

  const article = {
    title:
      "إعادة تأهيل عضلات الحوض: تقنية فعالة للتخلص من مشكلات التبول بجلسات تأهيل المثانة",
    date: "20 مارس 2024",
    image: "/images/about1.jpg",
    content: `
      <p>يعاني البعض مشكلات متكررة في التبول أو تسريب أو الشعور الدائم بالحاجة إليه، مما يسبب لهم إزعاجاً وتوتراً مستمراً. وقد يظنون أن الحل الوحيد هو اللجوء إلى الأدوية أو العمليات الجراحية، بينما يغفلون عن خيار فعال يعتمد على تقنيات علاج طبيعي حديثة، هو "إعادة تأهيل عضلات الحوض".</p>
      
      <p>في هذا المقال، نأخذك في جولة تعريفية حول جلسات العلاج الطبيعي للمثانة، والتعرف على الحالات المستفادة منها وطبيعة الجلسات، بالإضافة إلى نصائح هامة لدعم العلاج.</p>
      
      <h2 class="text-2xl font-bold text-[#1A1A1A] mt-10 mb-6">ما هي جلسات إعادة تأهيل عضلات قاع الحوض؟</h2>
      <p>يعد إعادة تأهيل عضلات الحوض برنامجاً علاجياً متكاملاً يستهدف تقوية العضلات المحيطة بالمثانة والرحم والمستقيم - أي عضلات قاع الحوض - وتهدف هذه الجلسات إلى تحسين قدرة الشخص على التحكم في التبول والتبرز، والتخفيف من الأعراض المرتبطة بسلس البول أو فرط نشاط المثانة أو حتى آلام الحوض المزمنة.</p>
      
      <h2 class="text-2xl font-bold text-[#1A1A1A] mt-10 mb-6">متى تحتاج إلى جلسات علاج المثانة؟</h2>
      <p>يلجأ أطباء العلاج الطبيعي إلى جلسات إعادة تأهيل عضلات الحوض لعلاج عدة حالات شائعة، من أبرزها:</p>
      <ul class="list-disc list-inside space-y-2 mt-4 text-[#606060]">
        <li>سلس البول الناتج عن الإجهاد أو الضغط خلال السعال أو الضحك.</li>
        <li>الرغبة المتكررة والمفاجئة في التبول، خاصة في أثناء النوم أو عند سماع صوت الماء.</li>
        <li>الشعور بعدم تفريغ المثانة بالكامل بعد التبول.</li>
        <li>آلام في منطقة الحوض أو أسفل الظهر مرتبطة بعضلات الحوض.</li>
      </ul>
    `,
  };

  const relatedArticles = [
    {
      id: 1,
      title: "جلسات التخاطب",
      date: "20 مارس 2024",
      image: "/images/about1.jpg",
      slug: "sessions",
    },
    {
      id: 2,
      title: "جيم طبي متكامل",
      date: "20 مارس 2024",
      image: "/images/services.png",
      slug: "medical-gym",
    },
    {
      id: 3,
      title: "إعادة التأهيل العصبي",
      date: "20 مارس 2024",
      image: "/images/about1.jpg",
      slug: "neuro",
    },
  ];

  return (
    <>
      <div
        className="relative py-8"
        style={{
          backgroundImage: "url(/images/crumb.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <nav className="flex items-center justify-center gap-2 md:gap-3 text-[13px] md:text-base">
            <Link
              href="/"
              className="text-white/70 hover:text-white transition-colors shrink-0"
            >
              {t("home")}
            </Link>
            <ChevronLeft
              size={14}
              className="text-white/40 rtl:rotate-0 ltr:rotate-180 shrink-0"
            />
            <Link
              href="/articles"
              className="text-white/70 hover:text-white transition-colors shrink-0"
            >
              {t("badge")}
            </Link>
            <ChevronLeft
              size={14}
              className="text-white/40 rtl:rotate-0 ltr:rotate-180 shrink-0"
            />
            <span className="text-white font-bold line-clamp-1 opacity-90">
              {article.title}
            </span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <article className="lg:col-span-8">
            <div className="flex items-center justify-start gap-2 text-[#8E8E8E] text-sm mb-4">
              <Calendar size={16} />
              <span>{article.date}</span>
            </div>

            <h1 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-8">
              {article.title}
            </h1>

            <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-10 shadow-sm">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div
              className="prose prose-lg max-w-none text-[#606060] leading-loose text-right"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </article>

          <aside className="lg:col-span-4">
            <div className="sticky top-28">
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8 text-right relative inline-block pb-2 border-b-2 border-[#CDB255]">
                {t("related_articles")}
              </h2>

              <div className="flex flex-col gap-6">
                {relatedArticles.map((item) => (
                  <Link
                    key={item.id}
                    href={`/articles/${item.slug}`}
                    className="flex items-center bg-white gap-4 group p-2 rounded-2xl transition-all border border-[#EAEAEA]"
                  >
                    <div className="relative w-24 h-24 shrink-0 rounded-xl overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="grow text-right">
                      <div className="flex items-centergap-1 text-[#8E8E8E] text-xs mb-2">
                        <Calendar size={12} />
                        <span>{item.date}</span>
                      </div>
                      <h4 className="text-[#1A1A1A] font-bold text-base line-clamp-2 group-hover:text-[#CDB255] transition-colors leading-snug">
                        {item.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
