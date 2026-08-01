import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 mt-12">
      <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
        <div className="col-span-2 md:col-span-2">
          <div className="flex items-center gap-2">
            <span
              aria-hidden
              className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-brand text-white font-bold"
            >
              ล
            </span>
            <span className="text-lg font-semibold text-white">
              life in CNX
            </span>
          </div>
          <p className="mt-3 text-neutral-400 max-w-xs">
            The local guide to events, markets, and experiences happening across
            Chiang Mai.
          </p>
        </div>

        <FooterCol
          title="Use Life in CNX"
          links={[
            ["Find events", "/events"],
            ["Create event", "/create"],
            ["Help center", "/help"],
            ["Find my tickets", "/mytickets"],
          ]}
        />
        <FooterCol
          title="Neighborhoods"
          links={[
            ["Nimman", "/d/nimman"],
            ["Old City", "/d/old-city"],
            ["Riverside", "/d/riverside"],
            ["Santitham", "/d/santitham"],
          ]}
        />
        <FooterCol
          title="Company"
          links={[
            ["About", "/about"],
            ["Press", "/press"],
            ["Contact", "/contact"],
            ["Careers", "/careers"],
          ]}
        />
      </div>
      <div className="border-t border-neutral-800">
        <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Life in CNX. Made in Chiang Mai.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-neutral-300">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-neutral-300">
              Terms
            </Link>
            <Link href="/cookies" className="hover:text-neutral-300">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: [string, string][];
}) {
  return (
    <div>
      <p className="text-white font-semibold mb-3">{title}</p>
      <ul className="space-y-2">
        {links.map(([label, href]) => (
          <li key={label}>
            <Link href={href} className="hover:text-white">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}