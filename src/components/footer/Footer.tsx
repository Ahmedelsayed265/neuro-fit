"use client";

import FooterMap from "./FooterMap";
import FooterAddress from "./FooterAddress";
import FooterAbout from "./FooterAbout";
import FooterQuickLinks from "./FooterQuickLinks";
import FooterContactInfo from "./FooterContactInfo";

export default function Footer() {
  return (
    <footer className="w-full">
      <FooterMap />
      <FooterAddress />
      <div
        className="bg-[#2F2013] py-16 px-4 -mt-1 relative overflow-hidden"
        style={{
          backgroundImage: "url(/images/footer.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-white rtl:text-right ltr:text-left relative z-10">
          <FooterAbout />
          <FooterQuickLinks />
          <FooterContactInfo />
        </div>

        <div className="absolute inset-0 bg-[#2F2013]/20 pointer-events-none" />
      </div>
    </footer>
  );
}
