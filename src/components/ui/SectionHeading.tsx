export default function SectionHeading({ title, text }: { title: string; text?: string }) {
  return (
    <div className="mb-10 max-w-xl">
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
      {text && <p className="mt-3 text-ink-soft">{text}</p>}
    </div>
  );
}