import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { getArticleBySlug, getArticles } from "@/app/fetches";
import ArticleBreadcrumbs from "@/components/articles/ArticleBreadcrumbs";
import ArticleContent from "@/components/articles/ArticleContent";
import FAQSection from "@/components/FAQSection";
import RelatedArticles from "@/components/articles/RelatedArticles";

export async function generateStaticParams() {
  const locales = ["ar", "en"];
  
  const allParams = await Promise.all(
    locales.map(async (locale) => {
      const articles = await getArticles(locale);
      return articles.map((article) => ({
        locale,
        slug: article.slug,
      }));
    })
  );

  return allParams.flat();
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = await getTranslations("articles");

  const [article, allArticles] = await Promise.all([
    getArticleBySlug(slug, locale),
    getArticles(locale),
  ]);

  if (!article) {
    notFound();
  }

  const relatedArticles = allArticles
    .filter((a) => a.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <ArticleBreadcrumbs 
        homeLabel={t("home")}
        articlesLabel={t("badge")}
        articleTitle={article.title}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <ArticleContent article={article} locale={locale} />
            <FAQSection faqs={article.faqs || []} title={t("faqs_title")} />
          </div>

          <RelatedArticles 
            articles={relatedArticles} 
            title={t("related_articles")} 
            locale={locale} 
          />
        </div>
      </div>
    </>
  );
}
