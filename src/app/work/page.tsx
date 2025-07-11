import Project from "@/components/project";
import cuteicle from "@/assets/cuteiclemobile.jpeg";
import vdad from "@/assets/vdad.jpeg";
import Image from "next/image";
export default function Page() {
  return (
    <div className="p-8">
      <h1 className="text-7xl tracking-widest animate-pulse py-12">My Work</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-y-8">
        <Project link="https://restoran-simun.hr">
          <iframe
            src="https://restoran-simun.hr"
            width="100%"
            height="100%"
            loading="lazy"
          ></iframe>
        </Project>
        <Project
          appStore="https://apps.apple.com/hr/app/cute-icle/id6748095247"
          playStore="https://play.google.com/store/apps/details?id=com.janjacvd.cuteicle"
        >
          <Image
            src={cuteicle}
            height={300}
            width={300}
            className="w-full h-full object-cover"
            objectFit="cover"
            alt="Cute-Icle "
          />
        </Project>
        <Project
          playStore="https://play.google.com/store/apps/details?id=com.janjacvd.vd_ad&hl=en"
          appStore="https://apps.apple.com/hr/app/vd-ad/id6740984015"
        >
          <Image
            src={vdad}
            height={200}
            width={400}
            className="w-full h-full object-cover"
            objectFit="cover"
            alt="VD-AD"
          />
        </Project>
      </div>
    </div>
  );
}
