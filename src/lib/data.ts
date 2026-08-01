export const categoriesLinks = [
  { label: "Social", slug: "social", icon: "🤝", count: 38 },
  { label: "Business & Startup", slug: "business", icon: "💼", count: 24 },
  { label: "AI & Tech", slug: "ai-tech", icon: "🤖", count: 19 },
  { label: "Wellness", slug: "wellness", icon: "🧘", count: 36 },
  { label: "Sports", slug: "sports", icon: "🏃", count: 27 },
  { label: "Learning", slug: "learning", icon: "📚", count: 33 },
  { label: "Hobbies", slug: "hobbies", icon: "🎨", count: 21 },
  { label: "Nightlife", slug: "nightlife", icon: "🎵", count: 22 },
];

// ponytail: reused from a small pool of verified-200 Unsplash IDs; swap for
// real Chiang Mai photography when assets land.
const IMG = {
  temple: "https://images.unsplash.com/photo-1528181304800-259b08848526",
  boats: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a",
  food: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  cooking: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136",
  mountains: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
  sax: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f",
  yoga: "https://images.unsplash.com/photo-1545205597-3d9d02c29597",
  muayThai: "https://images.unsplash.com/photo-1599058917212-d750089bc07e",
  cityNight: "https://images.unsplash.com/photo-1559030623-0226b1241edd",
  lanterns: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f",
  crowd: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69",
} as const;

const u = (k: keyof typeof IMG, w = 800) =>
  `${IMG[k]}?auto=format&fit=crop&w=${w}&q=80`;

export const destinations = [
  { name: "Nimman", slug: "nimman", count: 64, image: u("temple") },
  { name: "Old City", slug: "old-city", count: 51, image: u("cityNight") },
  { name: "Riverside", slug: "riverside", count: 33, image: u("boats") },
  { name: "Santitham", slug: "santitham", count: 27, image: u("food") },
];

export const heroImage = u("temple", 2000);

export const trending = [
  {
    title: "Sunday Walking Street Market",
    date: "Sun, Aug 4",
    venue: "Ratchadamnoen Rd · Old City",
    price: "Free",
    tag: "Popular",
    image: u("boats"),
  },
  {
    title: "Northern Thai Cooking Class",
    date: "Sat, Aug 10 · 10:00",
    venue: "Aunty's Kitchen · Nimman",
    price: "From ฿1,200",
    image: u("cooking"),
  },
  {
    title: "Doi Suthep Sunrise Hike",
    date: "Sun, Aug 11 · 04:30",
    venue: "Doi Suthep Trailhead",
    price: "฿450",
    tag: "Outdoor",
    image: u("mountains"),
  },
  {
    title: "Live Jazz at North Gate",
    date: "Fri, Aug 9 · 21:00",
    venue: "North Gate Jazz Co-op · Old City",
    price: "฿350",
    image: u("sax"),
  },
  {
    title: "Muay Thai Foundations (4-Week)",
    date: "Mon, Aug 12 · 18:00",
    venue: "Sityodtong Camp · Riverside",
    price: "From ฿3,800",
    tag: "Series",
    image: u("muayThai"),
  },
  {
    title: "Yi Peng Lantern Festival",
    date: "Fri, Nov 15",
    venue: "Multiple venues · Old City",
    price: "From ฿2,400",
    tag: "Festival",
    image: u("lanterns"),
  },
  {
    title: "Vinyasa Flow & Sound Bath",
    date: "Sat, Aug 10 · 08:00",
    venue: "Yoga Tree · Nimman",
    price: "฿650",
    image: u("yoga"),
  },
  {
    title: "Saturday Night Bazaar",
    date: "Sat, Aug 3 · 18:00",
    venue: "Wualai Rd · Old City",
    price: "Free",
    image: u("crowd"),
  },
];

export const featured = [
  {
    title: "Chiang Mai Design Week 2026",
    subtitle: "Aug 16–24 · 12 venues across the city",
    slug: "design-week-2026",
    tag: "Featured",
    image: u("crowd", 1600),
  },
  {
    title: "Lanna Food Festival",
    subtitle: "Aug 30 – Sep 1 · Tha Phae Gate",
    slug: "lanna-food-festival",
    tag: "New",
    image: u("food", 1600),
  },
];