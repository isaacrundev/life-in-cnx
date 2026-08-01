import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  destinations,
  trending,
  featured,
  categoriesLinks,
  marketSchedule,
  heroImage,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative">
          <div className="relative h-[420px] md:h-[520px] w-full overflow-hidden">
            <Image
              src={heroImage}
              alt="Chiang Mai temple at sunset"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10" />
            <div className="absolute inset-0 flex items-center">
              <div className="mx-auto max-w-7xl w-full px-6">
                <p className="text-white/90 text-sm md:text-base font-medium tracking-wide uppercase mb-3">
                  This week in Chiang Mai
                </p>
                <h1 className="text-white text-4xl md:text-6xl font-semibold leading-tight max-w-2xl">
                  Music, markets, and temple nights.
                </h1>
                <p className="text-white/90 text-base md:text-lg mt-4 max-w-xl">
                  Hand-picked events happening across the old city, Nimman, and
                  the riverside.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="#trending"
                    className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-white font-semibold hover:bg-[#d9573a] transition"
                  >
                    Browse events
                  </Link>
                  <Link
                    href="#destinations"
                    className="inline-flex items-center rounded-full bg-white/95 px-6 py-3 text-neutral-900 font-semibold hover:bg-white transition"
                  >
                    Explore neighborhoods
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market schedule */}
        <section className="bg-white py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-6">
              <h3 className="text-xl md:text-2xl font-semibold">
                Markets — weekly schedule
              </h3>
              <p className="text-sm text-neutral-600 mt-1">
                Chiang Mai street markets and when to find them.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {marketSchedule.map((group) => (
                <div
                  key={group.title}
                  className="rounded-lg border border-neutral-200 bg-white p-5"
                >
                  <h4 className="text-xs font-semibold tracking-wider uppercase text-brand mb-4">
                    {group.title}
                  </h4>
                  <ul className="space-y-4">
                    {group.markets.map((m) => (
                      <li key={m.name}>
                        <p className="font-medium text-neutral-900">{m.name}</p>
                        <p className="text-xs text-neutral-500 mt-0.5">
                          {m.hours}
                        </p>
                        <a
                          href={m.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-brand hover:underline mt-1 inline-block"
                        >
                          Open in Google Maps →
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Browse by category */}
        <section className="bg-[#fafaf7] py-10">
          <div className="mx-auto max-w-7xl px-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-5">
              Browse by category
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {categoriesLinks.map((c) => (
                <Link
                  key={c.label}
                  href={`/c/${c.slug}`}
                  className="rounded-lg border border-neutral-200 bg-white p-4 hover:border-brand hover:shadow-sm transition"
                >
                  <span className="text-2xl" aria-hidden>
                    {c.icon}
                  </span>
                  <p className="mt-2 font-semibold text-neutral-900">
                    {c.label}
                  </p>
                  <p className="text-xs text-neutral-500">{c.count} events</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Top destinations */}
        <section id="destinations" className="bg-white py-10">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-end justify-between mb-5">
              <h3 className="text-xl md:text-2xl font-semibold">
                Top neighborhoods in Chiang Mai
              </h3>
              <Link
                href="/destinations"
                className="text-sm font-medium text-brand hover:underline"
              >
                See all
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {destinations.map((d) => (
                <Link
                  key={d.name}
                  href={`/d/${d.slug}`}
                  className="group relative aspect-[4/5] overflow-hidden rounded-xl"
                >
                  <Image
                    src={d.image}
                    alt={d.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-lg font-semibold">{d.name}</p>
                    <p className="text-xs text-white/80">{d.count} events</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Trending events */}
        <section id="trending" className="bg-[#fafaf7] py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-end justify-between mb-5">
              <h3 className="text-xl md:text-2xl font-semibold">
                Trending in Chiang Mai
              </h3>
              <Link
                href="/events"
                className="text-sm font-medium text-brand hover:underline"
              >
                See all
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {trending.map((e) => (
                <EventCard key={e.title} event={e} />
              ))}
            </div>
          </div>
        </section>

        {/* Featured / promoted band */}
        <section className="bg-white py-12">
          <div className="mx-auto max-w-7xl px-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-5">
              Featured this month
            </h3>
            <div className="grid md:grid-cols-2 gap-5">
              {featured.map((f) => (
                <Link
                  key={f.title}
                  href={`/e/${f.slug}`}
                  className="group relative aspect-[16/9] overflow-hidden rounded-xl"
                >
                  <Image
                    src={f.image}
                    alt={f.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="inline-block bg-accent text-white text-xs font-semibold px-2 py-1 rounded mb-2">
                      {f.tag}
                    </span>
                    <p className="text-2xl font-semibold">{f.title}</p>
                    <p className="text-sm text-white/85 mt-1">{f.subtitle}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-brand py-14">
          <div className="mx-auto max-w-7xl px-6 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-semibold">
              Hosting something in Chiang Mai?
            </h3>
            <p className="mt-2 text-white/85 max-w-xl mx-auto">
              Reach locals and travelers with free ticketing, QR check-in, and
              payout in THB.
            </p>
            <Link
              href="/create"
              className="mt-6 inline-flex items-center rounded-full bg-accent px-6 py-3 font-semibold hover:bg-[#d9573a] transition"
            >
              Create your event
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function EventCard({
  event,
}: {
  event: { title: string; date: string; venue: string; price: string; image: string; tag?: string };
}) {
  return (
    <Link
      href="#"
      className="group flex flex-col overflow-hidden rounded-xl bg-white border border-neutral-200 hover:shadow-md transition"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />
        {event.tag && (
          <span className="absolute top-2 left-2 bg-white/95 text-neutral-900 text-xs font-semibold px-2 py-1 rounded">
            {event.tag}
          </span>
        )}
      </div>
      <div className="p-3 flex flex-col gap-1">
        <p className="text-xs text-brand font-semibold">{event.date}</p>
        <p className="font-semibold text-neutral-900 line-clamp-2">
          {event.title}
        </p>
        <p className="text-xs text-neutral-500">{event.venue}</p>
        <p className="text-sm font-semibold mt-1">{event.price}</p>
      </div>
    </Link>
  );
}