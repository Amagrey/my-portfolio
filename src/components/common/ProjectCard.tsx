import Pill, { toneStyles } from "@/components/ui/Pill";
import type { Project } from "@/components/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  const card = (
    <>
      <div className={`flex h-44 items-end justify-between rounded-3xl p-4 ${toneStyles[project.tone]}`}>
        <Pill tone={project.tone} className="bg-white/70">{project.kind}</Pill>
        {!project.href && <Pill tone="gray" className="bg-white/70">Private client work</Pill>}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{project.blurb}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => <Pill key={t}>{t}</Pill>)}
        </div>
      </div>
    </>
  );

  const base = "flex flex-col rounded-4xl border border-line bg-white p-3";

  return project.href ? (
    <a href={project.href} className={`${base} transition hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-100`}>
      {card}
    </a>
  ) : (
    <div className={base}>{card}</div>
  );
}