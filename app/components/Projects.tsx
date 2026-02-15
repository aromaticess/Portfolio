"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    name: "E-Commerce Dashboard",
    description:
      "A high-performance analytics dashboard for online retailers with real-time data visualization.",
    tech: ["React", "Tailwind"],
    githubUrl: "https://github.com/aromaticess",
    liveUrl: undefined,
  },
  {
    name: "FinTech Mobile App",
    description:
      "Secure mobile banking application featuring biometric authentication and crypto tracking.",
    tech: ["React Native", "Firebase"],
    githubUrl: "https://github.com/aromaticess",
    liveUrl: undefined,
  },
  {
    name: "AI Content Generator",
    description:
      "SaaS platform leveraging GPT models to help creators generate blog posts and social media captions.",
    tech: ["Next.js", "OpenAI"],
    githubUrl: "https://github.com/aromaticess",
    liveUrl: undefined,
  },
];

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"
        >
          <h2 className="text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
            Recent Work
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
