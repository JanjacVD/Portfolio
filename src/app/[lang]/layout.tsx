import "../globals.css";
import Link from "next/link";
import { getDictionary, TLocale } from "./dictionaries";
import Footer from "@/components/Footer";
import GlassCursor from "@/components/Cursor";

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}) {
  const lang = (await params).lang;
  // ✅ correct usage
  return {
    title: lang === "hr" ? "Naslov" : "Title",
  };
}
export default async function RootLayoutas({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: TLocale };
}>) {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);
  const links = [
    { label: dict.nav.home, href: "/" },
    { label: dict.nav.work, href: "work" },
    { label: dict.nav.contact, href: "contact" },
    { label: dict.nav.about, href: "about" },
    { label: lang === "en" ? "HR" : "EN", href: lang === "en" ? "/hr" : "/en" },
  ];

  return (
    <html lang="en">
      <body className={` antialiased`}>
        <nav className="flex w-full bg-background/75 fixed top-0 left-0 text-foreground text-2xl font-semibold items-center justify-between p-8">
          {links.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="hover:text-foreground/80 transition-all hover:-translate-y-1 py-1 hover:tracking-wider hover:scale-110"
            >
              {label}
            </Link>
          ))}
        </nav>
        <GlassCursor />
        <main className="pt-28 min-h-svh">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
