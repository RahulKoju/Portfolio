import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
  const Projects = [
    {
      title: "Chat-bot Application",
      description:
        "An interactive AI-powered chatbot that enables users to ask questions and receive intelligent responses across various topics using advanced language models.",
      tags: ["TypeScript", "Groq", "Open-Source AI", "JWT", "MERN Stack"],
      link: "https://github.com/RahulKoju/OpenAI-chat-bot",
    },
    {
      title: "Blog Application",
      description:
        "A comprehensive content management system that allows users to create, publish, and manage blog posts with secure authentication, responsive design, and multimedia support.",
      tags: [
        "MERN Stack",
        "JWT",
        "Tailwind CSS",
        "Firebase",
        "Redux",
        "JavaScript",
      ],
      link: "https://mern-blog-xyxn.onrender.com/",
    },
    {
      title: "E_Mitra",
      description:
        "A business management platform designed to streamline operations for Mitra Khaja Ghar, utilizing Strapi as a headless CMS to provide flexible and scalable backend services.",
      tags: [
        "Next.js",
        "TypeScript",
        "ShadCN UI",
        "React Hook Form",
        "Zod",
        "Supabase",
        "React Query",
        "Strapi",
      ],
      link: "https://github.com/RahulKoju/E_Mitra",
    },
    {
      title: "Oauth and Payment API",
      description:
        "A secure authentication solution integrating Esewa and Khalti payment gateways, enabling seamless third-party login and digital transaction processing.",
      tags: ["Laravel", "OAuth", "Esewa", "Khalti", "Payment Gateway"],
      link: "https://github.com/RahulKoju/Oauth_Payment_API",
    },
    {
      title: "Job Search Application",
      description:
        "A comprehensive job search platform that connects job seekers with potential employers, featuring robust search and application management capabilities.",
      tags: ["Laravel", "Eloquent ORM"],
      link: "https://github.com/RahulKoju/JobSearch_App",
    },
    {
      title: "HTTP Server",
      description:
        "A high-performance custom HTTP server built from scratch, demonstrating advanced networking and server-side programming techniques.",
      tags: ["Node.js", "TCP Sockets", "Performance Optimization"],
      link: "https://github.com/RahulKoju/CodeCrafters-HTTP-Server",
    },
    {
      title: "URL Shortener Discord Bot",
      description:
        "A Discord bot that provides users with quick URL shortening capabilities and comprehensive link performance tracking directly within the Discord platform.",
      tags: ["JavaScript", "Discord", "URL Shortener", "Analytics"],
      link: "https://github.com/RahulKoju/UrlShortner-DiscrodBot",
    },
  ];

  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <Layers className="h-4 w-4" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
            I enjoy building Cool Projects. Here, you&#x27;ll find a curated
            collection of my creative endeavors and technical projects. Each
            piece represents a journey of innovation, problem-solving, and
            continuous learning. Feel free to explore this showcase of my
            passion and expertise in action.
          </p>
        </FramerWrapper>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
