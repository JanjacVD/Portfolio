import { getDictionary, TLocale } from "../dictionaries";

export async function generateMetadata({
  params,
}: {
  params: { lang: TLocale };
}) {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);

  return {
    title: dict.metadataContact.title,
    description: dict.metadataContact.description,
    keywords: dict.metadataContact.keywords,
    authors: [{ name: dict.metadataContact.author }],
    openGraph: {
      title: dict.metadataContact.ogTitle,
      description: dict.metadataContact.ogDescription,
      locale: dict.metadataContact.ogLocale,
    },
  };
}
export default function Page() {
  return (
    <div className="w-full h-svh">
      <iframe
        src="https://cal.com/janjacvd"
        width="100%"
        height="100%"
        allow="camera; microphone; fullscreen; clipboard-read; clipboard-write"
        title="Book a call"
      ></iframe>
    </div>
  );
}
