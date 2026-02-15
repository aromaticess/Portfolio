"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const links = [
  {
    label: "Email",
    href: "mailto:abdosheref360@gmail.com",
    icon: Mail,
    value: "abdosheref360@gmail.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/aromaticess",
    icon: Github,
    value: "github.com/aromaticess",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abdelrahman-sherif-674a4b359/",
    icon: Linkedin,
    value: "Abdelrahman Sherif",
  },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="mb-10 text-2xl font-bold text-[var(--foreground)] sm:text-3xl"
        >
          Get in Touch
        </motion.h2>

        <div className="grid gap-4 sm:grid-cols-3">
          {links.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 text-center transition-all duration-300 hover:border-[var(--primary)] hover:shadow-[0_0_24px_var(--primary-glow)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-[var(--muted)] text-[var(--primary)] transition-colors group-hover:bg-[var(--primary)] group-hover:text-[var(--primary-foreground)]">
                <item.icon className="h-6 w-6" />
              </span>
              <span className="text-sm font-medium text-[var(--muted-foreground)]">
                {item.label}
              </span>
              <span className="text-sm font-medium text-[var(--card-foreground)] break-all">
                {item.value}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
