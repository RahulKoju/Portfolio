import DownLoadResumeBtn from "@/components/DownLoadResumeBtn";
import HeroImage from "@/components/HeroImage";
import HeroTexts from "@/components/HeroTexts";
import SocialLinks from "@/components/SocialLinks";
import FramerWrapper from "@/components/animation/FramerWrapper";
import GithubBtn from "@/components/animation/GithubBtn";
import { info } from "@/lib/info";

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
                className=" h-full w-auto flex flex-col justify-start gap-4"
                y={0}
                x={-100}
            >
                <HeroTexts />
                <div className="h-fit w-full p-4 flex gap-4">
                    <SocialLinks />
                </div>
                <DownLoadResumeBtn />
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
