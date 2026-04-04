import { defineRouting } from "next-intl/routing";

const LOCALES = ["ar", "en"];

export const routing = defineRouting({
  locales: LOCALES,
  defaultLocale: "ar",
  localePrefix: "always",
});
