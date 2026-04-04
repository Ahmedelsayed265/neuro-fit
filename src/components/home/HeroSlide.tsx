import Image from "next/image";
import { useTranslations } from "next-intl";

export default function HeroSlide() {
  const t = useTranslations("hero");
  return (
    <div className="relative w-full h-full">
      <Image
        src="/images/slide.png"
        alt="Hero Slide"
        className="object-cover rounded-3xl"
        fill
      />
      <div className="absolute inset-0 hero_gradient flex items-center justify-center">
        <div className="max-w-5xl w-full px-4 pb-16 md:pb-0">
          <h2 className="text-[22px] md:text-[56px] font-bold text-white text-center">
            {t("title")}
          </h2>

          <div className="flex items-center justify-center gap-3 md:gap-6 mt-6 md:mt-8">
            <a href="#about" className="text-[#5D3F26] bg-white border-[3px] border-b-[6px] min-w-36 md:min-w-52  h-14 p-2 flex items-center justify-center rounded-xl font-bold text-sm md:text-base border-[#CDB255] shadow-[0px_5px_14.3px_2px_#9E852ECC]">
              {t("cta_about")}
            </a>

            <a href="#about" className="text-[#000000] bg-[#CDB255] border-[3px] border-b-[6px] min-w-36 md:min-w-52 h-14 p-2 flex items-center justify-center rounded-xl font-bold text-sm md:text-base border-[#000000] shadow-[0px_5px_14.3px_2px_#9E852ECC]">
                {t("cta_contact")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
