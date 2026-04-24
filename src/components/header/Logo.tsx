import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default function Logo({ logoUrl }: { logoUrl?: string }) {
  return (
    <div className="shrink-0">
      <Link href="/">
        <Image
          src={logoUrl || "/images/logo.svg"}
          alt="NeuroFit"
          width={200}
          height={50}
          priority
          className="h-12 w-auto object-contain"
        />
      </Link>
    </div>
  );
}

