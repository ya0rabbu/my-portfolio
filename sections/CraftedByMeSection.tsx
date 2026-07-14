"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import { craftedByMeContent } from "@/data/content";

export default function CraftedByMeSection() {
    return (
        <div className="w-full px-3 sm:px-5 pt-6 sm:pt-8">
            <section
                id="crafted-by-me"
                className="relative w-full border border-[#E7E1DD] px-4 sm:px-6 md:px-16 lg:px-24 xl:px-[180px] py-10 sm:py-16 md:py-24 rounded-[16px] sm:rounded-[20px] max-w-[1880px] mx-auto overflow-hidden"
            >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/images/craftedbyme-bg.png"
                        alt=""
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative z-10 w-full flex flex-col items-center gap-8 sm:gap-10 md:gap-12"
                >
                    <div className="w-full flex flex-col items-center gap-3 sm:gap-4 text-center">
                        <Badge icon={craftedByMeContent.badge.icon} label={craftedByMeContent.badge.label} variant="solid" />

                        <div className="flex flex-col items-center gap-3 sm:gap-4">
                            <h2 className="w-full max-w-[476px] text-[34px] sm:text-[38px] md:text-[44px] lg:text-[56px] font-bold font-cabinet leading-[1.24] lg:leading-[69.44px] text-[#161616]">
                                {craftedByMeContent.heading.part1}
                                <span className="text-[#161616]/40">{craftedByMeContent.heading.highlight1}</span>
                                {craftedByMeContent.heading.part2}
                                <span className="relative inline-block bg-[#70712C]/[0.12] text-[#70712C] px-2 mx-1">
                                    <span className="absolute -left-[2px] top-0 bottom-0 w-[2px] bg-[#70712C]">
                                        <span className="absolute -top-[7px] -left-[5px] w-3 h-3 rounded-full bg-[#70712C]" />
                                    </span>
                                    {craftedByMeContent.heading.highlight2}
                                    <span className="absolute -right-[2px] top-0 bottom-0 w-[2px] bg-[#70712C]">
                                        <span className="absolute -bottom-[7px] -right-[5px] w-3 h-3 rounded-full bg-[#70712C]" />
                                    </span>
                                </span>
                                {craftedByMeContent.heading.part3}
                            </h2>

                            <p className="max-w-[514px] text-[#5E5E5E] text-sm sm:text-base md:text-xl font-urbanist font-normal leading-6 sm:leading-7 md:leading-8 text-center">
                                {craftedByMeContent.subtext}
                            </p>
                        </div>
                    </div>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 sm:gap-px bg-[#E7E1DD] border border-[#E7E1DD] rounded-xl overflow-hidden">
                        {craftedByMeContent.items.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
                                className="w-full px-5 py-6 sm:px-6 sm:py-8 bg-[#FAF9F8] flex flex-col items-start gap-5 sm:gap-6"
                            >
                                <div className="p-3 bg-white rounded-[9.6px] flex items-center justify-center overflow-hidden">
                                    <span className="relative w-6 h-6 flex-shrink-0">
                                        <Image src={item.icon} alt="" fill sizes="24px" className="object-contain" />
                                    </span>
                                </div>
                                <div className="flex flex-col items-start gap-3 sm:gap-4">
                                    <h3 className="text-[#161616] text-lg sm:text-xl font-medium font-cabinet leading-6">
                                        {item.title}
                                    </h3>
                                    <p className="text-[#5E5E5E] text-sm sm:text-base md:text-lg font-urbanist font-normal leading-[1.5] tracking-[0.03em]">
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
