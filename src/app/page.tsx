import profilePic from "@/assets/profile.jpg";
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <div>
      <div className="flex gap-x-16 items-center justify-center px-12 flex-col md:flex-row gap-y-16">
        <div className="flex-1">
          <h1 className="text-7xl tracking-widest animate-pulse">
            Valentino Janjac
          </h1>
          <h2 className="text-4xl mt-4">Software Engineer</h2>
          <p className="text-2xl mt-4">Developing custom software solutions</p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Image
            src={profilePic}
            width={300}
            className=" rounded-xl md:blur-lg hover:blur-none transition-all hover:scale-125"
            height={500}
            alt="Profile pic"
          />
        </div>
      </div>
      <div className="text-center flex flex-col items-center gap-y-8 mt-12 justify-center">
        <h3 className="text-2xl tracking-wider">Useful links:</h3>
        <div className="flex items-center gap-x-4 [&>a]:hover:scale-125 [&>a]:transition-all">
          <a
            href="https://github.com/JanjacVD"
            rel="norefferer"
            target="_blank"
          >
            <FaGithub className="text-5xl" />
          </a>
          <a
            href="https://hr.linkedin.com/in/valentino-janjac-bab165235"
            rel="norefferer"
            target="_blank"
          >
            <FaLinkedin className="text-5xl" />
          </a>
          <a
            href="https://www.instagram.com/valentino_janjac/"
            rel="norefferer"
            target="_blank"
          >
            <FaInstagram className="text-5xl" />
          </a>
          <a href="mailto:valentino.janjac@gmail.com" rel="norefferer">
            <MdEmail className="text-5xl" />
          </a>
        </div>
      </div>
    </div>
  );
}
