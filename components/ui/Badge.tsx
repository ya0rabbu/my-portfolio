import Image from "next/image";
import { BadgeProps } from "@/types";

export default function Badge({ icon, label, variant = "glass" }: BadgeProps) {
    const iconClassName = "relative flex-shrink-0 w-[18px] h-[18px]";
    // Figma spec: font-size 16px, font-weight 500, line-height 19.84px, letter-spacing 0.64px
    // padding: 16px left/right, 8px top/bottom (fixed, not responsive)
    const labelClassName =
        "text-[#5E5E5E] text-[14px] sm:text-[14px] md:text-[14px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] font-medium font-urbanist leading-[19.84px] tracking-[0.64px] whitespace-nowrap";

    if (variant === "solid") {
        // About / general sections — clean white card style
        return (
            <div className="px-4 py-2 rounded-lg inline-flex items-center gap-2 w-fit bg-white border border-[#E7E1DD]">
                <span className={iconClassName}>
                    <Image src={icon} alt=" icon" sizes="20px" fill className="object-contain" />
                </span>
                <span className={labelClassName}>{label}</span>
            </div>
        );
    }

    // Glass — Hero section
    return (
        <div
            className="px-4 py-2 rounded-lg inline-flex justify-start items-center gap-2"
            style={{
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                background: "rgba(255, 255, 255, 0.12)",
                border: "1px solid rgba(255, 255, 255, 0.30)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25), 0 1px 3px rgba(0,0,0,0.08)",
            }}
        >
            <span className={iconClassName}>
                <Image src={icon} alt="" fill sizes="20px" className="object-contain" />
            </span>
            <span className={labelClassName}>{label}</span>
        </div>
    );
}