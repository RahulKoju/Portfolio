import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { info } from "@/lib/info";
import { Briefcase } from "lucide-react";

const EducationPage = () => {
    return (
        <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
            <Badge variant="secondary" className="gap-1.5 py-1">
                <Briefcase className="h-4 w-4" />
                Education
            </Badge>

            <div className="flex flex-col gap-3">
                <Heading>My Education</Heading>
            </div>

            <div className="w-full h-fit flex flex-col gap-8">
                {info.education.map((edu, index) => (
                    <div key={index} className="w-full h-fit flex">
                        {/* Date */}
                        <FramerWrapper
                            y={0}
                            x={-100}
                            delay={0.35 + index * 0.1}
                            className="w-1/4 font-rubik flex items-center justify-center text-lg max-sm:text-base text-center px-2"
                        >
                            {edu.date}
                        </FramerWrapper>

                        {/* Education Details */}
                        <FramerWrapper
                            y={0}
                            x={100}
                            delay={0.35 + index * 0.1}
                            className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point"
                        >
                            <div className="text-2xl font-rubik max-sm:text-xl leading-tight">
                                {edu.degree}
                                {edu.institution && (
                                    <>
                                        , <br className="sm:hidden" />
                                        <span className="text-xl max-sm:text-lg text-muted-foreground">
                                            {edu.institution}
                                        </span>
                                    </>
                                )}
                            </div>

                            {edu.college && (
                                <div className="text-lg font-medium text-primary/80 mt-1">
                                    {edu.college}
                                </div>
                            )}

                            <p className="font-poppins text-base w-full text-primary max-sm:text-sm mt-2">
                                {edu.description}
                            </p>
                        </FramerWrapper>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EducationPage;
