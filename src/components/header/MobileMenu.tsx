"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import {
  X,
  Phone,
  Globe,
  Home,
  Users,
  Info,
  Stethoscope,
  Send,
} from "lucide-react";
import Image from "next/image";

import { socialLinks } from "@/constants/socialLinks";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  locale: string;
}

export default function MobileMenu({
  isOpen,
  onClose,
  locale,
}: MobileMenuProps) {
  const t = useTranslations();

  const navItems = [
    { href: "/", text: t("home"), icon: <Home className="w-5 h-5" /> },
    {
      href: "#medical-team",
      text: t("medical team"),
      icon: <Users className="w-5 h-5" />,
    },
    {
      href: "#about-us",
      text: t("about us"),
      icon: <Info className="w-5 h-5" />,
    },
    {
      href: "#services",
      text: t("services.badge"),
      icon: <Stethoscope className="w-5 h-5" />,
    },
    {
      href: "#contact-us",
      text: t("contact us"),
      icon: <Send className="w-5 h-5" />,
    },
  ];

  const menuVariants: Variants = {
    closed: {
      x: locale === "ar" ? "100%" : "-100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.05,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    closed: {
      opacity: 0,
      x: locale === "ar" ? 15 : -15,
      transition: {
        duration: 0.1,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 450,
        damping: 35,
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-60 backdrop-blur-[2px] lg:hidden"
          />

          {/* Menu Drawer */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 bottom-0 w-[85%] max-w-[320px] bg-white z-70 py-5 px-4 shadow-2xl lg:hidden flex flex-col overflow-y-auto overflow-x-hidden"
            style={{ [locale === "ar" ? "right" : "left"]: 0 }}
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-between mb-6"
            >
              <Link href="/" onClick={onClose} className="shrink-0">
                <Image
                  src="/images/logo.svg"
                  alt="NeuroFit"
                  width={130}
                  height={32}
                  className="h-auto w-auto"
                />
              </Link>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 border border-gray-100 transition-all active:scale-95"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </motion.div>

            <nav className="flex flex-col gap-1 mb-auto">
              {navItems.map((item) => (
                <motion.div key={item.href} variants={itemVariants}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center gap-3 text-[14px] font-bold text-gray-600 hover:text-[#CDB255] hover:bg-gray-50/50 p-2 rounded-xl transition-all group"
                  >
                    <span className="p-1.5 rounded-lg bg-gray-50 group-hover:bg-white border border-transparent group-hover:border-gray-100 shadow-sm transition-all text-gray-400 group-hover:text-[#CDB255]">
                      {item.icon}
                    </span>
                    {item.text}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              variants={itemVariants}
              className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-2"
            >
              <a
                href="tel:+201234567890"
                className="flex items-center gap-3 text-gray-700 p-1.5 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <span className="w-9 h-9 flex items-center justify-center bg-[#CDB255]/10 rounded-full text-[#CDB255]">
                  <Phone className="w-4.5 h-4.5" />
                </span>
                <span className="font-medium text-gray-600 text-[14px]">
                  01234567890
                </span>
              </a>

              <Link
                href="/"
                locale={locale === "ar" ? "en" : "ar"}
                className="flex items-center gap-3 text-gray-700 p-1.5 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={onClose}
              >
                <span className="w-9 h-9 flex items-center justify-center bg-[#CDB255]/10 rounded-full text-[#CDB255]">
                  <Globe className="w-4.5 h-4.5" />
                </span>
                <span className="font-medium text-gray-600 text-[14px]">
                  {locale === "ar" ? "English" : "العربية"}
                </span>
              </Link>

              {/* Social Links */}
              <div className="flex items-center gap-2.5 mt-2 pt-3 border-t border-gray-50">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-full border border-[#F1EDD0] text-[#5D3F26] hover:bg-[#CDB255] hover:text-white hover:border-[#CDB255] transition-all duration-300 shadow-sm"
                  >
                    <span className="scale-[0.8]">{social.icon}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
