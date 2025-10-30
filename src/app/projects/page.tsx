import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { info } from "@/lib/info";
import { Layers } from "lucide-react";

const projectsPage = () => {
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
                        {info.project_description}
                    </p>
                </FramerWrapper>
            </div>

            <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
                {info.projects.map((project, indx) => {
                    return (
                        <ProjectCards
                            key={project.uuid}
                            value={project}
                            num={indx}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default projectsPage;
