"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-neutral-200">
      {/* Top utility bar — desktop only */}
      <div className="hidden md:block border-b border-neutral-100">
        <div className="mx-auto max-w-7xl px-6 h-10 flex items-center justify-end gap-4 text-xs text-neutral-600">
          <Link href="/help" className="hover:text-neutral-900">
            Help Center
          </Link>
          <Link href="/updates" className="hover:text-neutral-900">
            Updates
          </Link>
          <Link href="/mytickets" className="hover:text-neutral-900">
            Find my tickets
          </Link>
          <Link
            href="/signin"
            className="font-semibold text-neutral-900 hover:text-brand"
          >
            Sign in
          </Link>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto max-w-7xl px-4 md:px-6 h-16 flex items-center gap-4 md:gap-8">
        {/* Hamburger — mobile only */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden -ml-1 inline-flex h-10 w-10 items-center justify-center rounded-md text-neutral-800 hover:bg-neutral-100"
        >
          {open ? (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>

        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span
            aria-hidden
            className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-brand text-white font-bold"
          >
            ล
          </span>
          <span className="text-xl font-semibold tracking-tight">
            life in <span className="text-brand">CNX</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-700">
          <Link href="/events" className="hover:text-brand">
            Find Events
          </Link>
          <Link href="/create" className="hover:text-brand">
            Create Events
          </Link>
          <Link href="/resources" className="hover:text-brand">
            Organizer Hub
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-3 w-full max-w-md">
          <div className="relative flex-1 hidden sm:block">
            <span
              aria-hidden
              className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
            >
              🔍
            </span>
            <input
              type="search"
              placeholder="Search events in Chiang Mai"
              className="w-full rounded-full border border-neutral-300 bg-neutral-50 py-2 pl-9 pr-3 text-sm focus:border-brand focus:bg-white focus:outline-none"
            />
          </div>
          <Link
            href="/create"
            className="hidden md:inline-flex shrink-0 items-center rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark transition"
          >
            Create event
          </Link>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <div className="px-4 py-4 space-y-4">
            <div className="relative sm:hidden">
              <span
                aria-hidden
                className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
              >
                🔍
              </span>
              <input
                type="search"
                placeholder="Search events in Chiang Mai"
                className="w-full rounded-full border border-neutral-300 bg-neutral-50 py-2 pl-9 pr-3 text-sm focus:border-brand focus:bg-white focus:outline-none"
              />
            </div>

            <nav className="flex flex-col text-base font-medium text-neutral-800">
              <Link
                href="/events"
                onClick={() => setOpen(false)}
                className="py-2 border-b border-neutral-100"
              >
                Find Events
              </Link>
              <Link
                href="/create"
                onClick={() => setOpen(false)}
                className="py-2 border-b border-neutral-100"
              >
                Create Events
              </Link>
              <Link
                href="/resources"
                onClick={() => setOpen(false)}
                className="py-2 border-b border-neutral-100"
              >
                Organizer Hub
              </Link>
            </nav>

            <div className="flex flex-col gap-2 pt-2 text-sm text-neutral-700">
              <Link href="/help" onClick={() => setOpen(false)} className="py-1">
                Help Center
              </Link>
              <Link href="/updates" onClick={() => setOpen(false)} className="py-1">
                Updates
              </Link>
              <Link href="/mytickets" onClick={() => setOpen(false)} className="py-1">
                Find my tickets
              </Link>
              <Link
                href="/signin"
                onClick={() => setOpen(false)}
                className="py-1 font-semibold text-neutral-900"
              >
                Sign in
              </Link>
            </div>

            <Link
              href="/create"
              onClick={() => setOpen(false)}
              className="block w-full text-center rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-white"
            >
              Create event
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}