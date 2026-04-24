import { ChevronRight, ChevronLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";
import BlogCard from "@/components/BlogCard";
import FadeUp from "@/components/FadeUp";
import { getArticlesPaginated } from "../../fetches";

export default async function ArticlesPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const { locale } = await params;
  const { page: pageParam } = await searchParams;
  const currentPage = Number(pageParam) || 1;

  const res = await getArticlesPaginated(locale, currentPage);
  const articles = res?.data || [];
  const meta = res?.meta;

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

          {meta && meta.last_page > 1 && (
            <FadeUp className="mt-16 flex justify-center items-center gap-2">
              <Link
                href={
                  meta.current_page > 1
                    ? `/articles?page=${meta.current_page - 1}`
                    : "#"
                }
                className={`w-10 h-10 flex items-center justify-center border border-[#EAEAEA] rounded-lg transition-all ${
                  meta.current_page === 1
                    ? "opacity-50 cursor-not-allowed pointer-events-none"
                    : "hover:border-[#CDB255] hover:text-[#CDB255]"
                }`}
              >
                {isRTL ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
              </Link>

              {Array.from({ length: meta.last_page }, (_, i) => i + 1).map(
                (p) => (
                  <Link
                    key={p}
                    href={`/articles?page=${p}`}
                    className={`w-10 h-10 flex items-center justify-center rounded-lg font-bold transition-all ${
                      p === meta.current_page
                        ? "bg-[#CDB255] text-white"
                        : "border border-[#EAEAEA] hover:border-[#CDB255] hover:text-[#CDB255]"
                    }`}
                  >
                    {p}
                  </Link>
                )
              )}

              <Link
                href={
                  meta.current_page < meta.last_page
                    ? `/articles?page=${meta.current_page + 1}`
                    : "#"
                }
                className={`w-10 h-10 flex items-center justify-center border border-[#EAEAEA] rounded-lg transition-all ${
                  meta.current_page === meta.last_page
                    ? "opacity-50 cursor-not-allowed pointer-events-none"
                    : "hover:border-[#CDB255] hover:text-[#CDB255]"
                }`}
              >
                {isRTL ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
              </Link>
            </FadeUp>
          )}
        </div>
      </div>
    </section>
  );
}

