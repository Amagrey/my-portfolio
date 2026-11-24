export type Tone = "pink" | "blue" | "green" | "amber" | "violet" | "gray";

export const toneStyles: Record<Tone, string> = {
  pink: "bg-pink-100 text-pink-700",
  blue: "bg-blue-100 text-blue-700",
  green: "bg-emerald-100 text-emerald-700",
  amber: "bg-amber-100 text-amber-800",
  violet: "bg-violet-100 text-violet-700",
  gray: "bg-gray-100 text-gray-700",
};

export default function Pill({
  children, tone = "gray", className = "",
}: { children: React.ReactNode; tone?: Tone; className?: string }) {
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${toneStyles[tone]} ${className}`}>
      {children}
    </span>
  );
}