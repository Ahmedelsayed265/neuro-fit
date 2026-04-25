import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import FadeUp from "@/components/FadeUp";

interface ArticleBreadcrumbsProps {
  homeLabel: string;
  articlesLabel: string;
  articleTitle: string;
}

export default function ArticleBreadcrumbs({
  homeLabel,
  articlesLabel,
  articleTitle,
}: ArticleBreadcrumbsProps) {
  return (
    <div
      className="relative py-8"
      style={{
        backgroundImage: "url(/images/crumb.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <FadeUp className="max-w-7xl mx-auto px-4 md:px-8">
        <nav className="flex items-center justify-center gap-2 md:gap-3 text-[13px] md:text-base">
          <Link
            href="/"
            className="text-white/70 hover:text-white transition-colors shrink-0"
          >
            {homeLabel}
          </Link>
          <ChevronLeft
            size={14}
            className="text-white/40 rtl:rotate-0 ltr:rotate-180 shrink-0"
          />
          <Link
            href="/articles"
            className="text-white/70 hover:text-white transition-colors shrink-0"
          >
            {articlesLabel}
          </Link>
          <ChevronLeft
            size={14}
            className="text-white/40 rtl:rotate-0 ltr:rotate-180 shrink-0"
          />
          <span className="text-white font-bold line-clamp-1 opacity-90">
            {articleTitle}
          </span>
        </nav>
      </FadeUp>
    </div>
  );
}
