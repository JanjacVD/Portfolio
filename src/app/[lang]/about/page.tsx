import { FaLaravel, FaLinux, FaReact } from "react-icons/fa";
import { getDictionary } from "../dictionaries";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { TParams } from "../../../../types";

export async function generateMetadata({ params }: { params: TParams }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return {
    title: dict.metadataAbout.title,
    description: dict.metadataAbout.description,
    keywords: dict.metadataAbout.keywords,
    authors: [{ name: dict.metadataAbout.author }],
    openGraph: {
      title: dict.metadataAbout.ogTitle,
      description: dict.metadataAbout.ogDescription,
      locale: dict.metadataAbout.ogLocale,
    },
  };
}

export default async function Page({ params }: { params: TParams }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return (
    <div className="p-8">
      <h1 className="text-7xl tracking-widest animate-pulse py-4">
        {dict.about.title}
      </h1>
      <div className="flex flex-col gap-y-4 text-xl">
        <p>{dict.about.intro}</p>
        <p>{dict.about.line2}</p>
        <p>{dict.about.line3}</p>
      </div>
      <div className="text-center flex-wrap gap-y-12 py-8 flex items-center justify-center">
        <h2 className="text-3xl w-full">{dict.about.tech}</h2>
        <div className="grid grid-cols-2 text-5xl gap-y-4 [&>div]:text-3xl">
          <FaLaravel />
          <div>Laravel</div>
          <FaReact />
          <div>React</div>
          <FaReact />
          <div>React Native</div>
          <SiNextdotjs />
          <div>NextJS</div>
          <RiTailwindCssFill />
          <div>Tailwind CSS</div>
          <BiLogoPostgresql />
          <div>PostgreSQL</div>
          <FaLinux />
          <div>Linux</div>
          <IoLogoJavascript />
          <div>Javascript</div>
          <SiTypescript />
          <div>Typescript</div>
        </div>
      </div>
    </div>
  );
}
