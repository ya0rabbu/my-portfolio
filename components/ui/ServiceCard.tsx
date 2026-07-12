import { ServiceCardProps } from "@/types";
import GlitchSlitScanImage from "@/components/ui/GlitchSlitScanImage";

export default function ServiceCard({ title, description, image, imagePosition }: ServiceCardProps) {
    const textBlock = (
        <div className="w-full flex flex-col items-start gap-3">
            <h3 className="w-full text-2xl md:text-[32px] font-medium font-cabinet leading-tight text-[#161616]">
                {title}
            </h3>
            <p className="w-full text-base md:text-lg font-urbanist leading-6 text-[#5E5E5E]">
                {description}
            </p>
        </div>
    );

    const imageBlock = (
        <div className="relative w-full flex-1 rounded-lg overflow-hidden">
            <GlitchSlitScanImage
                src={image}
                alt={title}
                className="rounded-lg"
                stripHeight={6}
                maxShift={24}
                rgbSplit={4}
            />
        </div>
    );

    return (
        <div className="h-[420px] md:h-[524px] lg:h-[628px] w-full p-6 md:p-7 bg-[#FAF9F8] rounded-2xl border border-[#E7E1DD] flex flex-col items-center gap-4 md:gap-5">
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