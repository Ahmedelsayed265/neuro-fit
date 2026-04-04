"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function FooterContactInfo() {
  const t = useTranslations();

  const contacts = [
    {
      icon: "/images/call2.svg",
      label: t("footer.phone_label"),
      value: "02/38366544",
      dir: "ltr",
      alt: "Phone"
    },
    {
      icon: "/images/call1.svg",
      label: t("footer.mobile_label"),
      value: "+201022224271",
      dir: "ltr",
      alt: "Call"
    },
    {
      icon: "/images/email.svg",
      label: t("footer.email_label"),
      value: "neurofiteg@gmail.com",
      className: "break-all",
      alt: "Email"
    }
  ];

  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-xl md:text-2xl font-bold">{t("footer.quick_contact")}</h3>
      <div className="space-y-4">
        {contacts.map((contact, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Image
                src={contact.icon}
                alt={contact.alt}
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <p className="text-sm md:text-base text-white">
                {contact.label}
              </p>
            </div>
            <div>
              <p className={`font-bold ${contact.className || ""} ${contact.value.includes("@") ? "" : "tracking-wider"}`} dir={contact.dir}>
                {contact.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
