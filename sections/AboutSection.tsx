"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import { aboutContent } from "@/data/content";
import PortraitCycler from "@/components/ui/PortraitCycler";
import SocialLinks from "@/components/ui/SocialLinks";

export default function AboutSection() {
    return (
        <section id="about" className="relative w-full overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative z-10 w-full max-w-[1320px] mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12 px-4 sm:px-6 py-12 sm:py-16 lg:py-20"
            >
                {/* ── Left Column ── */}
                <div className="w-full lg:w-[646px] lg:flex-shrink-0 flex flex-col gap-6 sm:gap-8 lg:gap-10">
                    <div className="flex flex-col gap-3">
                        <Badge
                            icon={aboutContent.badge.icon}
                            label={aboutContent.badge.label}
                            variant="solid"
                        />
                        <div className="relative flex flex-col gap-4">
                            <div className="flex flex-col gap-4 pt-2">
                                <h2 className="font-cabinet font-bold text-[34px] sm:text-[38px] md:text-[44px] lg:text-[48px] xl:text-[56px] leading-[1.24] xl:leading-[69.44px] text-[#161616]">
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
                            <div className="flex flex-col gap-3 sm:gap-4">
                                <p className="text-[#5E5E5E] text-base lg:text-lg font-urbanist font-normal leading-[25.6px] lg:leading-[28.8px]">
                                    {aboutContent.body.p1Start}
                                    <span className="text-[#161616] font-semibold">{aboutContent.body.bold1}</span>
                                    {aboutContent.body.p1End}
                                </p>
                                <p className="text-[#5E5E5E] text-base lg:text-lg font-urbanist font-normal leading-[25.6px] lg:leading-[28.8px]">
                                    {aboutContent.body.p2}
                                </p>
                                <p className="text-[#5E5E5E] text-base lg:text-lg font-urbanist font-normal leading-[25.6px] lg:leading-[28.8px]">
                                    {aboutContent.body.p3Start}
                                    <span className="text-[#161616] font-semibold">{aboutContent.body.bold2}</span>
                                    {aboutContent.body.p3End}
                                </p>
                                <p className="text-[#5E5E5E] text-base lg:text-lg font-urbanist font-normal leading-[25.6px] lg:leading-[28.8px]">
                                    {aboutContent.body.p4Start}
                                    <span className="text-[#161616] font-semibold capitalize">{aboutContent.body.bold3}</span>
                                    {aboutContent.body.p4End}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Stat Cards */}
                    <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4">
                        {aboutContent.stats.map((stat) => (
                            <div
                                key={stat.value}
                                className="flex-1 p-3 sm:p-4 relative bg-[#FAF9F8] rounded-xl border border-[#E7E1DD] overflow-hidden flex flex-col gap-2 sm:gap-3"
                            >
                                <div className="flex flex-col gap-2 sm:gap-3 relative z-10">
                                    <span className="font-cabinet font-bold text-[48px] sm:text-[40px] leading-tight text-[#161616]">
                                        {stat.value}
                                    </span>
                                    <span className="text-[#5E5E5E] text-xs sm:text-sm font-urbanist font-medium leading-[1.3]">
                                        {stat.label}
                                    </span>
                                </div>
                                <div className="size-20 sm:size-24 left-[100px] sm:left-[130px] top-[-24px] sm:top-[-30px] absolute opacity-20 overflow-hidden pointer-events-none">
                                    <Image src={stat.icon} alt="" fill sizes="96px" className="object-contain" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Right Column — Portrait ── */}
                <div className="w-full lg:flex-1 flex items-center gap-4">
                    {/* Social links - only visible on desktop, left of portrait */}
                    <div className="hidden lg:block">
                        <SocialLinks />
                    </div>

                    <div className="w-full h-[320px] xs:h-[380px] sm:h-[450px] md:h-[550px] lg:h-[700px] relative rounded-xl border border-[#E7E1DD] overflow-hidden">
                        <PortraitCycler
                            src={aboutContent.portrait}
                            alt="Yasir Abed Rabbu — Product Designer"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}