import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { SpiderEmblem, WebCorner } from "@/components/spidey-icons";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

const HERO_TAGLINE =
  "Product engineer building GenAI systems and full-stack platforms that scale from MVP to millions.";

const HERO_STATS: { value: string; label: string }[] = [
  { value: "10+", label: "Shipped products" },
  { value: "2.5k+", label: "Paying customers" },
  { value: "10×", label: "Hackathon wins / finals" },
];

function SectionLabel({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <span className="text-[10px] uppercase tracking-[0.18em] text-[hsl(var(--spidey-red))]">
          //&nbsp;{number}
        </span>
        <span aria-hidden className="h-px flex-1 bg-foreground/10" />
      </div>
      <h2 className="font-display text-3xl tracking-tight">{title}</h2>
    </div>
  );
}

function MonoLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
      {children}
    </span>
  );
}

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-20">
      <section id="hero" className="relative">
        <WebCorner
          className="pointer-events-none absolute -left-10 -top-10 text-foreground/20 sm:-left-16 sm:-top-16"
          size={120}
        />
        <WebCorner
          flip
          className="pointer-events-none absolute -right-10 -top-10 text-foreground/20 sm:-right-16 sm:-top-16"
          size={120}
        />
        <div className="relative mx-auto w-full max-w-2xl space-y-10">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="flex items-center gap-2.5 text-[hsl(var(--spidey-red))]">
              <SpiderEmblem className="shrink-0" size={14} />
              <span className="text-[10px] uppercase tracking-[0.2em]">
                Friendly neighborhood / Portfolio 2026
              </span>
            </div>
          </BlurFade>
          <div className="flex flex-col gap-y-6">
            <BlurFadeText
              delay={BLUR_FADE_DELAY * 2}
              className="font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl xl:text-7xl"
              yOffset={8}
              text={`Hi, I'm ${DATA.name.split(" ")[0]}.`}
            />
            <BlurFadeText
              className="max-w-[540px] text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base"
              delay={BLUR_FADE_DELAY * 3}
              text={HERO_TAGLINE}
            />
          </div>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="mt-2 grid grid-cols-3 gap-6 border-t border-foreground/10 pt-6">
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="font-display text-2xl tracking-tight sm:text-3xl">
                    {stat.value}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 space-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <SectionLabel number="01" title="About" />
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-[15px] leading-relaxed text-foreground/80 dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>

      <section id="work" className="scroll-mt-24 space-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <SectionLabel number="02" title="Work" />
        </BlurFade>
        <div className="flex flex-col gap-y-3">
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="education" className="scroll-mt-24 space-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <SectionLabel number="03" title="Education & Community" />
        </BlurFade>
        <div className="flex flex-col gap-y-3">
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="skills" className="scroll-mt-24 space-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <SectionLabel number="04" title="Stack" />
        </BlurFade>
        <div className="divide-y divide-foreground/10">
          {DATA.skills.map((group, id) => (
            <BlurFade
              key={group.category}
              delay={BLUR_FADE_DELAY * 10 + id * 0.05}
            >
              <div className="grid grid-cols-1 gap-3 py-4 sm:grid-cols-[140px_1fr] sm:gap-6">
                <MonoLabel>{group.category}</MonoLabel>
                <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm text-foreground/85"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="live-sites" className="scroll-mt-24 space-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col gap-4">
            <SectionLabel number="05" title="Live products" />
            <p className="max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground">
              Shipped, publicly available sites I built or owned end to end.
            </p>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {DATA.liveSites.map((site, id) => (
            <BlurFade
              key={site.href}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
            >
              <ProjectCard
                href={site.href}
                title={site.title}
                description={site.description}
                dates={site.dates ?? "Live"}
                tags={site.technologies}
                links={site.links}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="projects" className="scroll-mt-24 space-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <div className="flex flex-col gap-4">
            <SectionLabel number="06" title="Selected projects" />
            <p className="max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground">
              A few favorites, from quick experiments to full products.
            </p>
          </div>
        </BlurFade>
        <div className="mx-auto grid max-w-[800px] grid-cols-1 gap-3 sm:grid-cols-2">
          {DATA.projects.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 15 + id * 0.05}
            >
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="hackathons" className="scroll-mt-24 space-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 17}>
          <div className="flex flex-col gap-4">
            <SectionLabel number="07" title="Hackathons" />
            <p className="max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground">
              20+ national competitions, 10 wins or finals. A crash course in
              shipping under pressure, making sharp tradeoffs, and finishing
              before the sun comes up.
            </p>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 18}>
          <ul className="ml-4 divide-y divide-dashed border-l border-foreground/15">
            {DATA.hackathons.map((project, id) => (
              <BlurFade
                key={project.title + project.dates}
                delay={BLUR_FADE_DELAY * 19 + id * 0.05}
              >
                <HackathonCard
                  title={project.title}
                  description={project.description}
                  location={project.location}
                  dates={project.dates}
                  image={project.image}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </ul>
        </BlurFade>
      </section>

      <section id="contact" className="scroll-mt-24 space-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 21}>
          <div className="flex flex-col gap-4">
            <SectionLabel number="08" title="Say hello" />
            <p className="max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground">
              Open to interesting work, sharper ideas, and unsolicited memes.
              I read everything that isn&apos;t a pitch.
            </p>
            <div className="mt-2 flex flex-col gap-px border-t border-foreground/10 sm:mt-4">
              <ContactRow
                label="LinkedIn"
                hint="DMs open"
                href={DATA.contact.social.LinkedIn.url}
              />
              <ContactRow
                label="Twitter / X"
                hint="Shorter thoughts"
                href={DATA.contact.social.X.url}
              />
              <ContactRow
                label="Book a call"
                hint="Cal.com, 30 min"
                href={DATA.contact.social.calendar.url}
              />
              <ContactRow
                label="Email"
                hint={DATA.contact.email}
                href={`mailto:${DATA.contact.email}`}
              />
            </div>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}

function ContactRow({
  label,
  hint,
  href,
}: {
  label: string;
  hint: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between border-b border-foreground/10 py-3 transition-colors hover:bg-foreground/[0.02]"
    >
      <div className="flex items-center gap-4">
        <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground transition-colors group-hover:text-foreground">
          {label}
        </span>
        <span className="text-sm text-foreground/80">{hint}</span>
      </div>
      <span
        aria-hidden
        className="font-display text-lg italic text-foreground/40 transition-all group-hover:translate-x-1 group-hover:text-foreground"
      >
        →
      </span>
    </Link>
  );
}
