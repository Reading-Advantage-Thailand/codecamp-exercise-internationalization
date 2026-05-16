import { getTranslations } from "next-intl/server";

export default async function AboutPage() {
  const t = await getTranslations("about");

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>{t("title")}</h1>
      <p>{t("bio")}</p>
    </main>
  );
}
