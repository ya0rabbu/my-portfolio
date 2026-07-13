"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { heroContent } from "@/data/content";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <Image
        src="/assets/images/hero-bg-landscape.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover -z-10"
      />

      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative z-10 w-full max-w-[1150px] mx-auto flex flex-col items-center gap-6 xs:gap-8 sm:gap-10 md:gap-14 px-4 sm:px-6 pt-[90px] xs:pt-[100px] sm:pt-[110px] md:pt-[100px] pb-[50px] xs:pb-[60px] sm:pb-[80px] md:pb-[200px] lg:pb-[327px] text-center"
      >
        <div className="flex flex-col items-center gap-4 sm:gap-5">
          <Badge icon={heroContent.badge.icon} label={heroContent.badge.label} />

          <h1 className="font-cabinet font-bold text-[28px] xs:text-[34px] sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[64px] leading-[1.2] xl:leading-[79.36px] text-[#161616]">
            {heroContent.heading.line1Start}
            <span className="text-[#161616]/40">
              {heroContent.heading.highlight1}
            </span>
            {heroContent.heading.line1End}

            <span className="relative inline-block bg-[#70712C]/[0.12] text-[#70712C] px-2 mx-1">
              <span className="absolute -left-[2px] top-0 bottom-0 w-[2px] bg-[#70712C]">
                <span className="absolute -top-[8px] -left-[6px] w-3.5 h-3.5 rounded-full bg-[#70712C]" />
              </span>

              {heroContent.heading.highlight2}

              <span className="absolute -right-[2px] top-0 bottom-0 w-[2px] bg-[#70712C]">
                <span className="absolute -bottom-[8px] -right-[6px] w-3.5 h-3.5 rounded-full bg-[#70712C]" />
              </span>
            </span>
          </h1>

          <p className="max-w-[1050px] text-[#5E5E5E] text-[14px] xs:text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-urbanist justify-center leading-[1.5] xl:leading-[29.25px] text-[#5E5E5E]">
            {heroContent.subtext}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full xs:w-auto">
          <Button label={heroContent.ctaPrimary} variant="primary" />
          <Button label={heroContent.ctaSecondary} variant="glass" />
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 md:h-24 bg-gradient-to-b from-transparent via-[#F6F4F2]/20 to-[#F6F4F2] z-10 pointer-events-none" />
    </section>
  );
}