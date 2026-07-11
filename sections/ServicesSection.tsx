"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import ServiceCard from "@/components/ui/ServiceCard";
import { servicesContent } from "@/data/content";

// Services section: "What I Bring" — full stack design capabilities grid
export default function ServicesSection() {
    return (
        <div className="w-full px-5">
            <section className="w-full bg-[#F8FAFB] border border-[#E7E1DD] px-6 md:px-[150px] py-16 md:py-24 rounded-[20px] max-w-[1880px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full flex flex-col items-center gap-10 md:gap-12"
                >
                    {/* Header */}
                    <div className="w-full flex flex-col items-center gap-4 text-center">
                        <Badge icon={servicesContent.badge.icon} label={servicesContent.badge.label} variant="solid" />

                        <h2 className="text-[32px] md:text-[44px] lg:text-[56px] font-bold font-cabinet leading-[1.24] lg:leading-[69px] text-[#161616] max-w-[710px]">
                            {servicesContent.heading.part1}
                            <span className="text-[#161616]/40">{servicesContent.heading.highlight1}</span>
                            {servicesContent.heading.part2}
                            <span className="relative inline-block bg-[#70712C]/[0.12] text-[#70712C] px-2 mx-1">
                                <span className="absolute -left-[2px] top-0 bottom-0 w-[2px] bg-[#70712C]">
                                    <span className="absolute -top-[7px] -left-[5px] w-3 h-3 rounded-full bg-[#70712C]" />

                                </span>
                                {servicesContent.heading.highlight2}
                                <span className="absolute -right-[2px] top-0 bottom-0 w-[2px] bg-[#70712C]">

                                    <span className="absolute -bottom-[7px] -right-[5px] w-3 h-3 rounded-full bg-[#70712C]" />
                                </span>
                            </span>
                            {servicesContent.heading.part3}
                        </h2>

                        <p className="max-w-[662px] text-[#5E5E5E] text-base md:text-xl font-urbanist leading-7 md:leading-8">
                            {servicesContent.subtext}
                        </p>
                    </div>

                    {/* Service cards grid */}
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
                        {servicesContent.services.map((service, i) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                                className="h-full"
                            >
                                <ServiceCard {...service} />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>
        </div>
    );
}