import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="shrink-0">
      <Link href="/">
        <Image
          src="/images/logo.svg"
          alt="NeuroFit"
          width={200}
          height={50}
          priority
        />
      </Link>
    </div>
  );
}
