import { ServiceCardProps } from "@/types";
import LiquidDistortImage from "@/components/ui/LiquidDistortImage";

export default function ServiceCard({ title, description, image, imagePosition }: ServiceCardProps) {
    const textBlock = (
        <div className="w-full flex flex-col items-start gap-2 xs:gap-3 shrink-0">
            <h3 className="w-full text-2xl md:text-[32px] font-medium font-cabinet leading-[1.24] text-[#161616]">
                {title}
            </h3>
            <p className="w-full text-sm md:text-lg font-urbanist leading-[1.44] text-[#5E5E5E]">
                {description}
            </p>
        </div>
    );

    const imageBlock = (
        <div className="relative w-full flex-1 min-h-[180px] xs:min-h-[220px] sm:min-h-[260px] rounded-lg overflow-hidden">
            <LiquidDistortImage
                src={image}
                alt={title}
                className="rounded-lg"
                strength={0.04}
            />
        </div>
    );

    return (
        <div className="h-full min-h-[380px] xs:min-h-[420px] md:min-h-[524px] lg:min-h-[628px] w-full p-4 xs:p-6 md:p-7 bg-[#FAF9F8] rounded-2xl border border-[#E7E1DD] flex flex-col items-stretch gap-3 xs:gap-4 md:gap-5">
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