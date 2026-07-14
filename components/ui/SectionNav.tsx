"use client";
import { motion } from "framer-motion";

export default function SectionNav() {
    return (
        <div className="hidden lg:flex flex-col gap-4 fixed right-0 top-1/2 -translate-y-1/2">
            <motion.a
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 }}
                href="#about"
                className="w-8 h-8 rounded-full border border-white bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all"
            >
                1
            </motion.a>
            <motion.a
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.6 }}
                href="#services"
                className="w-8 h-8 rounded-full border border-white bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all"
            >
                2
            </motion.a>
            <motion.a
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.7 }}
                href="#projects"
                className="w-8 h-8 rounded-full border border-white bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all"
            >
                3
            </motion.a>
            <motion.a
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8 }}
                href="#contact"
                className="w-8 h-8 rounded-full border border-white bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all"
            >
                4
            </motion.a>
        </div>
    );
}