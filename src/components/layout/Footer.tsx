import Container from "@/components/ui/Container";
import { profile } from "@/components/lib/data";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-white py-10">
      <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <p className="text-sm text-ink-soft">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js and Tailwind.
        </p>
        <ul className="flex gap-5 text-sm font-semibold">
          {profile.socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} className="transition hover:text-brand">{s.label}</a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}