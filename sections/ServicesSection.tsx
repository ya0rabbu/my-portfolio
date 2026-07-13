"use client";
import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import ServiceCard from "@/components/ui/ServiceCard";
import { servicesContent } from "@/data/content";

export default function ServicesSection() {
    return (
        <div className="w-full px-3 sm:px-5 pt-6 sm:pt-8">
            <section
                id="services"
                className="relative w-full border border-[#E7E1DD] px-4 sm:px-6 md:px-16 lg:px-24 xl:px-[180px] py-10 sm:py-16 md:py-24 rounded-[16px] sm:rounded-[20px] max-w-[1880px] mx-auto overflow-hidden"
            >
                <div
                    className="absolute inset-0 -z-10 bg-[#F8FAFB]"
                    style={{
                        backgroundImage: 'url(/assets/images/service-bg.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full flex flex-col items-center gap-8 sm:gap-10 md:gap-12"
                >
                    <div className="w-full flex flex-col items-center gap-3 sm:gap-4 text-center">
                        <Badge icon={servicesContent.badge.icon} label={servicesContent.badge.label} variant="solid" />

                        <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-5">
                            <h2 className="w-full max-w-[710px] text-[34px] sm:text-[38px] md:text-[44px] lg:text-[56px] font-bold font-cabinet leading-[1.24] lg:leading-[69.44px] text-[#161616]">
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

                            <p className="max-w-[662.4px] text-[#5E5E5E] text-sm sm:text-base md:text-xl font-urbanist leading-6 sm:leading-7 md:leading-8">
                                {servicesContent.subtext}
                            </p>
                        </div>
                    </div>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
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