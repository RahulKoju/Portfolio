import { cn } from "@/lib/utils";
import { ExternalLink, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import FramerWrapper from "./animation/FramerWrapper";
import { buttonVariants } from "./ui/button";

const SocialLinks = () => {
  const links = [
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/rahul-koju/",
      icon: <Linkedin />,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/uchiha_rahul/",
      icon: <Instagram />,
    },
    {
      name: "Twitter",
      link: "https://x.com/rahul_koju",
      icon: <Twitter />,
    },
    {
      name: "External",
      link: "https://github.com/RahulKoju",
      icon: <ExternalLink />,
    },
  ];
  return (
    <>
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125;

        return (
          <FramerWrapper key={indx} delay={timing} y={50}>
            <Link
              target="blank"
              href={itm.link}
              className={cn(
                buttonVariants({ variant: "outline", size: "icon" })
              )}
            >
              {itm.icon}
            </Link>
          </FramerWrapper>
        );
      })}
    </>
  );
};

export default SocialLinks;
