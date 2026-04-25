"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Calendar } from "lucide-react";
import { Link } from "@/i18n/navigation";
import FadeUp from "../FadeUp";
import { Article } from "@/types/api";

export default function Articles({ articles }: { articles: Article[] }) {
  const t = useTranslations("articles");

  if (!articles || articles.length === 0) return null;

  const featuredArticle = articles.find((a) => a.is_featured) || articles[0];
  const sideArticles = articles
    .filter((a) => a.id !== featuredArticle?.id)
    .slice(0, 3);

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat("ar-EG", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  return (
    <section className="w-full py-20" id="articles">
      <FadeUp className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="bg-[#E5DBA3] text-[#5D3F26] px-6 py-2 rounded-full font-bold text-sm mb-6">
            {t("badge")}
          </span>
          <h3 className="text-2xl md:text-5xl font-bold text-[#1A1A1A] leading-tight max-w-2xl">
            {t("title")}
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5">
            <Link
              href={`/articles/${featuredArticle.slug}`}
              className="bg-white rounded-2xl shadow-[0px_8px_7.5px_0px_#E5DBA34D] overflow-hidden h-full flex flex-col p-4"
            >
              <div className="relative w-full h-[280px] md:h-[448px] rounded-[8px_8px_100px_100px] overflow-hidden mb-6">
                <Image
                  src={featuredArticle.image_url || "/images/d2.png"}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div className="text-right px-2 pb-2 grow flex flex-col">
                {featuredArticle.created_at && (
                  <div className="flex items-center gap-2 text-gray-400 text-xs mb-4">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="font-medium">
                      {formatDate(featuredArticle.created_at)}
                    </span>
                  </div>
                )}

                <h3 className="text-xl text-start md:text-2xl font-bold mb-4 text-[#1A1A1A] hover:text-[#8B734B] cursor-pointer transition-colors line-clamp-2">
                  {featuredArticle.title}
                </h3>

                <p className="text-gray-500 text-start text-base leading-relaxed mb-6 line-clamp-3">
                  {featuredArticle.description}
                </p>
              </div>
            </Link>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            {sideArticles.map((article) => (
              <Link
                key={article.id}
                href={`/articles/${article.slug}`}
                className="bg-white rounded-2xl shadow-[0px_8px_7.5px_0px_#E5DBA34D] overflow-hidden h-full flex flex-col md:flex-row gap-6 p-4"
              >
                <div className="relative w-full md:w-[280px] h-[280px] md:h-[160px] shrink-0 rounded-[8px_8px_100px_100px] overflow-hidden sm:order-1">
                  <Image
                    src={article.image_url || "/images/about1.jpg"}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="grow text-right sm:order-2">
                  {article.created_at && (
                    <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                      <Calendar className="w-3.5 h-3.5" />
                      <span className="font-medium">
                        {formatDate(article.created_at)}
                      </span>
                    </div>
                  )}

                  <h3 className="text-xl md:text-2xl text-start font-bold mb-3 text-[#1A1A1A] hover:text-[#8B734B] cursor-pointer transition-colors line-clamp-1">
                    {article.title}
                  </h3>

                  <p className="text-gray-500 text-sm text-start leading-relaxed line-clamp-2">
                    {article.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <Link
            href="/articles"
            className="text-[#5D3F26] bg-white border-[3px] min-w-52 h-14 p-2 flex items-center justify-center rounded-xl font-bold text-base border-[#CDB255] btn-premium-gold"
          >
            {t("view_all")}
          </Link>
        </div>
      </FadeUp>
    </section>
  );
}
