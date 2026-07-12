"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import { aboutContent } from "@/data/content";

export default function AboutSection() {
    return (
        <section id="about" className="relative w-full overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative z-10 w-full max-w-[1320px] mx-auto flex items-center gap-12 px-4 py-20"
            >
                {/* ── Left Column ── */}
                <div className="w-[646px] flex-shrink-0 flex flex-col gap-10">
                    <div className="flex flex-col gap-3">
                        <Badge
                            icon={aboutContent.badge.icon}
                            label={aboutContent.badge.label}
                            variant="solid"
                        />
                        <div className="relative flex flex-col gap-4">
                            <div className="flex flex-col gap-4 pt-2">
                                <h2 className="font-cabinet font-bold text-[56px] leading-[69.44px] text-[#161616]">
                                    {aboutContent.heading.line1Start}
                                    <span className="text-[#161616]/40">
                                        {aboutContent.heading.highlight1}
                                    </span>
                                    {aboutContent.heading.line1Mid}
                                    <span className="relative inline-block bg-[#70712C]/[0.12] text-[#70712C] px-2 mx-1">
                                        <span className="absolute -left-[2px] top-0 bottom-0 w-[2px] bg-[#70712C]">
                                            <span className="absolute -top-[7px] -left-[5px] w-3 h-3 rounded-full bg-[#70712C]" />
                                        </span>
                                        {aboutContent.heading.highlight2}
                                        <span className="absolute -right-[2px] top-0 bottom-0 w-[2px] bg-[#70712C]">
                                            <span className="absolute -bottom-[7px] -right-[5px] w-3 h-3 rounded-full bg-[#70712C]" />
                                        </span>
                                    </span>
                                    {aboutContent.heading.line1End}
                                </h2>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="text-[#5E5E5E] text-lg font-urbanist font-normal leading-[28.8px]">
                                    {aboutContent.body.p1Start}
                                    <span className="text-[#161616] font-semibold">{aboutContent.body.bold1}</span>
                                    {aboutContent.body.p1End}
                                </p>
                                <p className="text-[#5E5E5E] text-lg font-urbanist font-normal leading-[28.8px]">
                                    {aboutContent.body.p2}
                                </p>
                                <p className="text-[#5E5E5E] text-lg font-urbanist font-normal leading-[28.8px]">
                                    {aboutContent.body.p3Start}
                                    <span className="text-[#161616] font-semibold">{aboutContent.body.bold2}</span>
                                    {aboutContent.body.p3End}
                                </p>
                                <p className="text-[#5E5E5E] text-lg font-urbanist font-normal leading-[28.8px]">
                                    {aboutContent.body.p4Start}
                                    <span className="text-[#161616] font-semibold capitalize">{aboutContent.body.bold3}</span>
                                    {aboutContent.body.p4End}
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Stat Cards */}
                    <div className="flex items-center gap-4">
                        {aboutContent.stats.map((stat) => (
                            <div
                                key={stat.value}
                                className="flex-1 p-4 relative bg-[#FAF9F8] rounded-xl border border-[#E7E1DD] overflow-hidden flex flex-col gap-3"
                            >
                                <div className="flex flex-col gap-3 relative z-10">
                                    <span className="font-cabinet font-bold text-[40px] leading-[40px] text-[#161616]">
                                        {stat.value}
                                    </span>
                                    <span className="text-[#5E5E5E] text-sm font-urbanist font-medium leading-[17.36px]">
                                        {stat.label}
                                    </span>
                                </div>
                                <div className="size-24 left-[130px] top-[-30px] absolute opacity-20 overflow-hidden pointer-events-none">
                                    <Image src={stat.icon} alt="" fill sizes="96px" className="object-contain" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Right Column — Portrait ── */}
                <motion.div
                    animate={{ y: [0, -14, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="flex-1 h-[700px] relative rounded-xl border border-[#E7E1DD] overflow-hidden"
                >
                    <Image
                        src={aboutContent.portrait}
                        alt="Yasir Abed Rabbu — Product Designer"
                        style={{ imageRendering: "pixelated" }}
                        fill
                        sizes="(max-width: 768px) 100vw, 674px"
                        className="object-cover object-top"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}