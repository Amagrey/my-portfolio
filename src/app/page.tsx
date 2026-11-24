import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Pill from "@/components/ui/Pill";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/common/ProjectCard";
import { profile, skills, projects, about, experience } from "@/components/lib/data";

export default function Home() {
  return (
    <Container>
      {/* Hero */}
      <section className="grid items-center gap-10 py-10 sm:py-16 md:grid-cols-[1.2fr_1fr] md:gap-12 lg:py-20">
        <div>
          <Reveal>
            <Pill tone="pink" className="text-[11px] sm:text-xs">{profile.badge}</Pill>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-4 text-2xl font-extrabold leading-[1.15] tracking-tight sm:mt-5 sm:text-4xl lg:text-5xl">
              {profile.headline}
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 max-w-md text-sm text-ink-soft sm:mt-6 md:text-base">{profile.intro}</p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
              <Button href="/#experience">View experience</Button>
              <Button href="/#contact" variant="soft">Contact me</Button>
            </div>
          </Reveal>
        </div>
        <Reveal delay={250}>
          <div className="relative grid gap-3" aria-hidden>
            <div className="animate-float rounded-3xl bg-blush p-4 text-sm font-bold sm:rounded-4xl sm:p-6 sm:text-base">
              Interface <span className="block text-xs font-medium text-ink-soft sm:text-sm">React, TypeScript, Tailwind</span>
            </div>
            <div className="ml-6 rounded-3xl bg-blue-100 p-4 text-sm font-bold sm:ml-8 sm:rounded-4xl sm:p-6 sm:text-base">
              API <span className="block text-xs font-medium text-ink-soft sm:text-sm">FastAPI, Python</span>
            </div>
            <div className="rounded-3xl bg-emerald-100 p-4 text-sm font-bold sm:rounded-4xl sm:p-6 sm:text-base">
              Database <span className="block text-xs font-medium text-ink-soft sm:text-sm">SQLAlchemy, SQL</span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Work (hidden until your company approves) */}
      {/* <section id="work" className="scroll-mt-20 py-12 sm:py-16">
        <Reveal>
          <SectionHeading title="Selected work" text="A few projects that show how I think and build." />
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 120} className="h-full">
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </section> */}

      {/* Skills */}
      <section id="skills" className="scroll-mt-20 py-12 sm:py-16">
        <Reveal>
          <SectionHeading title="What I work with" />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((g, i) => (
            <Reveal key={g.group} delay={i * 120} className="h-full">
              <div className="h-full rounded-3xl border border-line bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-100 sm:rounded-4xl sm:p-8">
                <h3 className="text-lg font-bold sm:text-xl">{g.group}</h3>
                <p className="mb-4 mt-1 text-sm text-ink-soft sm:mb-5">{g.note}</p>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((item) => <Pill key={item} tone={g.tone}>{item}</Pill>)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="scroll-mt-20 py-12 sm:py-16">
        <Reveal>
          <SectionHeading title="Experience" />
        </Reveal>
        <div className="space-y-4">
          {experience.map((e, i) => (
            <Reveal key={e.role + e.org} delay={i * 100}>
              <div className="rounded-3xl border border-line bg-white p-5 sm:rounded-4xl sm:p-8">
                <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-base font-bold leading-snug sm:text-lg">
                    {e.role}, {e.org}
                  </h3>
                  <Pill tone="pink" className="shrink-0">{e.period}</Pill>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-soft">
                  {e.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-20 py-12 sm:py-16">
        <Reveal>
          <div className="rounded-3xl bg-blush p-6 sm:rounded-4xl sm:p-12">
            <SectionHeading title="About me" />
            <div className="max-w-2xl space-y-4 text-sm leading-relaxed text-ink-soft sm:text-base">
              {about.map((p) => <p key={p}>{p}</p>)}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 py-12 sm:py-16">
        <Reveal>
          <SectionHeading title="Let’s work together" text="Have a role or a project in mind? Contact me." />
          <div className="flex flex-wrap items-start gap-3">
            <Button href={`mailto:${profile.email}`}>{profile.email}</Button>
            <Button href="https://github.com/Amagrey" variant="soft">GitHub</Button>
          </div>
        </Reveal>
      </section>
    </Container>
  );
}