import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default function ServiceCard({ service }: { service: any }) {
  return (
    <Link
      key={service.id}
      href={`/services/${service.id}`}
      className="group relative bg-white p-6 rounded-2xl border border-[#EAEAEA] flex flex-col gap-5 overflow-hidden transition-all duration-300"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          backgroundImage: `url(${service.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute inset-0 bg-[#B8860B] opacity-0 group-hover:opacity-70 transition-opacity duration-300" />

      <div className="relative z-10 flex flex-col gap-5">
        <Image
          src={service.icon}
          alt={service.title}
          width={40}
          height={40}
          className="group-hover:brightness-0 group-hover:invert transition-all duration-300"
        />

        <h3 className="text-base md:text-xl font-semibold text-[#170E08] group-hover:text-white transition-colors duration-300">
          {service.title}
        </h3>

        <p className="text-[#606060] text-sm md:text-base group-hover:text-white/90 transition-colors duration-300">
          {service.description}
        </p>
      </div>
    </Link>
  );
}
