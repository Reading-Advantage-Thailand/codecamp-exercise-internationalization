"use client";

import { useRouter, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

export default function LanguageSwitcher() {
  const t = useTranslations("common");
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(newLocale: string) {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  }

  return (
    <div>
      <span>{t("language")}: </span>
      <button onClick={() => switchLocale("en")}>English</button>
      {" | "}
      <button onClick={() => switchLocale("th")}>ไทย</button>
    </div>
  );
}
