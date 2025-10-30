import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Calendar, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import FramerWrapper from "./animation/FramerWrapper";
import { buttonVariants } from "./ui/button";

interface ProjectCardProps {
    value: {
        uuid: string;
        title: string;
        subtitle: string;
        description: string;
        start_date: string | null;
        end_date: string | null;
        links: Array<{
            uuid: string;
            link: string;
            label: string;
        }>;
        date_format_input_type?: string;
    };
    num: number;
}

// Helper: Extract tech keywords from HTML description
const extractTagsFromDescription = (html: string): string[] => {
    const text = html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ");
    const techKeywords = [
        "TypeScript",
        "Groq",
        "Open-Source AI",
        "Node.js",
        "TCP Sockets",
        "Performance Optimization",
        "MERN Stack",
        "JWT",
        "Tailwind CSS",
        "Firebase",
        "Laravel",
        "OAuth",
        "Payment Gateway",
        "Next.js",
        "ShadCN UI",
        "React Hook Form",
        "Zod",
        "Supabase",
        "Eloquent ORM",
        "Nextjs",
        "Shadcn Ui",
        "MySQL",
        "Zustand",
        "Npx",
        "Library",
        "Analytics",
        "JavaScript",
        "Discord",
        "URL Shortener",
        "Khalti",
        "Esewa",
        "Strapi",
        "React Query",
        "Redux",
        "mBART",
        "BM25",
        "BLEU",
        "BERT",
        "NLP",
        "Transformer",
        "Fine-tuned",
        "API",
        "State Management",
        "Authentication",
        "Authorization",
    ];

    return techKeywords.filter((tag) => text.includes(tag));
};

function formatDate(
    start_date: string | null | undefined,
    end_date: string | null | undefined,
    date_format_input_type?: string
): string {
    // Handle empty dates
    if (!start_date && !end_date) {
        return "";
    }

    // Create the date string based on start_date and end_date
    const dateString =
        start_date || end_date
            ? start_date && end_date
                ? `${start_date} - ${end_date}`
                : start_date
                ? `${start_date} - Present`
                : end_date
            : "";

    if (!dateString) {
        return "";
    }

    // Handle based on date_format_input_type
    if (date_format_input_type === "Year") {
        // For year-only format, extract just the year
        const [start, end] = dateString.split(" - ");
        const startYear = start ? new Date(start).getFullYear().toString() : "";
        const endYear =
            end === "Present"
                ? "Present"
                : end
                ? new Date(end).getFullYear().toString()
                : "";

        return startYear && endYear
            ? `${startYear} - ${endYear}`
            : startYear || endYear || "";
    }

    if (date_format_input_type === "Year/Month") {
        // For year/month format, show month and year
        const [start, end] = dateString.split(" - ");
        const monthNames = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];

        let formattedStart = "";
        if (start) {
            const startDate = new Date(start);
            if (!isNaN(startDate.getTime())) {
                formattedStart = `${
                    monthNames[startDate.getMonth()]
                }, ${startDate.getFullYear()}`;
            }
        }

        let formattedEnd = "";
        if (end === "Present") {
            formattedEnd = "Present";
        } else if (end) {
            const endDate = new Date(end);
            if (!isNaN(endDate.getTime())) {
                formattedEnd = `${
                    monthNames[endDate.getMonth()]
                }, ${endDate.getFullYear()}`;
            }
        }

        return formattedStart && formattedEnd
            ? `${formattedStart} - ${formattedEnd}`
            : formattedStart || formattedEnd || "";
    }

    if (date_format_input_type === "Year/Month/Day") {
        // For full date format, show day, month and year
        const [start, end] = dateString.split(" - ");
        const monthNames = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];

        let formattedStart = "";
        if (start) {
            const startDate = new Date(start);
            if (!isNaN(startDate.getTime())) {
                formattedStart = `${
                    monthNames[startDate.getMonth()]
                } ${startDate.getDate()}, ${startDate.getFullYear()}`;
            }
        }

        let formattedEnd = "";
        if (end === "Present") {
            formattedEnd = "Present";
        } else if (end) {
            const endDate = new Date(end);
            if (!isNaN(endDate.getTime())) {
                formattedEnd = `${
                    monthNames[endDate.getMonth()]
                } ${endDate.getDate()}, ${endDate.getFullYear()}`;
            }
        }

        return formattedStart && formattedEnd
            ? `${formattedStart} - ${formattedEnd}`
            : formattedStart || formattedEnd || "";
    }

    // Fallback to original logic if no date_format_input_type or empty string return year only
    // Handle single year or date range
    if (/^\d{4}$/.test(dateString)) {
        return dateString; // Return year-only, e.g., "2025"
    }

    // Split the date string for ranges
    const [start, end] = dateString.split(" - ");
    // const monthNames = [
    //     "Jan",
    //     "Feb",
    //     "Mar",
    //     "Apr",
    //     "May",
    //     "Jun",
    //     "Jul",
    //     "Aug",
    //     "Sep",
    //     "Oct",
    //     "Nov",
    //     "Dec",
    // ];

    // Format start date
    let formattedStart = "";
    if (start && /^\d{4}$/.test(start)) {
        formattedStart = start; // Year-only
    } else if (start) {
        const startDate = new Date(start);
        if (isNaN(startDate.getTime())) {
            throw new Error("Invalid start date format");
        }
        // formattedStart = `${
        //     monthNames[startDate.getMonth()]
        // }, ${startDate.getFullYear()}`;
        formattedStart = `${startDate.getFullYear()}`;
    }

    // Format end date
    let formattedEnd = "";
    if (end === "Present") {
        formattedEnd = "Present";
    } else if (end && /^\d{4}$/.test(end)) {
        formattedEnd = end; // Year-only
    } else if (end) {
        const endDate = new Date(end);
        if (isNaN(endDate.getTime())) {
            throw new Error("Invalid end date format");
        }
        // formattedEnd = `${
        //     monthNames[endDate.getMonth()]
        // }, ${endDate.getFullYear()}`;
        formattedEnd = `${endDate.getFullYear()}`;
    }

    // Combine formatted dates
    return formattedStart && formattedEnd
        ? `${formattedStart} - ${formattedEnd}`
        : formattedStart || formattedEnd || "";
}

