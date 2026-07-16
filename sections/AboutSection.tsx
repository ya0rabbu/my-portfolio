"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Badge from "@/components/ui/Badge";
import { aboutContent } from "@/data/content";
import SocialLinks from "@/components/ui/SocialLinks";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
    const portraitRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = portraitRef.current;
        if (!el) return;
        const tween = gsap.to(el, { y: -10, duration: 3, ease: "sine.inOut", yoyo: true, repeat: -1 });
        return () => { tween.kill(); };
    }, []);

    return (
        <section
            id="about"
            className="relative w-full bg-[#F6F4F2] overflow-hidden"
            style={{ borderTopLeftRadius: "99px", borderTopRightRadius: "99px" }}
        >
            <div className="w-full px-5 py-10 sm:px-8 sm:py-12 md:px-12 md:py-16 lg:px-[60px] lg:py-[60px] xl:px-[120px] xl:py-[80px] 2xl:px-[200px] 2xl:py-[96px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex flex-col gap-8 lg:gap-[57.6px]"
                >
                    {/* ── Top: Badge + Heading + Subtext ── */}
                    <div className="flex flex-col gap-3 relative">
                        <Badge icon={aboutContent.badge.icon} label={aboutContent.badge.label} variant="solid" />

                        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-8">
                            <h2
                                className="font-cabinet font-bold capitalize leading-[1.24]
    text-[28px] sm:text-[36px] lg:text-[44px] xl:text-[56px] xl:leading-[64px]
    max-w-full lg:max-w-[732px]"
                            >
                                {/* Line 1 */}
                                <span className="text-[#161616]">{aboutContent.heading.line1Start}</span>
                                <span className="text-[rgba(22,22,22,0.40)]">{aboutContent.heading.highlight1}</span>



                                {/* Line 2 */}
                                <span className="text-[#161616]">{aboutContent.heading.line1Mid}</span>
                                <span className="relative inline-block bg-[#70712C]/[0.12] text-[#70712C] px-2 mx-1">
                                    <span className="absolute -left-[2px] top-0 bottom-0 w-[2px] bg-[#70712C]">
                                        <span className="absolute -top-[8px] -left-[6px] w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#70712C]" />
                                    </span>
                                    <span className="text-[#70712C]">{aboutContent.heading.highlight2}</span>
                                    <span className="absolute -right-[2px] top-0 bottom-0 w-[2px] bg-[#70712C]">
                                        <span className="absolute -bottom-[8px] -right-[6px] w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#70712C]" />
                                    </span>
                                </span>
                            </h2>
                            <p className="font-urbanist font-normal text-[#5E5E5E] text-sm sm:text-base xl:text-[20px] xl:leading-[32px] max-w-full lg:max-w-[514px] lg:text-right">
                                {aboutContent.subtext}
                            </p>
                        </div>

                        {/* Union highlight accent */}
                        <div
                            className="absolute pointer-events-none -z-10 hidden lg:block"
                            style={{ width: "293px", height: "68px", left: "438px", top: "131px", background: "rgba(112, 113, 44, 0.12)" }}
                        />
                    </div>

                    {/* ── Bottom: Portrait left + Content right ── */}
                    <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 xl:gap-[48px]">

                        {/* Left — Portrait + name card */}
                        <div className="w-full lg:w-auto flex flex-col gap-4 flex-shrink-0">
                            <div
                                ref={portraitRef}
                                className="relative w-full lg:w-[536px] h-[400px] sm:h-[500px] lg:h-[636px] overflow-hidden rounded-[16px] outline outline-[1.2px] outline-[#E7E1DD] -outline-offset-[1.2px]"
                            >
                                <Image
                                    src={aboutContent.portrait}
                                    alt="Yasir Abed Rabbu — Product Designer"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 536px"
                                    className="object-cover object-center"
                                />
                                {/* Social links — right bottom, inside image */}
                                <div className="absolute bottom-5 right-5 z-10">
                                    <SocialLinks />
                                </div>
                            </div>

                            {/* Name card */}
                            <div className="w-full lg:w-[536px] px-4 py-4 bg-[#FAF9F8] rounded-[14.4px] outline outline-[1.2px] outline-[#E7E1DD] -outline-offset-[1.2px] flex items-center justify-between">
                                <div className="flex items-center gap-[6px]">
                                    <div className="w-3 h-3 rounded-full bg-[#34C759]" />
                                    <span className="font-cabinet font-bold text-[#161616]" style={{ fontSize: "24px", lineHeight: "24px" }}>
                                        Yasir Abed Rabbu
                                    </span>
                                </div>
                                <span className="font-urbanist font-medium text-[#5E5E5E]" style={{ fontSize: "16px", lineHeight: "19.84px" }}>
                                    Product Designer
                                </span>
                            </div>
                        </div>

                        {/* Right — body paragraphs + signature */}
                        <div className="w-full lg:flex-1 flex flex-col justify-between items-end gap-12 lg:gap-0 lg:h-[636px]">

                            {/* 3 paragraphs */}
                            <div className="w-full flex flex-col gap-8 lg:gap-10">
                                <div className="flex flex-col gap-[6px]">
                                    <p className="font-urbanist font-semibold text-[#161616] w-full" style={{ fontSize: "clamp(18px, 2vw, 32px)", lineHeight: "1.6" }}>
                                        {aboutContent.body.heading1}
                                    </p>
                                    <p className="font-urbanist font-normal text-[#5E5E5E] w-full" style={{ fontSize: "clamp(14px, 1.5vw, 24px)", lineHeight: "1.6" }}>
                                        {aboutContent.body.p1}
                                    </p>
                                </div>

                                <div className="flex flex-col gap-[6px]">
                                    <p className="font-urbanist font-semibold text-[#161616] w-full" style={{ fontSize: "clamp(18px, 2vw, 32px)", lineHeight: "1.6" }}>
                                        {aboutContent.body.heading2}
                                    </p>
                                    <p className="font-urbanist font-normal text-[#5E5E5E] w-full" style={{ fontSize: "clamp(14px, 1.5vw, 24px)", lineHeight: "1.6" }}>
                                        {aboutContent.body.p2}
                                    </p>
                                </div>

                                <div className="flex flex-col gap-[6px]">
                                    <p className="font-urbanist font-semibold text-[#161616] w-full" style={{ fontSize: "clamp(18px, 2vw, 32px)", lineHeight: "1.6" }}>
                                        {aboutContent.body.heading3}
                                    </p>
                                    <p className="font-urbanist font-normal text-[#5E5E5E] w-full" style={{ fontSize: "clamp(14px, 1.5vw, 24px)", lineHeight: "1.6" }}>
                                        {aboutContent.body.p3}
                                    </p>
                                </div>
                            </div>

                            {/* Signature */}
                            {aboutContent.signature?.image && (
                                <Image
                                    src={aboutContent.signature.image}
                                    alt="Yasir Abed Rabbu signature"
                                    width={131}
                                    height={120}
                                    className="object-contain flex-shrink-0"
                                />
                            )}
                        </div>
                    </div>

                    {/* Social Links — mobile only */}
                    <div className="flex lg:hidden justify-center w-full">
                        <SocialLinks />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}