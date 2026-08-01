"use client";

import { useEffect, useRef, useState } from "react";

type Market = {
  name: string;
  hours: string;
  days: string[];
  mapUrl: string;
};

const DAYS = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"] as const;

export default function MarketCarousel({
  icon,
  title,
  items,
}: {
  icon: string;
  title: string;
  items: Market[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const update = () => {
    const el = ref.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    update();
    const el = ref.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollBy = (dir: "left" | "right") => {
    const el = ref.current;
    if (!el) return;
    const step = el.clientWidth * 0.8;
    el.scrollBy({ left: dir === "left" ? -step : step, behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex items-baseline justify-between mb-2.5">
        <h4 className="text-sm font-semibold text-neutral-700 flex items-center gap-2">
          <span aria-hidden>{icon}</span>
          {title}
          <span className="text-xs font-normal text-neutral-500">
            {items.length} market{items.length !== 1 ? "s" : ""}
          </span>
        </h4>
        <div className="hidden md:flex items-center gap-1">
          <button
            onClick={() => scrollBy("left")}
            disabled={!canLeft}
            aria-label="Scroll left"
            className="w-8 h-8 rounded-full border border-neutral-300 bg-white flex items-center justify-center text-neutral-700 hover:border-brand hover:text-brand disabled:opacity-30 disabled:cursor-not-allowed transition"
          >
            <span aria-hidden>‹</span>
          </button>
          <button
            onClick={() => scrollBy("right")}
            disabled={!canRight}
            aria-label="Scroll right"
            className="w-8 h-8 rounded-full border border-neutral-300 bg-white flex items-center justify-center text-neutral-700 hover:border-brand hover:text-brand disabled:opacity-30 disabled:cursor-not-allowed transition"
          >
            <span aria-hidden>›</span>
          </button>
        </div>
      </div>

      <div className="relative -mx-6 px-6">
        <div
          className={`pointer-events-none absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-white to-transparent z-10 transition-opacity ${
            canLeft ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`pointer-events-none absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-white to-transparent z-10 transition-opacity ${
            canRight ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          ref={ref}
          className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin"
        >
          {items.map((m) => (
            <div
              key={m.name}
              className="snap-start shrink-0 w-56 border border-neutral-200 rounded-xl p-4 bg-white hover:shadow-md hover:border-brand transition"
            >
              <p className="font-semibold text-neutral-900 text-sm leading-snug">
                {m.name}
              </p>
              <div className="flex items-center gap-1 mt-3">
                {DAYS.map((d) => {
                  const open = m.days.includes(d);
                  return (
                    <span
                      key={d}
                      title={`${d}${open ? " · open" : ""}`}
                      className={`w-5 h-5 rounded-full text-[9px] font-bold flex items-center justify-center ${
                        open
                          ? "bg-brand text-white"
                          : "bg-neutral-100 text-neutral-400"
                      }`}
                    >
                      {d[0].toUpperCase() + d[1]}
                    </span>
                  );
                })}
              </div>
              <p className="text-xs text-neutral-500 mt-3 leading-snug">
                {m.hours}
              </p>
              <a
                href={m.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-brand hover:underline mt-2 inline-flex items-center gap-1"
              >
                Open in Maps <span aria-hidden>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
