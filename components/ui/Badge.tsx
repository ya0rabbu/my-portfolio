import Image from "next/image";
import { BadgeProps } from "@/types";

export default function Badge({ icon, label, variant = "glass" }: BadgeProps) {
    if (variant === "solid") {
        // About section — clean white card style
        return (
            <div className="px-4 py-2 rounded-lg inline-flex items-center gap-2 w-fit bg-white border border-[#E7E1DD]">
                <Image src={icon} alt="" width={20} height={20} className="flex-shrink-0" />
                <span className="text-[#5E5E5E] text-base font-medium font-urbanist leading-5 whitespace-nowrap">
                    {label}
                </span>
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
            <Image src={icon} alt="" width={20} height={20} className="flex-shrink-0" />
            <span className="text-[#5E5E5E] text-base font-medium font-urbanist leading-5 whitespace-nowrap">
                {label}
            </span>
        </div>
    );
}