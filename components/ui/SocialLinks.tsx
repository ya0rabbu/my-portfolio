"use client";
import Image from "next/image";
import { socialLinks } from "@/data/content";

export default function SocialLinks() {
    return (
        <div className="flex flex-col gap-4">
            {socialLinks.map((social) => (
                <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[61px] h-[61px] flex items-center justify-center rounded-lg bg-white shadow-sm hover:scale-105 transition-transform"
                    aria-label={social.name}
                >
                    <span className="relative w-6 h-6">
                        <Image src={social.icon} alt={social.name} fill className="object-contain" />
                    </span>
                </a>
            ))}
        </div >
    );
}