import { ServiceCardProps } from "@/types";
import Image from "next/image";

export default function ServiceCard({ title, description, image, imagePosition }: ServiceCardProps) {
    const textBlock = (
        <div className="w-full flex flex-col items-start gap-[14.4px] shrink-0">
            <h3
                className="w-full font-cabinet font-medium text-[#161616]"
                style={{ fontSize: "clamp(20px, 2vw, 32px)", lineHeight: "39.68px" }}
            >
                {title}
            </h3>
            <p
                className="w-full font-urbanist font-normal text-[#5E5E5E]"
                style={{ fontSize: "16px", lineHeight: "23.04px" }}
            >
                {description}
            </p>
        </div>
    );

    const imageBlock = (
        <div className="relative w-full overflow-hidden rounded-[8px] shrink-0" style={{ height: "354.67px" }}>
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </div>
    );

    return (
        <div className="group h-full w-full p-6 bg-[#FAF9F8] overflow-hidden rounded-[12px] outline outline-[1.2px] outline-[#E7E1DD] -outline-offset-[1.2px] flex flex-col items-center gap-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(22,22,22,0.08)]">
            {imagePosition === "top" ? (
                <>
                    {imageBlock}
                    {textBlock}
                </>
            ) : (
                <>
                    {textBlock}
                    {imageBlock}
                </>
            )}
        </div>
    );
}