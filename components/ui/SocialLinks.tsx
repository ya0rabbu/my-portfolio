"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { socialLinks } from "@/data/content";

export default function SocialLinks() {
    return (
        <div className="flex flex-row gap-3">
            {socialLinks.map((social) => (
                <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="relative w-[52px] h-[52px] flex items-center justify-center rounded-[8px] overflow-hidden"
                >
                    <span className="absolute inset-0 bg-white backdrop-blur-[34px] rounded-[8px]" />
                    <span className="absolute inset-0 bg-white rounded-[8px]" />
                    <span className="absolute inset-0 bg-black mix-blend-screen rounded-[8px]" />
                    <span className="relative z-10 w-5 h-5">
                        <Image src={social.icon} alt={social.name} fill className="object-contain" />
                    </span>
                </motion.a>
            ))}
        </div>
    );
}