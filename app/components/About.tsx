"use client";

import { motion } from "framer-motion";

const skills = [
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Prisma",
  "Node.js",
  "JWT",
  "Firebase",
  "Appwrite",
  "React",
  "Flutter",
  "Dart",
  "JavaScript",
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="mb-4 text-2xl font-bold text-[var(--foreground)] sm:text-3xl"
        >
          About
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mb-8 leading-relaxed text-[var(--muted-foreground)]"
        >
          I&apos;m a young, ambitious developer with a passion for building
          real-world applications. I focus on modern web technologies and
          scalable, production-ready systems—from full-stack web apps with
          Next.js and Node.js to mobile apps with Flutter. I care about clean
          architecture, performance, and great UX.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
          className="mb-4 text-lg font-semibold text-[var(--foreground)]"
        >
          Skills
        </motion.h3>
        <motion.ul
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4"
        >
          {skills.map((skill, i) => (
            <motion.li
              key={skill}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="rounded-[8px] border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-center text-sm font-medium text-[var(--card-foreground)] transition-colors hover:border-[var(--primary)] hover:shadow-[0_0_16px_var(--primary-glow)]"
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
