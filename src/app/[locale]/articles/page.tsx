import { ChevronRight, ChevronLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";
import BlogCard from "@/components/BlogCard";
import FadeUp from "@/components/FadeUp";

export default async function ArticlesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const articles = [
    {
      id: 1,
      title: "إعادة التأهيل العصبي",
      description:
        "هل تتساءل كيف يستعيد شخص ما قدرته على الحركة والكلام بعد إصابة بالغة في الدماغ أو الحبل الشوكي؟",
      date: "20 مارس 2024",
      image: "/images/about1.jpg",
      slug: "إعادة-التأهيل-العصبي",
    },
    {
      id: 2,
      title: "إعادة تأهيل عضلات الحوض: تقنية فعالة",
      description:
        "يعاني البعض مشكلات متكررة في التبول أو تسريب أو الشعور الدائم بالحاجة إليه، مما يسبب لهم إزعاجاً.",
      date: "20 مارس 2024",
      image: "/images/services.png",
      slug: "تأهيل-عضلات-الحوض",
    },
    {
      id: 3,
      title: "جلسات التخاطب",
      description:
        "ينتظر الوالدان بلهفة نمو طفلهم لسماع كلماته الأولى بأسلوبه الحنون، ففي البداية يتلعثم في النطق.",
      date: "20 مارس 2024",
      image: "/images/about1.jpg",
      slug: "جلسات-التخاطب",
    },
    {
      id: 4,
      title: "جيم طبي متكامل",
      description:
        "تعمل صالة الجيم بمثابة مرحلة انتقالية مهمة قبل ممارسة التمارين القوية والعودة للمستوى الطبيعي.",
      date: "20 مارس 2024",
      image: "/images/services.png",
      slug: "جيم-طبي-متكامل",
    },
    {
      id: 5,
      title: "إعادة التأهيل العصبي",
      description:
        "هل تتساءل كيف يستعيد شخص ما قدرته على الحركة والكلام بعد إصابة بالغة في الدماغ أو الحبل الشوكي؟",
      date: "20 مارس 2024",
      image: "/images/about1.jpg",
      slug: "إعادة-التأهيل-العصبي-2",
    },
    {
      id: 6,
      title: "جلسات التخاطب",
      description:
        "ينتظر الوالدان بلهفة نمو طفلهم لسماع كلماته الأولى بأسلوبه الحنون، ففي البداية يتلعثم في النطق.",
      date: "20 مارس 2024",
      image: "/images/services.png",
      slug: "جلسات-التخاطب-2",
    },
  ];

  const isRTL = locale === "ar";

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
              {isRTL ? "الرئيسية" : "Home"}
            </Link>

            <ChevronLeft size={16} className="rtl:rotate-0 ltr:rotate-180" />

            <span className="text-[#FFFFFF] font-bold">
              {isRTL ? "المقالات" : "Articles"}
            </span>
          </nav>
        </FadeUp>
      </div>

      <div className="py-12 px-3 md:px-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <FadeUp key={article.id} delay={index * 0.1}>
                <BlogCard {...article} />
              </FadeUp>
            ))}
          </div>

          <FadeUp className="mt-16 flex justify-center items-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center border border-[#EAEAEA] rounded-lg hover:border-[#CDB255] hover:text-[#CDB255] transition-all">
              {isRTL ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
            </button>

            <button className="w-10 h-10 flex items-center justify-center bg-[#CDB255] text-white rounded-lg font-bold">
              1
            </button>
            <button className="w-10 h-10 flex items-center justify-center border border-[#EAEAEA] rounded-lg hover:border-[#CDB255] hover:text-[#CDB255] transition-all font-bold">
              2
            </button>
            <button className="w-10 h-10 flex items-center justify-center border border-[#EAEAEA] rounded-lg hover:border-[#CDB255] hover:text-[#CDB255] transition-all font-bold">
              3
            </button>

            <span className="px-2 text-[#9ca3af]">...</span>
            <button className="w-10 h-10 flex items-center justify-center border border-[#EAEAEA] rounded-lg hover:border-[#CDB255] hover:text-[#CDB255] transition-all font-bold">
              10
            </button>

            <button className="w-10 h-10 flex items-center justify-center border border-[#EAEAEA] rounded-lg hover:border-[#CDB255] hover:text-[#CDB255] transition-all">
              {isRTL ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
            </button>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
