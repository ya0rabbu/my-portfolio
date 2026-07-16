"use client";
import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import ServiceCard from "@/components/ui/ServiceCard";
import { servicesContent } from "@/data/content";

export default function ServicesSection() {
    return (
        <div className="w-full pt-6 sm:pt-8">
            <section
                id="services"
                className="relative w-full border border-[#E7E1DD]
      px-4 sm:px-6 md:px-16 lg:px-24 xl:px-[180px]
      py-10 sm:py-16 md:py-24
      rounded-[16px] sm:rounded-[20px]
      max-w-full mx-auto overflow-hidden"
            >
                {/* Background */}
                <div
                    className="absolute inset-0 -z-10 bg-[#FAF9F8]"
                    style={{
                        backgroundImage: "url(/assets/images/service-bg.png)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full flex flex-col items-center gap-12"
                >
                    {/* Header */}
                    <div className="w-full flex flex-col items-center gap-[14.4px] text-center relative">
                        <Badge icon={servicesContent.badge.icon} label={servicesContent.badge.label} variant="solid" />

                        <div className="relative flex flex-col items-center gap-[19.2px]">
                            <h2
                                className="w-full max-w-[710px] font-cabinet font-bold text-center text-[#161616]"
                                style={{ fontSize: "clamp(32px, 4vw, 56px)", lineHeight: "69.44px" }}
                            >
                                <span className="text-[#161616]">{servicesContent.heading.part1}</span>
                                <span className="text-[rgba(22,22,22,0.40)]">{servicesContent.heading.highlight1}</span>
                                <span className="text-[#161616]">{servicesContent.heading.part2}</span>
                                <span className="relative inline-block bg-[#70712C]/[0.12] text-[#70712C] px-2 mx-1">
                                    <span className="absolute -left-[2px] top-0 bottom-0 w-[2px] bg-[#70712C]">
                                        <span className="absolute -top-[7px] -left-[5px] w-3 h-3 rounded-full bg-[#70712C]" />
                                    </span>
                                    {servicesContent.heading.highlight2}
                                    <span className="absolute -right-[2px] top-0 bottom-0 w-[2px] bg-[#70712C]">
                                        <span className="absolute -bottom-[7px] -right-[5px] w-3 h-3 rounded-full bg-[#70712C]" />
                                    </span>
                                </span>
                                <span className="text-[#161616]">{servicesContent.heading.part3}</span>
                            </h2>

                            <p
                                className="max-w-[662px] text-[#5E5E5E] font-urbanist font-normal text-center"
                                style={{ fontSize: "20px", lineHeight: "32px" }}
                            >
                                {servicesContent.subtext}
                            </p>

                            {/* Union accent */}
                            <div
                                className="absolute pointer-events-none -z-10 hidden lg:block"
                                style={{ width: "214px", height: "62px", left: "531px", top: "72px", background: "rgba(112, 113, 44, 0.12)" }}
                            />
                        </div>
                    </div>

                    {/* Cards grid */}
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
                        {servicesContent.services.map((service, i) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
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