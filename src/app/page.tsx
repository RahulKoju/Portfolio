import DownLoadResumeBtn from "@/components/DownLoadResumeBtn";
import HeroImage from "@/components/HeroImage";
import HeroTexts from "@/components/HeroTexts";
import SocialLinks from "@/components/SocialLinks";
import FramerWrapper from "@/components/animation/FramerWrapper";
import GithubBtn from "@/components/animation/GithubBtn";
import { info } from "@/lib/info";
import { Mail } from "lucide-react";

export const siteConfig = {
  name: info.name,
  description: info.description,
  ogImage: "/og-image.png",
  url: "https://rahulkoju.com.np/",
};

export default function Home() {
  return (
    <>
      {/* LEFT SIDE  */}
      <FramerWrapper
        className=" h-full w-auto flex flex-col justify-start gap-2 sm:gap-4"
        y={0}
        x={-100}
      >
        <HeroTexts />
        <div>
          <div className="h-fit w-full p-4 flex gap-4">
            <SocialLinks />
          </div>
          <a
            href={`mailto:${info.email}`}
            className="inline-flex items-center gap-2 px-4 font-poppins text-base sm:text-lg text-primary hover:text-[#2f7df4] transition-colors"
          >
            <Mail className="h-4 w-4" />
            {info.email}
          </a>
          <DownLoadResumeBtn />
        </div>
      </FramerWrapper>
      {/* RIGHT SIDE image  */}
      <FramerWrapper
        className="h-full w-[35%] relative block max-lg:hidden"
        y={0}
        x={100}
      >
        {/* IMAGE  */}
        <HeroImage />
      </FramerWrapper>

      {/* GITHUB BUTTON  */}
      <GithubBtn />
    </>
  );
}
