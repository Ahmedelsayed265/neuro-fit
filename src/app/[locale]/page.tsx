import { getArticles, getBanners, getDoctors, getServices, getSettings } from "../fetches";
import Care from "@/components/home/Care";
import Hero from "@/components/home/Hero";
import Team from "@/components/home/Team";
import HomeVideo from "@/components/home/HomeVideo";
import Services from "@/components/home/Services";
import Articles from "@/components/home/Articles";
import Contact from "@/components/home/Contact";
import About from "@/components/home/About";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const [banners, doctors, services, articles, settings] = await Promise.all([
    getBanners(locale),
    getDoctors(locale),
    getServices(locale),
    getArticles(locale),
    getSettings(locale),
  ]);


  return (
    <>
      <Hero banners={banners} />
      <Care />
      <Team doctors={doctors} />
      <HomeVideo videoUrl={settings?.intro_video_embed_link} />
      <About settings={settings} />
      <Services services={services} />
      <Articles articles={articles} />
      <Contact />
    </>
  );
}
