import Image from "next/image";
import { TestimonialAvatarProps } from "@/types";

export default function TestimonialAvatar({ image, active }: TestimonialAvatarProps) {
    return (
        <div className="flex items-center gap-2 px-6 py-2">
            {active && (
                <div
                    className="w-5 h-5 bg-[#B82B2D]"
                    style={{
                        clipPath: "polygon(0 0, 100% 50%, 0 100%)",
                    }}
                />
            )}
            <div
                className={`relative w-20 h-20 rounded-full overflow-hidden ${active ? "outline outline-4 outline-[#B82B2D] outline-offset-[-2px]" : ""
                    }`}
            >
                <Image src={image} alt="" fill className="object-cover" />
            </div>
        </div>
    );
}