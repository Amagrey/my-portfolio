"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { profile } from "@/components/lib/data";

const links = [
  { label: "Work", href: "/#work" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 pt-4">
      <Container>
        <nav className="relative rounded-3xl border border-line bg-white/90 px-5 py-3 backdrop-blur">
          <div className="flex items-center justify-between">
            <Link href="/" className="font-extrabold">{profile.name}</Link>

            {/* Desktop links */}
            <ul className="hidden gap-1 text-sm font-medium text-ink-soft md:flex">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="rounded-full px-3 py-1.5 transition hover:bg-blush hover:text-brand-dark">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label="Toggle menu"
              className="rounded-full bg-blush px-4 py-1.5 text-sm font-semibold text-brand-dark md:hidden"
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>

          {/* Mobile links */}
          {open && (
            <ul className="mt-3 grid gap-1 border-t border-line pt-3 text-sm font-medium md:hidden">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-3 py-2 hover:bg-blush"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </Container>
    </header>
  );
}