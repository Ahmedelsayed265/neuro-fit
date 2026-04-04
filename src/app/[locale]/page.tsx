import Care from "@/components/home/Care";
import Hero from "@/components/home/Hero";
import Team from "@/components/home/Team";
import Services from "@/components/home/Services";
import Articles from "@/components/home/Articles";
import Contact from "@/components/home/Contact";
import About from "@/components/home/About";

export default function Home() {
  return (
    <>
      <Hero />
      <Care />
      <Team />
      <About />
      <Services />
      <Articles />
      <Contact />
    </>
  );
}
