"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { Article } from "@/types/api";
import { useLocale } from "next-intl";

export default function BlogCard({
  slug,
  title,
  description,
  image_url,
  created_at,
}: Article) {
  const locale = useLocale();
  
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
    <Link
      href={`/articles/${slug}`}
      className="bg-white rounded-2xl shadow-[0px_8px_7.5px_0px_#E5DBA34D] overflow-hidden h-full flex flex-col p-4 group"
    >
      <div
        className="relative w-full shrink-0 rounded-[8px_8px_100px_100px] overflow-hidden mb-6"
        style={{ height: "230px", minHeight: "230px" }}
      >
        <Image
          src={image_url || "/images/about1.jpg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />
      </div>

      <div className="grow text-right flex flex-col">
        {created_at && (
          <div className="flex items-center gap-2 text-xs mb-3">
            <Calendar className="w-3.5 h-3.5 text-[#8E8E8E]" />
            <span className="font-medium text-[#8E8E8E]">
              {formatDate(created_at)}
            </span>
          </div>
        )}

        <h3 className="text-base md:text-xl font-bold mb-3 text-[#1A1A1A] group-hover:text-[#8B734B] transition-colors line-clamp-1">
          {title}
        </h3>

        <p className="text-[#606060] leading-relaxed line-clamp-3 mb-4 text-sm md:text-base">
          {description}
        </p>
      </div>
    </Link>
  );
}
