"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Badge from "@/components/ui/Badge";
import { craftedByMeContent } from "@/data/content";

export default function CraftedByMeSection() {
    const sectionRef = useRef<HTMLElement>(null);

    // GSAP — cards stagger on hover via JS (micro interaction)
    const handleCardEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        gsap.to(e.currentTarget, { y: -4, duration: 0.3, ease: "power2.out" });
    };
    const handleCardLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        gsap.to(e.currentTarget, { y: 0, duration: 0.4, ease: "power2.out" });
    };

    return (
        <div className="w-full px-3 sm:px-5 pt-6 sm:pt-8">
            <section
                ref={sectionRef}
                id="crafted-by-me"
                className="relative w-full border border-[#E7E1DD]
                    px-4 sm:px-6 md:px-16 lg:px-24 xl:px-[180px]
                    py-10 sm:py-16 md:py-[96px]
                    rounded-[16px] sm:rounded-[20px]
                    max-w-[1880px] mx-auto overflow-hidden"
            >
                <div className="absolute inset-0 z-0">
                    <Image src="/assets/images/craftedbyme-bg.png" alt="" fill className="object-cover object-center" priority />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative z-10 w-full flex flex-col items-center gap-10 sm:gap-12 md:gap-[48px]"
                >
                    {/* Header */}
                    <div className="w-full flex flex-col items-center gap-3 sm:gap-[12px] text-center">
                        <Badge icon={craftedByMeContent.badge.icon} label={craftedByMeContent.badge.label} variant="solid" />
                        <div className="relative w-full flex flex-col items-center gap-4">
                            <h2 className="w-full max-w-[476px] text-[34px] sm:text-[44px] lg:text-[56px] font-bold font-cabinet leading-[1.24] lg:leading-[69.44px] text-center">
                                <span className="text-[#161616]">{craftedByMeContent.heading.part1}</span>
                                <span className="text-[rgba(22,22,22,0.40)]">{craftedByMeContent.heading.highlight1}</span>
                                <span className="text-[#161616]">{craftedByMeContent.heading.part2}</span>
                                <span className="relative inline-block bg-[#70712C]/[0.12] text-[#70712C] px-2 mx-1">
                                    <span className="absolute -left-[2px] top-0 bottom-0 w-[2px] bg-[#70712C]">
                                        <span className="absolute -top-[7px] -left-[5px] w-3 h-3 rounded-full bg-[#70712C]" />
                                    </span>
                                    {craftedByMeContent.heading.highlight2}
                                    <span className="absolute -right-[2px] top-0 bottom-0 w-[2px] bg-[#70712C]">
                                        <span className="absolute -bottom-[7px] -right-[5px] w-3 h-3 rounded-full bg-[#70712C]" />
                                    </span>
                                </span>
                                <span className="text-[#161616]">{craftedByMeContent.heading.part3}</span>
                            </h2>
                            <p className="font-urbanist font-normal text-[#5E5E5E] text-center text-base md:text-[20px] leading-[1.6] md:leading-[32px]" style={{ maxWidth: "514px" }}>
                                {craftedByMeContent.subtext}
                            </p>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {craftedByMeContent.items.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ duration: 0.45, delay: i * 0.07, ease: "easeOut" }}
                                onMouseEnter={handleCardEnter}
                                onMouseLeave={handleCardLeave}
                                className="bg-[#FAF9F8] rounded-[9.6px] border border-[#E7E1DD] flex flex-col items-start gap-6 cursor-default"
                                style={{ padding: "24px 20px" }}
                            >
                                <div className="bg-white flex items-center justify-center flex-shrink-0" style={{ padding: "12px", borderRadius: "9.6px" }}>
                                    <span className="relative w-6 h-6 flex-shrink-0">
                                        <Image src={item.icon} alt="" fill sizes="24px" className="object-contain" />
                                    </span>
                                </div>
                                <div className="flex flex-col items-start gap-4 w-full">
                                    <h3 className="font-cabinet font-medium text-[#161616] w-full" style={{ fontSize: "20px", lineHeight: "24px" }}>
                                        {item.title}
                                    </h3>
                                    <p className="font-urbanist font-normal text-[#5E5E5E] w-full" style={{ fontSize: "18px", lineHeight: "27px", letterSpacing: "0.54px" }}>
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>
        </div>
    );
}