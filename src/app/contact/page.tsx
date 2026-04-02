import ContactForm from "@/components/ContactForm";
import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { info } from "@/lib/info";
import { Mail, Phone } from "lucide-react";

const contactPage = () => {
  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <Phone className="h-4 w-4" />
        Contact Us
      </Badge>
      <div className="flex flex-col gap-3 w-full">
        <Heading>Contact Me!</Heading>
        <FramerWrapper y={0} x={100}>
          <a
            href={`mailto:${info.email}`}
            className="inline-flex items-center gap-2 font-poppins text-lg text-primary hover:text-[#2f7df4] transition-colors max-sm:text-base"
          >
            <Mail className="h-5 w-5" />
            {info.email}
          </a>
        </FramerWrapper>
        <div className="h-auto w-full flex justify-center items-center">
          <FramerWrapper y={0} scale={0.8}>
            <ContactForm />
          </FramerWrapper>
        </div>
        <p className=" font-poppins text-lg w-full text-primary max-sm:text-base"></p>
      </div>
    </div>
  );
};

export default contactPage;
