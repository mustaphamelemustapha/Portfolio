"use client";

import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  BookOpen,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  ExternalLink,
  Camera,
  GitBranch,
  Globe2,
  Mail,
  Megaphone,
  Music2,
  Network,
  Palette,
  PlayCircle,
  Rocket,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrendingUp,
  Zap
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const navItems = ["About", "Projects", "Skills", "Journey", "Content", "Contact"];

const projects = [
  {
    name: "AxisVTU",
    status: "Founder-led build",
    description:
      "A VTU and data fintech platform built for everyday Nigerian transactions, with a focus on speed, trust, and a clean customer experience.",
    stack: ["Fintech", "VTU", "Web app", "Mobile"],
    icon: Zap,
    accent: "from-emerald-300/20 to-cyan-300/10"
  },
  {
    name: "MMTechGlobe",
    status: "Creator brand",
    description:
      "A technology education and content brand for sharing practical lessons, product progress, and the realities of learning tech in public.",
    stack: ["Content", "Education", "Community", "Brand"],
    icon: Globe2,
    accent: "from-sky-300/18 to-white/5"
  },
  {
    name: "Bazehub",
    status: "Product experiment",
    description:
      "A collaboration and product-thinking experiment that sharpens how ideas move from concept to useful software people can understand.",
    stack: ["Product", "Collaboration", "UX", "Prototype"],
    icon: Blocks,
    accent: "from-amber-200/16 to-emerald-300/8"
  }
];

const skills = [
  { name: "Frontend development", icon: Code2 },
  { name: "Flutter app development", icon: Smartphone },
  { name: "Backend/API integration", icon: ServerCog },
  { name: "UI/UX design", icon: Palette },
  { name: "Fintech product thinking", icon: TrendingUp },
  { name: "Content creation", icon: Megaphone },
  { name: "Branding", icon: BadgeCheck },
  { name: "AI tools", icon: Bot }
];

const timeline = [
  {
    year: "Learning phase",
    title: "Started learning web development",
    body: "Built discipline around code, design, and shipping small things consistently."
  },
  {
    year: "Creator era",
    title: "Built MMTechGlobe",
    body: "Turned learning into public value through tech education, content, and community signals."
  },
  {
    year: "Founder era",
    title: "Built AxisVTU web/app",
    body: "Moved from practice projects into a real fintech product serving practical Nigerian needs."
  },
  {
    year: "Now",
    title: "Launching and documenting",
    body: "Building products in public while growing into a global founder and software builder."
  }
];

const channels = [
  {
    name: "YouTube",
    icon: PlayCircle,
    body: "Deeper lessons, product breakdowns, and the longer story behind the build."
  },
  {
    name: "TikTok",
    icon: Music2,
    body: "Short, direct updates from the student-founder journey."
  },
  {
    name: "LinkedIn",
    icon: Network,
    body: "Professional milestones, launch notes, and founder reflections."
  }
];

const socials = [
  { name: "GitHub", icon: GitBranch, href: "https://github.com/" },
  { name: "LinkedIn", icon: Network, href: "https://www.linkedin.com/" },
  { name: "YouTube", icon: PlayCircle, href: "https://www.youtube.com/" },
  { name: "TikTok", icon: Music2, href: "https://www.tiktok.com/" },
  { name: "Instagram", icon: Camera, href: "https://www.instagram.com/" }
];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

