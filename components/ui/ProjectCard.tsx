import Image from "next/image";

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
        <div className="relative w-full md:w-[636px] h-[300px] md:h-[424px] rounded-lg overflow-hidden bg-[#F6F4F2] shrink-0">
            <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 636px"
                className="object-cover"
            />
        </div>
    );

    const contentBlock = (
        <div className="flex-1 flex flex-col justify-between gap-4 p-2 md:p-8">
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between gap-3">
                    <h3 className="text-2xl md:text-[32px] font-medium font-cabinet leading-[1.2] text-[#161616]">
                        {title}
                    </h3>
                    <span className="px-2 py-1 rounded-lg bg-[#70712C]/[0.12] text-[#70712C] text-sm font-urbanist leading-[1.5] whitespace-nowrap">
                        {tag}
                    </span>
                </div>
                <p className="text-base md:text-lg font-urbanist font-normal leading-[1.5] text-[#5E5E5E]">
                    {description}
                </p>
            </div>

            <div className="p-4 bg-[#FAF9F8] rounded-xl border-l-2 border-[#E7E1DD]">
                <p className="text-sm md:text-base font-cabinet font-normal leading-[1.32] tracking-[0.04em] text-[#5E5E5E]">
                    {quote}
                </p>
            </div>
        </div>
    );

    return (
        <div
            className={`w-full flex flex-col md:flex-row gap-6 md:gap-8 p-4 bg-[#F6F4F2] rounded-xl overflow-hidden ${imagePosition === "left" ? "" : "md:flex-row-reverse"
                }`}
        >
            {imageBlock}
            {contentBlock}
        </div>
    );
}