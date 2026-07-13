import LiquidDistortImage from "@/components/ui/LiquidDistortImage";

interface ProjectCardProps {
    title: string;
    tag: string;
    description: string;
    quote: string;
    image: string;
    imagePosition: "left" | "right";
}

export default function ProjectCard({ title, tag, description, quote, image, imagePosition }: ProjectCardProps) {
    const imageBlock = (
        <div className="relative w-full md:w-[45%] lg:w-[636px] h-[200px] xs:h-[250px] sm:h-[300px] md:h-[424px] rounded-lg overflow-hidden bg-[#F6F4F2] shrink-0">
            <LiquidDistortImage
                src={image}
                alt={title}
                className="rounded-lg"
                strength={0.04}
            />
        </div>
    );

    const contentBlock = (
        <div className="flex-1 flex flex-col justify-between gap-3 xs:gap-4 p-1 xs:p-2 md:p-8">
            <div className="flex flex-col gap-3 xs:gap-4">
                <div className="flex items-center justify-between gap-2 xs:gap-3">
                    <h3 className="text-lg xs:text-xl sm:text-2xl md:text-[32px] font-medium font-cabinet leading-[1.2] text-[#161616]">
                        {title}
                    </h3>
                    <span className="px-1.5 py-0.5 xs:px-2 xs:py-1 rounded-lg bg-[#70712C]/[0.12] text-[#70712C] text-xs xs:text-sm font-urbanist leading-[1.5] whitespace-nowrap">
                        {tag}
                    </span>
                </div>
                <p className="text-sm xs:text-base md:text-lg font-urbanist font-normal leading-[1.5] text-[#5E5E5E]">
                    {description}
                </p>
            </div>

            <div className="p-3 xs:p-4 bg-[#FAF9F8] rounded-xl border-l-2 border-[#E7E1DD]">
                <p className="text-xs xs:text-sm md:text-base font-cabinet font-normal leading-[1.32] tracking-[0.04em] text-[#5E5E5E]">
                    {quote}
                </p>
            </div>
        </div>
    );

    return (
        <div
            className={`w-full flex flex-col md:flex-row gap-4 xs:gap-6 md:gap-8 p-3 xs:p-4 bg-[#F6F4F2] rounded-xl overflow-hidden ${imagePosition === "left" ? "" : "md:flex-row-reverse"
                }`}
        >
            {imageBlock}
            {contentBlock}
        </div>
    );
}