export function PortfolioSite() {
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <main className="site-shell min-h-screen">
      <motion.div
        className="fixed left-0 top-0 z-50 h-0.5 bg-emerald-200"
        style={{ width: progressWidth }}
      />
      <Header />
      <Hero />
      <About />
      <FeaturedProjects />
      <Skills />
      <Journey />
      <BuildingInPublic />
      <Contact />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#08090c]/72 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-lg border border-white/15 bg-white/8 font-display text-sm font-semibold text-white shadow-2xl">
            MM
          </span>
          <span className="hidden text-sm font-medium text-white/86 sm:block">Mustapha Mele</span>
        </a>
        <div className="scrollbar-none hidden items-center gap-1 overflow-x-auto rounded-full border border-white/10 bg-white/6 p-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="rounded-full px-3 py-1.5 text-xs font-medium text-white/62 transition hover:bg-white/10 hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="mailto:hello@mustaphamele.dev"
          className="group inline-flex items-center gap-2 rounded-full border border-emerald-200/25 bg-emerald-200/10 px-4 py-2 text-sm font-semibold text-emerald-50 transition hover:border-emerald-100/50 hover:bg-emerald-200/16"
        >
          Contact
          <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center px-4 pt-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 pb-16 pt-10 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/7 px-3 py-2 text-xs font-medium text-white/72 shadow-2xl backdrop-blur-xl">
            <Sparkles className="size-4 text-emerald-200" />
            Building fintech, software, and tech media from Nigeria
          </div>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.93] tracking-normal text-white text-balance">
            Hi, I&apos;m Mustapha Mele Mustapha
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
            Founder, product builder, and tech creator from Nigeria. I&apos;m building AxisVTU,
            growing MMTechGlobe, and documenting the journey as a young entrepreneur with global
            ambition.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#08090c] transition hover:bg-emerald-100"
            >
              View Projects
              <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/7 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/12"
            >
              Contact Me
              <Mail className="size-4" />
            </a>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
            {[
              ["01", "Founder"],
              ["02", "Builder"],
              ["03", "Creator"]
            ].map(([number, label]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/6 p-4 backdrop-blur-xl">
                <p className="font-display text-xl font-semibold text-white">{number}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-white/46">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 22 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: "easeOut" }}
          className="relative"
        >
          <div className="glass relative overflow-hidden rounded-[2rem] p-2">
            <Image
              src="/images/founder-workspace.png"
              alt="Premium founder workspace with fintech product screens"
              width={1400}
              height={1000}
              priority
              className="aspect-[4/3] w-full rounded-[1.55rem] object-cover"
            />
            <div className="absolute inset-x-5 bottom-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {["AxisVTU", "MMTechGlobe", "Build in public"].map((item) => (
                <div key={item} className="rounded-xl border border-white/12 bg-black/42 px-3 py-3 backdrop-blur-xl">
                  <p className="text-xs font-semibold text-white/88">{item}</p>
                  <p className="mt-1 text-[11px] text-white/46">Active signal</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About" title="A serious builder with student hunger and founder discipline.">
      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="p-6 sm:p-8">
          <p className="text-lg leading-8 text-white/72">
            Mustapha Mele Mustapha is a Nigerian tech student building real products while learning
            in the open. His work sits where software, fintech, AI tools, content, and brand trust
            meet: practical technology that can serve people today and scale into something larger
            tomorrow.
          </p>
          <p className="mt-5 text-base leading-7 text-white/58">
            Through AxisVTU, he is exploring how simple digital services can become dependable
            financial utility. Through MMTechGlobe, he turns learning into public proof, sharing the
            path with other young builders who want more than theory.
          </p>
        </Card>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <MiniSignal icon={ShieldCheck} title="Trust first" body="Products that feel clear, useful, and reliable." />
          <MiniSignal icon={Rocket} title="Global ambition" body="Building from Nigeria with standards that can travel." />
        </div>
      </div>
    </Section>
  );
}

function FeaturedProjects() {
  return (
    <Section id="projects" eyebrow="Featured projects" title="Products and brands with a real point of view.">
      <div className="grid gap-4 lg:grid-cols-3">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <motion.article
              key={project.name}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-2xl backdrop-blur-xl transition hover:-translate-y-1 hover:border-white/18 hover:bg-white/[0.075]"
            >
              <div className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-br ${project.accent}`} />
              <div className="relative">
                <div className="mb-8 flex items-start justify-between gap-4">
                  <span className="grid size-12 place-items-center rounded-2xl border border-white/12 bg-black/24">
                    <Icon className="size-6 text-emerald-100" />
                  </span>
                  <span className="rounded-full border border-white/12 bg-white/8 px-3 py-1 text-xs font-medium text-white/62">
                    {project.status}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-white">{project.name}</h3>
                <p className="mt-4 min-h-28 text-sm leading-6 text-white/62">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/7 px-3 py-1 text-xs text-white/58">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-7 flex gap-3">
                  <a className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-emerald-100" href="#contact">
                    Discuss project <ArrowRight className="size-4" />
                  </a>
                  <a className="inline-flex items-center gap-2 text-sm font-semibold text-white/48 transition hover:text-white" href="#content">
                    Story <ExternalLink className="size-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Capabilities" title="The stack behind the ambition.">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.052] p-5 transition hover:border-emerald-100/25 hover:bg-white/[0.075]"
            >
              <Icon className="size-6 text-emerald-100" />
              <p className="mt-5 text-sm font-semibold text-white">{skill.name}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

function Journey() {
  return (
    <Section id="journey" eyebrow="Journey" title="A public path from learner to founder.">
      <div className="relative">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-white/10 sm:block" />
        <div className="grid gap-4">
          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="relative grid gap-4 rounded-3xl border border-white/10 bg-white/[0.052] p-5 sm:ml-10 sm:grid-cols-[0.35fr_1fr] sm:p-6"
            >
              <span className="absolute -left-[2.95rem] top-6 hidden size-4 rounded-full border border-emerald-100/60 bg-[#08090c] sm:block" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-100/76">{item.year}</p>
              <div>
                <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/58">{item.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function BuildingInPublic() {
  return (
    <Section id="content" eyebrow="Building in public" title="The work is becoming the signal.">
      <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="p-6 sm:p-8">
          <BookOpen className="size-7 text-emerald-100" />
          <h3 className="mt-6 font-display text-3xl font-semibold text-white">Sharing the process, not just the wins.</h3>
          <p className="mt-4 text-base leading-7 text-white/62">
            The public journey matters: what is being learned, what is being shipped, what failed,
            and what improved. Mustapha uses content as accountability, education, and proof of
            momentum.
          </p>
        </Card>
        <div className="grid gap-4 sm:grid-cols-3">
          {channels.map((channel) => {
            const Icon = channel.icon;
            return (
              <div key={channel.name} className="rounded-3xl border border-white/10 bg-white/[0.052] p-5 transition hover:bg-white/[0.075]">
                <Icon className="size-6 text-white" />
                <h3 className="mt-6 font-display text-xl font-semibold text-white">{channel.name}</h3>
                <p className="mt-3 text-sm leading-6 text-white/56">{channel.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let&apos;s build something meaningful.">
      <div className="glass overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="max-w-2xl text-lg leading-8 text-white/66">
              Open to thoughtful collaborations, product conversations, internships, partnerships,
              and opportunities that connect software with real-world value.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:hello@mustaphamele.dev"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-100 px-6 py-3 text-sm font-bold text-[#07110d] transition hover:bg-white"
              >
                <Mail className="size-4" />
                Email Mustapha
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/7 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/12"
              >
                <BriefcaseBusiness className="size-4" />
                See Work
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5 lg:grid-cols-2">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="group flex min-h-20 items-center justify-between rounded-2xl border border-white/10 bg-white/[0.052] p-4 transition hover:border-white/20 hover:bg-white/[0.082]"
                >
                  <span className="text-sm font-semibold text-white/72">{social.name}</span>
                  <Icon className="size-5 text-white/44 transition group-hover:text-emerald-100" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/48 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Mustapha Mele Mustapha. Built with intention.</p>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="size-4 text-emerald-100" />
          <span>Founder, builder, creator from Nigeria.</span>
        </div>
      </div>
    </footer>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mb-8 max-w-3xl sm:mb-10"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-100/70">{eyebrow}</p>
          <h2 className="font-display text-3xl font-semibold leading-tight text-white text-balance sm:text-5xl">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-3xl border border-white/10 bg-white/[0.052] ${className}`}>{children}</div>;
}

function MiniSignal({
  icon: Icon,
  title,
  body
}: {
  icon: typeof ShieldCheck;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.052] p-6">
      <Icon className="size-7 text-emerald-100" />
      <h3 className="mt-6 font-display text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-white/58">{body}</p>
    </div>
  );
}
