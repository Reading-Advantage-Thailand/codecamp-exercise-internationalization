// TODO: This is a Server Component — use getTranslations('about')
// - Display the about page title and bio using server-side translations

export default async function AboutPage() {
  return (
    <main>
      <h1>About</h1>
      <p>This page should use server-side translations from the about namespace.</p>
    </main>
  );
}
