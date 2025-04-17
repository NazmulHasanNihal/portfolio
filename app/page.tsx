"use client";

import { motion } from "framer-motion";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import { useTheme } from 'next-themes';

export default function Home() {
    const { theme } = useTheme();

    return (
        <main className="min-h-screen pt-16 bg-background text-foreground">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Side Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center lg:text-left"
                    >
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                            Hello I'm
                            <br />
                            <span className="text-emerald-400">Md.Nazmul</span>
                        </h1>
                        <div className="text-lg sm:text-xl mb-6">
                            <Typewriter
                                options={{
                                    strings: ["Data Scientist", "Data Engineer", "Data Analyst"],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 50,
                                    delay: 80,
                                }}
                            />
                        </div>
                        <p className="text-muted-foreground mb-8 text-sm sm:text-base">
                            Data enthusiast with skills in Python, R, SQL, and tools like Pandas, Polars, NumPy, PySpark and Tableau. Experienced in
                            statistical modeling, machine learning, and data engineering with ETL, data warehousing, and cloud platforms.
                        </p>

                        {/* Social Media Links */}
                        <div className="flex gap-4 justify-center lg:justify-start">
                            {[
                                { icon: Facebook, href: "https://www.facebook.com/8lack.rabbit/" },
                                { icon: Github, href: "https://github.com/NazmulHasanNihal" },
                                { icon: Twitter, href: "https://x.com/nazmulhas363" },
                                { icon: Linkedin, href: "https://www.linkedin.com/in/nazmulhasannihal/" },
                            ].map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    className="p-2 rounded-full border border-border hover:border-emerald-400 hover:text-emerald-400 transition-colors"
                                >
                                    <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                                </Link>
                            ))}
                        </div>
                    </motion.div>

                    {/* Profile Image with Animated Circular SVG */}
                    <div className="relative flex justify-center">
                        <div className="relative w-[300px] h-[300px] xl:w-[506px] xl:h-[506px]">
                            {/* Image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            >
                                <Image
                                    src="/profile.webp" // Corrected path
                                    alt="Md. Nazmul"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-full"
                                />
                            </motion.div>

                            {/* Animated Circular SVG */}
                            <motion.svg
                                className="absolute inset-0 w-full h-full"
                                fill="transparent"
                                viewBox="0 0 506 506"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <motion.circle
                                    cx="253"
                                    cy="253"
                                    r="250"
                                    stroke={theme === 'dark' ? "#00ff99" : "#00cc66"} // Vibrant color in light
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    initial={{ strokeDasharray: "24 10 0 0" }}
                                    animate={{
                                        strokeDasharray: [
                                            "15 120 25 25",
                                            "16 25 92 72",
                                            "4 250 22 22",
                                        ],
                                        rotate: [120, 360],
                                    }}
                                    transition={{
                                        duration: 30,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                    }}
                                />
                            </motion.svg>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}