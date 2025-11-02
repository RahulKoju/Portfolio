import logo from "../../public/Rahulkoju.png";
import Image from "next/image";

const HeroImage = () => {
    return (
        <>
            <Image
                src={logo}
                alt="logo"
                loading="eager"
                priority
                height={400}
                width={400}
            />
        </>
    );
};
export default HeroImage;
