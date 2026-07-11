"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import TestimonialAvatar from "@/components/ui/TestimonialAvatar";
import { testimonialsContent } from "@/data/content";

// Testimonials section: client feedback with quote card and avatar list
export default function TestimonialsSection() {
    return (
        <section className="relative w-full overflow-hidden px-5">
            {/* Background image - grass/nature theme, bleeds slightly above top edge */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[#F6F4F2]" />
                <Image
                    src="/assets/images/testimonials-bg-landscape.png"
                    alt=""
                    fill
                    className="object-cover"
                    style={{ objectPosition: "top" }}
                />
            </div>

            <div className="relative w-full max-w-[1600px] mx-auto py-20 md:py-32 px-6 md:px-[140px] flex flex-col items-center gap-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full flex flex-col items-center gap-3"
                >
                    <Badge icon={testimonialsContent.badge.icon} label={testimonialsContent.badge.label} variant="solid" />

                    <div className="flex flex-col items-center gap-4">
                        <h2 className="w-full max-w-[530px] text-center text-[32px] md:text-[44px] lg:text-[56px] font-bold font-cabinet leading-[1.24] lg:leading-[69px] text-[#161616]">
                            {testimonialsContent.heading.part1}
                            <span className="text-[#161616]/40">{testimonialsContent.heading.highlight1}</span>
                            {testimonialsContent.heading.part2}
                            <span className="relative inline-block bg-[#70712C]/[0.12] text-[#70712C] px-2 mx-1">
                                <span className="absolute -left-[2px] top-0 bottom-0 w-[2px] bg-[#70712C]">
                                    <span className="absolute -top-[6px] -left-[5px] w-2.5 h-2.5 rounded-full bg-[#70712C]" />

                                </span>
                                {testimonialsContent.heading.highlight2}
                                <span className="absolute -right-[2px] top-0 bottom-0 w-[2px] bg-[#70712C]">

                                    <span className="absolute -bottom-[6px] -right-[5px] w-2.5 h-2.5 rounded-full bg-[#70712C]" />
                                </span>
                            </span>
                            {testimonialsContent.heading.part3}
                        </h2>

                        <p className="max-w-[768px] text-center text-[#5E5E5E] text-base md:text-lg font-urbanist leading-7 md:leading-[28.8px]">
                            {testimonialsContent.subtext}
                        </p>
                    </div>
                </motion.div>

                {/* Quote card — transparent bg, faint screen-blend layer only, no blur */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="relative w-full max-w-[1320px] rounded-xl overflow-hidden border border-[#E7E1DD]"
                >
                    {/* Glass Effect layer — faint white screen-blend, matches Figma exactly */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: "rgba(255, 255, 255, 0.07)",
                            mixBlendMode: "screen",
                            boxShadow: "0px 8px 40px rgba(0, 0, 0, 0.2)",
                        }}
                    />

                    <div className="relative z-10 p-8 md:p-[33px] flex flex-col md:flex-row items-center justify-between gap-8">
                        {/* Quote text */}
                        <div className="w-full md:max-w-[700px] flex flex-col items-start gap-8">
                            <p className="text-left">
                                <span className="text-[#CD3234] text-[60px] md:text-[100px] font-bold font-cabinet leading-[100px] md:leading-[160px]">
                                    &ldquo;
                                </span>
                                <span className="text-[#161616] text-2xl md:text-[36px] font-bold font-cabinet leading-snug md:leading-[57.6px]">
                                    {testimonialsContent.quote.text}
                                </span>
                                <span className="text-[#70712C] text-2xl md:text-[36px] font-bold font-cabinet leading-snug md:leading-[57.6px]">
                                    {testimonialsContent.quote.highlight}
                                </span>
                                <span className="text-[#161616] text-2xl md:text-[36px] font-bold font-cabinet leading-snug md:leading-[57.6px]">
                                    {testimonialsContent.quote.rest}
                                </span>
                            </p>
                            <p className="text-[#70712C] text-xl md:text-2xl font-medium font-cabinet tracking-wider">
                                {testimonialsContent.author}
                            </p>
                        </div>
                        {/* Avatar list */}
                        <div className="flex flex-row md:flex-col items-end gap-3">
                            {testimonialsContent.avatars.map((avatar, i) => (
                                <TestimonialAvatar key={i} {...avatar} />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}