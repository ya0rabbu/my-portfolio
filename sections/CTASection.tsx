"use client";
import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { ctaContent } from "@/data/content";
import Image from "next/image";
import { label } from "framer-motion/client";

export default function CTASection() {
    return (
        <div className="w-full px-3 sm:px-5 pt-6 sm:pt-8 pb-6 sm:pb-8">
            <section
                id="contact"
                className="relative w-full border border-[#E7E1DD] px-4 sm:px-6 md:px-16 lg:px-24 xl:px-[180px] pt-14 sm:pt-20 pb-24 sm:pb-32 md:pb-[140px] rounded-[16px] sm:rounded-[20px] max-w-[1880px] mx-auto overflow-hidden"
            >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/images/cta-bg.png"
                        alt=""
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative z-10 w-full flex flex-col items-center gap-8 sm:gap-10 md:gap-12"
                >
                    <div className="w-full flex flex-col items-center gap-3 text-center">
                        <Badge icon={ctaContent.badge.icon} label={ctaContent.badge.label} variant="solid" />

                        <div className="flex flex-col items-center gap-3 sm:gap-4">
                            <h2 className="w-full max-w-[784px] text-[28px] xs:text-[34px] sm:text-[42px] md:text-[52px] lg:text-[64px] font-bold font-cabinet leading-[1.14] lg:leading-[72.96px] text-[#161616]">
                                {ctaContent.heading.part1}
                                <span className="text-[#161616]/40">{ctaContent.heading.highlight1}</span>
                                {ctaContent.heading.part2}
                                <span className="text-[#70712C]">{ctaContent.heading.highlight2}</span>
                            </h2>

                            <p className="max-w-[812px] text-[#5E5E5E] text-sm sm:text-base md:text-xl font-urbanist font-normal leading-6 sm:leading-7 md:leading-8 text-center">
                                {ctaContent.subtext}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full xs:w-auto">
                        <Button label={ctaContent.ctaPrimary} variant="primary" href="#contact-form" />
                        <div className="cta-section">

                            <Button label={ctaContent.ctaSecondary} variant="glass" href="#contact-form" />

                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}