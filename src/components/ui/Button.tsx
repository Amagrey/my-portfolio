import Link from "next/link";

const variants = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  soft: "bg-white text-ink border border-brand hover:border-brand",
};

export default function Button({
  href, children, variant = "primary",
}: { href: string; children: React.ReactNode; variant?: keyof typeof variants }) {
  return (
    <Link
      href={href}
      className={`inline-flex max-w-full items-center break-all rounded-full px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 sm:px-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}