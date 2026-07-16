"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Navbar from "@/components/layout/Navbar";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { heroContent } from "@/data/content";

export default function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);

  // GSAP — subtle parallax on bg image on mouse move
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const xPct = (e.clientX / window.innerWidth - 0.5) * 12;
      const yPct = (e.clientY / window.innerHeight - 0.5) * 8;
      gsap.to(bgRef.current, {
        x: xPct,
        y: yPct,
        duration: 1.2,
        ease: "power2.out",
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <div ref={bgRef} className="absolute inset-[-20px] -z-10">
        <Image
          src="/assets/images/hero-bg-landscape.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="relative z-10 w-full mx-auto flex flex-col items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14
          px-5 sm:px-8 md:px-10 lg:px-[60px] xl:px-[80px] 2xl:px-[140px]
          pt-[90px] sm:pt-[110px] md:pt-[120px]
          pb-[60px] sm:pb-[100px] md:pb-[160px] lg:pb-[240px] xl:pb-[300px] 2xl:pb-[327px]
          text-center"
      >
        <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-5">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Badge icon={heroContent.badge.icon} label={heroContent.badge.label} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-cabinet font-bold leading-[1.2] text-[#161616]
              text-[36px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] 2xl:text-[68px]
              max-w-[335px] sm:max-w-[560px] md:max-w-[720px] lg:max-w-[900px] xl:max-w-[1050px] 2xl:max-w-[1150px]"
          >
            {heroContent.heading.line1Start}
            <span className="text-[#161616]/40">{heroContent.heading.highlight1}</span>
            {heroContent.heading.line1End}
            <span className="relative inline-block bg-[#70712C]/[0.12] text-[#70712C] px-2 mx-1">
              <span className="absolute -left-[2px] top-0 bottom-0 w-[2px] bg-[#70712C]">
                <span className="absolute -top-[8px] -left-[6px] w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#70712C]" />
              </span>
              {heroContent.heading.highlight2}
              <span className="absolute -right-[2px] top-0 bottom-0 w-[2px] bg-[#70712C]">
                <span className="absolute -bottom-[8px] -right-[6px] w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#70712C]" />
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[#5E5E5E] font-urbanist leading-[1.5]
              text-[16px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px]
              max-w-[335px] sm:max-w-[500px] md:max-w-[660px] lg:max-w-[800px] xl:max-w-[940px] 2xl:max-w-[1050px]"
          >
            {heroContent.subtext}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto"
        >
          <Button label={heroContent.ctaPrimary} variant="primary" />
          <Button label={heroContent.ctaSecondary} variant="glass" textColor="#5E5E5E" />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 md:h-24 bg-gradient-to-b from-transparent via-[#F6F4F2]/20 to-[#F6F4F2] z-10 pointer-events-none" />
    </section>
  );
}