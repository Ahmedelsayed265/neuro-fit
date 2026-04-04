import Image from "next/image";
import { useLocale } from "next-intl";

export default function Care() {
  const locale = useLocale();
  const isAr = locale === "ar";

  // Swap first and last images for Arabic locale
  const images = isAr 
    ? ["/images/care3.png", "/images/care2.png", "/images/care1.png"]
    : ["/images/care1.png", "/images/care2.png", "/images/care3.png"];

  return (
    <section className="w-full py-8 md:py-14 overflow-hidden">
      <div className="md:px-0 px-3">
        <div className="flex flex-row justify-center items-center gap-6 md:gap-20">
          {images.map((src, index) => (
            <div key={index} className="relative flex-1 h-16 md:h-44">
              <Image
                src={src}
                alt="care"
                fill
                sizes="(max-width: 768px) 33vw, 400px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
