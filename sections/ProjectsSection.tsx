"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import ProjectCard from "@/components/ui/ProjectCard";
import HoverMaskReveal from "@/components/ui/HoverMaskReveal";
import { projectsContent } from "@/data/content";

export default function ProjectsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [mouse, setMouse] = useState({ x: 50, y: 50 });
    const [active, setActive] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const el = sectionRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        setMouse({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100,
        });
    };

    return (
        <div className="w-full px-3 sm:px-5 pt-6 sm:pt-8">
            <section
                ref={sectionRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
                className="relative w-full border border-[#E7E1DD] px-4 sm:px-6 md:px-16 lg:px-24 xl:px-[180px] py-10 sm:py-16 md:py-24 rounded-[16px] sm:rounded-[20px] max-w-[1880px] mx-auto overflow-hidden"
            >
                <div className="absolute inset-0 -z-10">
                    <HoverMaskReveal
                        baseSrc="/assets/images/project-bg.png"
                        revealSrc="/assets/images/project-bg-hover.png"
                        maskSize={260}
                        mouse={mouse}
                        active={active}
                    />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative w-full flex flex-col items-center gap-8 sm:gap-10 md:gap-12"
                >
                    <div className="w-full flex flex-col items-center gap-3 sm:gap-4 md:gap-5 text-center">
                        <Badge icon={projectsContent.badge.icon} label={projectsContent.badge.label} variant="solid" />

                        <h2 className="text-[24px] xs:text-[28px] sm:text-[34px] md:text-[44px] lg:text-[56px] font-bold font-cabinet leading-[1.24] text-[#161616] max-w-[588px]">
                            {projectsContent.heading.part1}
                            <span className="text-[#161616]/40">{projectsContent.heading.highlight1}</span>
                            {projectsContent.heading.part2}
                            <span className="relative inline-block bg-[#70712C]/[0.12] text-[#70712C] px-2 mx-1">
                                <span className="absolute -left-[2px] top-0 bottom-0 w-[2px] bg-[#70712C]">
                                    <span className="absolute -top-[7px] -left-[5px] w-3 h-3 rounded-full bg-[#70712C]" />
                                </span>
                                {projectsContent.heading.highlight2}
                                <span className="absolute -right-[2px] top-0 bottom-0 w-[2px] bg-[#70712C]">
                                    <span className="absolute -bottom-[7px] -right-[5px] w-3 h-3 rounded-full bg-[#70712C]" />
                                </span>
                            </span>
                        </h2>

                        <p className="max-w-[662px] text-[#5E5E5E] text-sm sm:text-base md:text-xl font-urbanist font-normal leading-6 sm:leading-7 md:leading-8">
                            {projectsContent.subtext}
                        </p>
                    </div>

                    <div className="w-full flex flex-col gap-6 sm:gap-8">
                        {projectsContent.projects.map((project, i) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                            >
                                <ProjectCard {...project} imagePosition={project.imagePosition as "left" | "right"} />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>
        </div>
    );
}