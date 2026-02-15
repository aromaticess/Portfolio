"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProjectCardProps {
  name: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  index?: number;
}

export function ProjectCard({
  name,
  description,
  tech,
  githubUrl,
  liveUrl,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={cn(
        "group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition-all duration-300",
        "hover:border-[var(--primary)] hover-neon"
      )}
    >
      <h3 className="mb-2 text-lg font-semibold text-[var(--card-foreground)]">
        {name}
      </h3>
      <p className="mb-4 text-sm leading-relaxed text-[var(--muted-foreground)]">
        {description}
      </p>
      <div className="mb-4 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="rounded-[8px] bg-[var(--muted)] px-2.5 py-1 text-xs font-medium text-[var(--muted-foreground)]"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        {githubUrl && (
          <motion.a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} on GitHub`}
            className="inline-flex items-center gap-2 rounded-[8px] border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github className="h-4 w-4" />
            GitHub
          </motion.a>
        )}
        {liveUrl && (
          <motion.a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Live demo: ${name}`}
            className="inline-flex items-center gap-2 rounded-[8px] bg-[var(--primary)] px-4 py-2 text-sm font-medium text-[var(--primary-foreground)] transition-shadow hover:shadow-[0_0_20px_var(--primary-glow)]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </motion.a>
        )}
      </div>
    </motion.article>
  );
}
