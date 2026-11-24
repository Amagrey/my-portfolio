import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Pill from "@/components/ui/Pill";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/common/ProjectCard";
import { profile, skills, projects, about, experience } from "@/components/lib/data";

export default function Home() {
  return (
    <Container>
      {/* Hero */}
      <section className="grid items-center gap-10 py-10 sm:py-16 md:grid-cols-[1.2fr_1fr] md:gap-12 lg:py-20">
        <div>
          <Pill tone="pink" className="text-[11px] sm:text-xs">{profile.badge}</Pill>
          <h1 className="mt-4 text-xl font-extrabold leading-[1.15] tracking-tight sm:mt-5 md:text-2xl lg:text-4xl">
            {profile.headline}
          </h1>
          <p className="mt-4 max-w-md text-sm text-ink-soft sm:mt-6 md:text-base">{profile.intro}</p>
          <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
            <Button href="/#work">See my work</Button>
            <Button href="/#contact" variant="soft">Contact me</Button>
          </div>
        </div>
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
      </section>

      {/* Work */}
      {/* <section id="work" className="scroll-mt-20 py-12 sm:py-16">
        <SectionHeading title="Selected work" text="A few projects that show how I think and build." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => <ProjectCard key={p.title} project={p} />)}
        </div>
      </section> */}

      {/* Skills */}
      <section id="skills" className="scroll-mt-20 py-12 sm:py-16">
        <SectionHeading title="What I work with" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((g) => (
            <div key={g.group} className="rounded-3xl border border-line bg-white p-5 sm:rounded-4xl sm:p-8">
              <h3 className="text-lg font-bold sm:text-xl">{g.group}</h3>
              <p className="mb-4 mt-1 text-sm text-ink-soft sm:mb-5">{g.note}</p>
              <div className="flex flex-wrap gap-2">
                {g.items.map((i) => <Pill key={i} tone={g.tone}>{i}</Pill>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="scroll-mt-20 py-12 sm:py-16">
        <SectionHeading title="Experience" />
        <div className="space-y-4">
          {experience.map((e) => (
            <div key={e.role + e.org} className="rounded-3xl border border-line bg-white p-5 sm:rounded-4xl sm:p-8">
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
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-20 py-12 sm:py-16">
        <div className="rounded-3xl bg-blush p-6 sm:rounded-4xl sm:p-12">
          <SectionHeading title="About me" />
          <div className="max-w-2xl space-y-4 text-sm leading-relaxed text-ink-soft sm:text-base">
            {about.map((p) => <p key={p}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* Contact */}
<section id="contact" className="scroll-mt-24 py-12 sm:py-16">
  <SectionHeading
    title="Let’s work together"
    text="Have a role or a project in mind? Contact me."
  />
  <div className="flex flex-wrap items-start gap-3">
    <Button href={`mailto:${profile.email}`}>{profile.email}</Button>
    <Button href="https://github.com/Amagrey" variant="soft">GitHub</Button>
  </div>
</section>
    </Container>
  );
}