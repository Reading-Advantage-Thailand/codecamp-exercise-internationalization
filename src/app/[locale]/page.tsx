"use client";

import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/language-switcher";

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <LanguageSwitcher />
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
      <button>{t("getStarted")}</button>
    </main>
  );
}
