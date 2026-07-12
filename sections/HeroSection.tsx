"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { heroContent } from "@/data/content";

// Hero section: intro headline, value proposition, and primary CTAs
export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* Full-bleed background landscape image */}
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
        className="relative z-10 w-full max-w-[1150px] mx-auto flex flex-col items-center gap-14 px-4 pt-[120px] md:pt-[100px] pb-[80px] md:pb-[327px] text-center"
      >
        <div className="flex flex-col items-center gap-5">
          <Badge icon={heroContent.badge.icon} label={heroContent.badge.label} />

          <h1 className="font-cabinet font-bold text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-[1.24] lg:leading-[79.36px] text-[#161616]">
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

          <p className="max-w-[1050px] text-[#5E5E5E] text-base md:text-xl font-urbanist leading-8">
            {heroContent.subtext}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button label={heroContent.ctaPrimary} variant="primary" />
          <Button label={heroContent.ctaSecondary} variant="glass" />
        </div>
      </motion.div>

      {/* Smooth fade transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-gradient-to-b from-transparent via-[#F6F4F2]/20 to-[#F6F4F2] z-10 pointer-events-none" /></section>

  );
}