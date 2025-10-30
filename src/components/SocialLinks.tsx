import { info } from "@/lib/info";
import { cn } from "@/lib/utils";
import Link from "next/link";
import FramerWrapper from "./animation/FramerWrapper";
import { buttonVariants } from "./ui/button";

const SocialLinks = () => {
    return (
        <>
            {info.socials.map((itm, indx) => {
                const timing = 0.55 + indx * 0.125;
                const Icon = itm.icon;
                return (
                    <FramerWrapper key={indx} delay={timing} y={50}>
                        <Link
                            target="_blank"
                            href={itm.link}
                            className={cn(
                                buttonVariants({
                                    variant: "outline",
                                    size: "icon",
                                })
                            )}
                        >
                            <Icon />
                        </Link>
                    </FramerWrapper>
                );
            })}
        </>
    );
};

export default SocialLinks;
