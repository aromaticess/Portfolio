"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const GITHUB_URL = "https://github.com/aromaticess";
const LINKEDIN_URL = "https://www.linkedin.com/in/abdelrahman-sherif-674a4b359/";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-20 pb-16 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--primary-glow),transparent)] opacity-40" />

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-2 text-sm font-medium uppercase tracking-widest text-[var(--primary)]"
      >
        Hello World, I am
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={cn(
          "mb-3 text-center text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl",
          "text-[var(--foreground)] neon-text"
        )}
      >
        Abdelrahman Sherif
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-2 text-xl font-medium text-[var(--primary)] sm:text-2xl"
      >
        Full Stack Developer
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-10 max-w-xl text-center text-[var(--muted-foreground)]"
      >
        Building modern, scalable, and intelligent web applications.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <Link href="#projects">
          <motion.span
            className="inline-flex items-center gap-2 rounded-[8px] bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-[var(--primary-foreground)] shadow-[0_0_20px_var(--primary-glow)] transition-shadow hover:shadow-[0_0_28px_var(--primary-glow)]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            View Projects
            <ArrowRight className="h-4 w-4" />
          </motion.span>
        </Link>
        <div className="flex gap-3">
          <motion.a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-[8px] border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] transition-colors hover:border-[var(--primary)] hover:shadow-[0_0_20px_var(--primary-glow)]"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="h-5 w-5" />
          </motion.a>
          <motion.a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-[8px] border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] transition-colors hover:border-[var(--primary)] hover:shadow-[0_0_20px_var(--primary-glow)]"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="h-5 w-5" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
