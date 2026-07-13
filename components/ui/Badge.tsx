import Image from "next/image";
import { BadgeProps } from "@/types";

export default function Badge({ icon, label, variant = "glass" }: BadgeProps) {
    const iconClassName = "relative flex-shrink-0 w-[14px] h-[14px] md:w-4 md:h-4 lg:w-[18px] lg:h-[18px]";

    if (variant === "solid") {
        // About section — clean white card style
        return (
            <div className="px-3 py-1.5 xs:px-4 xs:py-2 rounded-lg inline-flex items-center gap-1.5 xs:gap-2 w-fit bg-white border border-[#E7E1DD]">
                <span className={iconClassName}>
                    <Image src={icon} alt="" fill sizes="(min-width: 1024px) 18px, (min-width: 768px) 16px, 14px" className="object-contain" />
                </span>
                <span className="text-[#5E5E5E] text-xs md:text-sm lg:text-base font-medium font-urbanist leading-5 whitespace-nowrap">
                    {label}
                </span>
            </div>
        );
    }

    // Glass — Hero section
    return (
        <div
            className="px-3 py-1.5 xs:px-4 xs:py-2 rounded-lg inline-flex justify-start items-center gap-1.5 xs:gap-2"
            style={{
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                background: "rgba(255, 255, 255, 0.12)",
                border: "1px solid rgba(255, 255, 255, 0.30)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25), 0 1px 3px rgba(0,0,0,0.08)",
            }}
        >
            <span className={iconClassName}>
                <Image src={icon} alt="" fill sizes="(min-width: 1024px) 18px, (min-width: 768px) 16px, 14px" className="object-contain" />
            </span>
            <span className="text-[#5E5E5E] text-xs md:text-sm lg:text-base font-medium font-urbanist leading-5 whitespace-nowrap">
                {label}
            </span>
        </div>
    );
}
