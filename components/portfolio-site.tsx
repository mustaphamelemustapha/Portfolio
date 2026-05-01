"use client";

import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  BookOpen,
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
  Wrench,
  Zap
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const navItems = ["About", "Now", "Projects", "Skills", "Journey", "Content", "Contact"];

const projects = [
  {
    name: "AxisVTU",
    status: "Founder-led build",
    description:
      "A VTU and data fintech platform built from the ground up for everyday Nigerian transactions. The mission is simple: make digital utility feel fast, honest, and dependable.",
    stack: ["Fintech", "VTU", "Web app", "Mobile"],
    icon: Zap,
    accent: "from-emerald-300/20 to-cyan-300/10"
  },
  {
    name: "MMTechGlobe",
    status: "Creator brand",
    description:
      "A technology education and content brand where I share what I am learning, what I am building, and the honest process behind becoming better in public.",
    stack: ["Content", "Education", "Community", "Brand"],
    icon: Globe2,
    accent: "from-sky-300/18 to-white/5"
  },
  {
    name: "Bazehub",
    status: "Product experiment",
    description:
      "A product experiment around collaboration, clarity, and useful tools. It is part lab, part lesson, and part proof that ideas become stronger when shipped.",
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
  { name: "Product research", icon: Wrench }
];

const nowSignals = [
  {
    label: "Currently building",
    value: "AxisVTU web and app experience",
    detail: "Improving trust, onboarding, and transaction flow."
  },
  {
    label: "Currently learning",
    value: "Fintech systems, product design, and distribution",
    detail: "Turning curiosity into product decisions people can feel."
  },
  {
    label: "Currently sharing",
    value: "The real student-founder journey",
    detail: "Progress, mistakes, lessons, launches, and useful proof."
  }
];

const principles = [
  "Build useful things before talking too much.",
  "Make technology feel simple enough for real people.",
  "Stay ambitious, but keep the work honest.",
  "Represent Nigerian builders with global standards."
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
      <Now />
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
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/14 bg-[#08090c]/92 shadow-[0_18px_60px_rgba(0,0,0,0.32)] backdrop-blur-2xl">
      <nav className="mx-auto flex h-[4.75rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="group flex min-w-0 items-center gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-emerald-100/24 bg-emerald-100/10 font-display text-sm font-semibold text-white shadow-2xl transition group-hover:border-emerald-100/44">
            MM
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold text-white sm:text-base">Mustapha Mele</span>
            <span className="hidden text-xs font-medium text-emerald-50/76 sm:block">Founder & product builder</span>
          </span>
        </a>
        <div className="scrollbar-none hidden items-center gap-5 overflow-x-auto lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-semibold text-white/74 transition hover:text-emerald-100"
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="mailto:hello@mustaphamele.dev"
          className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-emerald-200 bg-emerald-200 px-4 py-2.5 text-sm font-black text-[#03110b] shadow-[0_10px_30px_rgba(110,231,183,0.18)] transition hover:border-white hover:bg-white"
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
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/7 px-3 py-2 text-xs font-medium text-white/82 shadow-2xl backdrop-blur-xl">
            <Sparkles className="size-4 text-emerald-200" />
            Live from Nigeria: learning, shipping, documenting
          </div>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.93] tracking-normal text-white text-balance">
            Hi, I&apos;m Mustapha Mele Mustapha
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
            Founder, product builder, and tech creator from Nigeria. I&apos;m building AxisVTU,
            growing MMTechGlobe, and learning in public with the kind of ambition that starts small,
            stays honest, and keeps moving.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/78">
            This is not just a portfolio. It is a record of a young builder turning late nights,
            experiments, code, content, and faith in the future into products people can actually use.
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
              ["02", "Product mind"],
              ["03", "Public learner"]
            ].map(([number, label]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/6 p-4 backdrop-blur-xl">
                <p className="font-display text-xl font-semibold text-white">{number}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-white/64">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex max-w-2xl flex-wrap gap-2 text-xs text-white/70">
            {["Fintech builder", "Frontend craft", "Flutter learner", "Product discipline"].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-black/22 px-3 py-1.5">
                {item}
              </span>
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
              {["AxisVTU", "MMTechGlobe", "Build in public"].map((item, index) => (
                <div key={item} className="rounded-xl border border-white/12 bg-black/42 px-3 py-3 backdrop-blur-xl">
                  <div className="flex items-center gap-2">
                    <span className={`size-1.5 rounded-full ${index === 0 ? "bg-emerald-200" : "bg-white/42"}`} />
                    <p className="text-xs font-semibold text-white/88">{item}</p>
                  </div>
                  <p className="mt-1 text-[11px] text-white/64">{index === 0 ? "Shipping now" : "Growing steadily"}</p>
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
    <Section id="about" eyebrow="About" title="The human side of the builder.">
      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="p-6 sm:p-8">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-emerald-100/66">Founder note</p>
          <p className="text-lg leading-8 text-white/82">
            I am a Nigerian tech student building real products while I am still becoming the person
            who can build bigger ones. That means studying, designing, coding, testing, sharing, and
            learning from every rough edge.
          </p>
          <p className="mt-5 text-base leading-7 text-white/82">
            AxisVTU is where I practice product responsibility. MMTechGlobe is where I turn the
            journey into value for others. The bigger goal is to become a builder people can trust:
            clear in thought, serious in execution, and still human in the process.
          </p>
          <div className="mt-7 rounded-2xl border border-emerald-100/14 bg-emerald-100/[0.055] p-5">
            <p className="text-sm leading-7 text-emerald-50/74">
              “I want my work to prove that a young Nigerian builder can start with curiosity,
              discipline, and a laptop, then grow into something useful for people far beyond his
              first environment.”
            </p>
          </div>
        </Card>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <MiniSignal icon={ShieldCheck} title="Trust first" body="Products should feel clear before they feel clever." />
          <MiniSignal icon={Rocket} title="Global ambition" body="Building from Nigeria with taste, patience, and standards that can travel." />
        </div>
      </div>
    </Section>
  );
}

function Now() {
  return (
    <Section id="now" eyebrow="Now" title="What is alive on the workbench.">
      <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
        <Card className="relative overflow-hidden p-6 sm:p-8">
          <div className="absolute right-6 top-6 flex items-center gap-2 rounded-full border border-emerald-100/16 bg-emerald-100/8 px-3 py-1.5 text-xs font-semibold text-emerald-50/78">
            <span className="size-2 rounded-full bg-emerald-200 shadow-[0_0_18px_rgba(167,243,208,0.75)]" />
            Active
          </div>
          <BookOpen className="size-7 text-emerald-100" />
          <h3 className="mt-7 font-display text-3xl font-semibold leading-tight text-white">
            The page is polished, but the journey is still in motion.
          </h3>
          <p className="mt-4 text-base leading-7 text-white/74">
            I am not waiting to become perfect before building. I am using the process itself as the
            training ground: ship, learn, improve, share, repeat.
          </p>
        </Card>
        <div className="grid gap-4">
          {nowSignals.map((signal, index) => (
            <motion.div
              key={signal.label}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="group rounded-3xl border border-white/10 bg-white/[0.052] p-5 transition hover:border-emerald-100/22 hover:bg-white/[0.075] sm:p-6"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-100/62">{signal.label}</p>
                <span className="h-px flex-1 bg-white/10 sm:mx-4" />
                <Sparkles className="hidden size-4 text-white/50 transition group-hover:text-emerald-100 sm:block" />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-white sm:text-2xl">{signal.value}</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">{signal.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function FeaturedProjects() {
  return (
    <Section id="projects" eyebrow="Featured projects" title="Not just projects. Proof of direction.">
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
                  <span className="rounded-full border border-white/12 bg-white/8 px-3 py-1 text-xs font-medium text-white/76">
                    {project.status}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-white">{project.name}</h3>
                <p className="mt-4 min-h-28 text-sm leading-6 text-white/76">{project.description}</p>
                <div className="mt-5 rounded-2xl border border-white/10 bg-black/18 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/82">Why it matters</p>
                  <p className="mt-2 text-sm leading-6 text-white/82">
                    {project.name === "AxisVTU"
                      ? "It teaches the discipline of reliability: people do not just click buttons, they trust a product with real needs."
                      : project.name === "MMTechGlobe"
                        ? "It turns learning into a public asset and helps other young builders feel less alone in the process."
                        : "It keeps experimentation close to the work, so ideas are tested before they become big promises."}
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/7 px-3 py-1 text-xs text-white/82">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-7 flex gap-3">
                  <a className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-emerald-100" href="#contact">
                    Discuss project <ArrowRight className="size-4" />
                  </a>
                  <a className="inline-flex items-center gap-2 text-sm font-semibold text-white/78 transition hover:text-white" href="#content">
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
    <Section id="skills" eyebrow="Capabilities" title="Skills with product judgment behind them.">
      <div className="mb-5 grid gap-3 lg:grid-cols-4">
        {principles.map((principle) => (
          <div key={principle} className="rounded-2xl border border-white/10 bg-black/18 p-4">
            <p className="text-sm leading-6 text-white/76">{principle}</p>
          </div>
        ))}
      </div>
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
    <Section id="journey" eyebrow="Journey" title="The story is still being written in public.">
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
                <p className="mt-2 text-sm leading-6 text-white/82">{item.body}</p>
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
          <p className="mt-4 text-base leading-7 text-white/76">
            The public journey matters: what is being learned, what is being shipped, what failed,
            and what improved. Mustapha uses content as accountability, education, and proof of
            momentum.
          </p>
          <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
            <p className="text-sm leading-7 text-white/82">
              The goal is not to look finished. The goal is to show the becoming: the thinking, the
              experiments, the lessons, the better version after every launch.
            </p>
          </div>
        </Card>
        <div className="grid gap-4 sm:grid-cols-3">
          {channels.map((channel) => {
            const Icon = channel.icon;
            return (
              <div key={channel.name} className="rounded-3xl border border-white/10 bg-white/[0.052] p-5 transition hover:bg-white/[0.075]">
                <Icon className="size-6 text-white" />
                <h3 className="mt-6 font-display text-xl font-semibold text-white">{channel.name}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">{channel.body}</p>
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
            <p className="max-w-2xl text-lg leading-8 text-white/78">
              Open to thoughtful collaborations, product conversations, internships, partnerships,
              and opportunities that connect software with real-world value. If the work is serious,
              useful, and honest, I want to hear about it.
            </p>
            <div className="mt-6 grid max-w-2xl gap-3 sm:grid-cols-3">
              {["Product ideas", "Founder conversations", "Tech opportunities"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-black/18 p-4">
                  <p className="text-sm font-semibold text-white/74">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:hello@mustaphamele.dev"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-200 bg-emerald-200 px-6 py-3 text-sm font-black text-[#03110b] shadow-[0_12px_34px_rgba(110,231,183,0.18)] transition hover:border-white hover:bg-white"
              >
                <Mail className="size-4" />
                Email Mustapha
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/28 bg-white/12 px-6 py-3 text-sm font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:border-white/45 hover:bg-white/18"
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
                  <span className="text-sm font-semibold text-white/82">{social.name}</span>
                  <Icon className="size-5 text-white/64 transition group-hover:text-emerald-100" />
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
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/78 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Mustapha Mele Mustapha. Built with intention, pressure, and patience.</p>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="size-4 text-emerald-100" />
          <span>Still learning. Still shipping. Still becoming.</span>
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
      <p className="mt-3 text-sm leading-6 text-white/82">{body}</p>
    </div>
  );
}
