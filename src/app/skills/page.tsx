import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFotter";
import { Badge } from "@/components/ui/badge";
import { LightbulbIcon } from "lucide-react";

import FramerWrapper from "@/components/animation/FramerWrapper";
import { info } from "@/lib/info";
const skillPage = () => {
    return (
        <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
            <Badge variant="secondary" className="gap-1.5 py-1 ">
                <LightbulbIcon className="w-4 h-4" />
                My Skills
            </Badge>
            <div className="flex flex-col gap-3">
                <Heading>My Technical Skills & Tooling</Heading>
                <FramerWrapper y={0} x={200}>
                    <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
                        {info.short_summary}
                    </p>
                </FramerWrapper>
                <FramerWrapper y={100} delay={0.3} className="block w-full">
                    <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
                        CI/CD & GitOps
                    </h1>
                    <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
                        <SkillsFooter
                            items={info.skills.cicd_gitops}
                        />
                    </div>
                </FramerWrapper>
                <FramerWrapper className="block w-full" y={100} delay={0.32}>
                    <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
                        Containers & Orchestration
                    </h1>
                    <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
                        <SkillsFooter
                            items={info.skills.containers_orchestration}
                        />
                    </div>
                </FramerWrapper>
                <FramerWrapper className="block w-full" y={100} delay={0.34}>
                    <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
                        Cloud & IaC
                    </h1>
                    <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
                        <SkillsFooter items={info.skills.cloud_iac} />
                    </div>
                </FramerWrapper>
                <FramerWrapper className="block w-full" y={100} delay={0.36}>
                    <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
                        Observability
                    </h1>
                    <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
                        <SkillsFooter items={info.skills.observability} />
                    </div>
                </FramerWrapper>
                <FramerWrapper className="block w-full" y={100} delay={0.38}>
                    <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
                        Networking & Security
                    </h1>
                    <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
                        <SkillsFooter items={info.skills.networking_security} />
                    </div>
                </FramerWrapper>
                <FramerWrapper className="block w-full" y={100} delay={0.40}>
                    <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
                        Backend
                    </h1>
                    <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
                        <SkillsFooter items={info.skills.backend} />
                    </div>
                </FramerWrapper>
                <FramerWrapper className="block w-full" y={100} delay={0.42}>
                    <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
                        Frontend
                    </h1>
                    <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
                        <SkillsFooter items={info.skills.frontend} />
                    </div>
                </FramerWrapper>
                <FramerWrapper className="block w-full" y={100} delay={0.44}>
                    <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
                        Tools
                    </h1>
                    <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
                        <SkillsFooter items={info.skills.tools} />
                    </div>
                </FramerWrapper>
            </div>
        </div>
    );
};

export default skillPage;