const ProjectCards: React.FC<ProjectCardProps> = ({ value, num }) => {
    const tags = extractTagsFromDescription(value.description);
    const mainLink = value.links[0]?.link || "#";
    const isGithub = mainLink.includes("github");
    const dateText =
        formatDate(
            value.start_date,
            value.end_date,
            value.date_format_input_type
        ) || "Ongoing";

    return (
        <FramerWrapper
            className="max-w-[32%] max-lg:max-w-full"
            y={0}
            scale={0.8}
            delay={num / 4}
            duration={0.15}
        >
            <Card className="w-full h-full flex flex-col hover:shadow-lg transition-all duration-300 border-2">
                <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle className="text-2xl font-bold text-primary leading-tight">
                                {value.title}
                            </CardTitle>
                            {value.subtitle && (
                                <p className="text-base font-medium text-muted-foreground mt-1.5">
                                    {value.subtitle}
                                </p>
                            )}
                        </div>
                        {isGithub ? (
                            <Github className="h-6 w-6 text-muted-foreground mt-1" />
                        ) : (
                            <ArrowUpRight className="h-6 w-6 text-muted-foreground mt-1" />
                        )}
                    </div>

                    <div className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground mt-3">
                        <Calendar className="h-4 w-4" />
                        {dateText}
                    </div>
                </CardHeader>

                <CardContent className="flex-grow flex flex-col gap-5">
                    {/* Description with larger, readable text */}
                    <div
                        className="text-base leading-relaxed text-muted-foreground prose prose-sm max-w-none html__display"
                        style={{
                            fontSize: "1rem", // 16px base
                            lineHeight: "1.6",
                        }}
                        dangerouslySetInnerHTML={{ __html: value.description }}
                    />

                    {/* Tags with slightly larger, clearer badges */}
                    <div className="flex flex-wrap gap-2.5">
                        {tags.map((tag, index) => {
                            const tagStyles: Record<string, string> = {
                                TypeScript: "bg-red-100 text-red-800",
                                Groq: "bg-purple-100 text-purple-800",
                                "Open-Source AI":
                                    "bg-emerald-100 text-emerald-800",
                                "Node.js": "bg-green-100 text-green-800",
                                "TCP Sockets": "bg-blue-100 text-blue-800",
                                "Performance Optimization":
                                    "bg-indigo-100 text-indigo-800",
                                "MERN Stack": "bg-teal-100 text-teal-800",
                                JWT: "bg-yellow-100 text-yellow-800",
                                "Tailwind CSS": "bg-cyan-100 text-cyan-800",
                                Firebase: "bg-orange-100 text-orange-800",
                                Laravel: "bg-pink-100 text-pink-800",
                                OAuth: "bg-violet-100 text-violet-800",
                                "Payment Gateway": "bg-rose-100 text-rose-800",
                                "Next.js": "bg-sky-100 text-sky-800",
                                "ShadCN UI": "bg-lime-100 text-lime-800",
                                "React Hook Form":
                                    "bg-fuchsia-100 text-fuchsia-800",
                                Zod: "bg-amber-100 text-amber-800",
                                Supabase: "bg-emerald-100 text-emerald-800",
                                "Eloquent ORM": "bg-indigo-100 text-indigo-800",
                                Nextjs: "bg-teal-100 text-teal-800",
                                "Shadcn Ui": "bg-blue-100 text-blue-800",
                                MySQL: "bg-orange-100 text-orange-800",
                                Zustand: "bg-purple-100 text-purple-800",
                                Npx: "bg-indigo-100 text-indigo-800",
                                Library: "bg-pink-100 text-pink-800",
                                Analytics: "bg-blue-200 text-blue-900",
                                JavaScript: "bg-yellow-200 text-yellow-900",
                                Discord: "bg-purple-200 text-purple-900",
                                "URL Shortener": "bg-green-200 text-green-900",
                                Khalti: "bg-blue-100 text-blue-800",
                                Esewa: "bg-green-100 text-green-800",
                                Strapi: "bg-cyan-200 text-cyan-900",
                                "React Query": "bg-pink-200 text-pink-900",
                                Redux: "bg-purple-300 text-purple-900",
                                mBART: "bg-orange-100 text-orange-800",
                                BM25: "bg-teal-100 text-teal-800",
                                BLEU: "bg-indigo-100 text-indigo-800",
                                BERT: "bg-purple-100 text-purple-800",
                                NLP: "bg-emerald-100 text-emerald-800",
                                Transformer: "bg-rose-100 text-rose-800",
                                "Fine-tuned": "bg-amber-100 text-amber-800",
                                API: "bg-sky-100 text-sky-800",
                                "State Management": "bg-lime-100 text-lime-800",
                                Authentication:
                                    "bg-fuchsia-100 text-fuchsia-800",
                                Authorization: "bg-violet-100 text-violet-800",
                            };

                            const style =
                                tagStyles[tag] || "bg-gray-100 text-gray-800";

                            return (
                                <span
                                    key={index}
                                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${style}`}
                                >
                                    {tag}
                                </span>
                            );
                        })}
                    </div>
                </CardContent>

                <CardFooter className="flex flex-wrap gap-2">
                    {value.links.length > 0 &&
                        value.links.map((link) => {
                            const isGithub = link.link.includes("github");
                            const label =
                                link.label.charAt(0).toUpperCase() +
                                link.label.slice(1);

                            return (
                                <Link
                                    key={link.uuid}
                                    href={link.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={cn(
                                        buttonVariants({
                                            variant: "default",
                                            size: "lg",
                                        }),
                                        "text-base font-medium transition-all hover:translate-y-[-3px] hover:shadow-lg group flex items-center gap-1.5"
                                    )}
                                >
                                    {isGithub ? (
                                        <>
                                            <Github className="h-5 w-5" />
                                            <span>{label}</span>
                                        </>
                                    ) : (
                                        <>
                                            <ExternalLink className="h-5 w-5" />
                                            <span>{label}</span>
                                        </>
                                    )}
                                </Link>
                            );
                        })}
                </CardFooter>
            </Card>
        </FramerWrapper>
    );
};

export default ProjectCards;
