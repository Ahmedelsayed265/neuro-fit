import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Calendar } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import { Article } from "@/types/api";

interface RelatedArticlesProps {
  articles: Article[];
  title: string;
  locale: string;
}

export default function RelatedArticles({
  articles,
  title,
  locale,
}: RelatedArticlesProps) {
  const formatDate = (dateStr?: string) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat(locale === "ar" ? "ar-EG" : "en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  return (
    <aside className="lg:col-span-4">
      <div className="sticky top-28">
        <FadeUp>
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8 text-start relative inline-block pb-2 border-b-2 border-[#CDB255]">
            {title}
          </h2>
        </FadeUp>

        <div className="flex flex-col gap-6">
          {articles.map((item, index) => (
            <FadeUp key={item.id} delay={index * 0.1}>
              <Link
                href={`/articles/${item.slug}`}
                className="flex items-center bg-white gap-4 group p-2 rounded-2xl transition-all border border-[#EAEAEA]"
              >
                <div className="relative w-24 h-24 shrink-0 rounded-xl overflow-hidden">
                  <Image
                    src={item.image_url}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="96px"
                  />
                </div>
                <div className="grow text-start">
                  <div className="flex items-center gap-1 text-[#8E8E8E] text-xs mb-2">
                    <Calendar size={12} />
                    <span>{formatDate(item.created_at)}</span>
                  </div>
                  <h4 className="text-[#1A1A1A] font-bold text-base line-clamp-2 group-hover:text-[#CDB255] transition-colors leading-snug">
                    {item.title}
                  </h4>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </aside>
  );
}
