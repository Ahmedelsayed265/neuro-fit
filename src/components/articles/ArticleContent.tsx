import Image from "next/image";
import { Calendar } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import { Article } from "@/types/api";

interface ArticleContentProps {
  article: Article;
  locale: string;
}

export default function ArticleContent({ article, locale }: ArticleContentProps) {
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
    <FadeUp>
      <div className="flex items-center justify-start gap-2 text-[#8E8E8E] text-sm mb-4">
        <Calendar size={16} />
        <span>{formatDate(article.created_at)}</span>
      </div>

      <h1 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-8">
        {article.title}
      </h1>

      <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-10 shadow-sm">
        <Image
          src={article.image_url}
          alt={article.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
          priority
        />
      </div>

      <div
        className="prose prose-lg max-w-none text-[#606060] leading-loose text-start mb-16 whitespace-pre-line"
        dangerouslySetInnerHTML={{ __html: article.content || article.description || "" }}
      />
    </FadeUp>
  );
}
