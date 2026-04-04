import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Team() {
  const t = useTranslations("team");

  const doctors = [
    { id: "doctor1", image: "/images/d1.jpg" },
    { id: "doctor2", image: "/images/d2.png" },
    { id: "doctor3", image: "/images/d3.png" },
    { id: "doctor4", image: "/images/d4.png" },
  ];

  return (
    <section className="w-full py-10 px-3 md:px-0" id="medical-team">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <span className="bg-[#CDB25533] text-[#5D3F26] px-6 py-2 rounded-full font-bold text-sm mb-6">
            {t("badge")}
          </span>

          <h2 className="text-2xl md:text-5xl font-bold text-[#000000] text-center md:mb-4 mb-2">
            {t("title")}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6">
          {doctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-[#F9F8ED] rounded-2xl overflow-hidden"
            >
              <div className="relative w-full aspect-square bg-gray-100">
                <Image
                  src={doc.image}
                  alt={t(`${doc.id}.name`)}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6 flex flex-col">
                <h3 className="md:text-xl text-sm font-bold text-[#000000] mb-2 line-clamp-1">
                  {t(`${doc.id}.name`)}
                </h3>

                <p className="text-[#606060] font-medium mb-4 line-clamp-1 text-xs md:text-base">
                  {t(`${doc.id}.specialty`)}
                </p>

                <span className="text-[#9F782F] text-xs font-bold">
                  {t(`${doc.id}.experience`)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
