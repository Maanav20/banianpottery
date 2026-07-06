// Plain data used by MCP tools. No Vite/asset imports — this must be
// import-safe on Deno (Supabase Edge runtime) since it's bundled into the MCP
// function at build time.

export type CatalogProduct = {
  id: number;
  name: string;
  height?: string;
  width?: string;
  length?: string;
  weight?: string;
  status: "available" | "sold-out" | "defect";
};

export const catalog: CatalogProduct[] = [
  { id: 1, name: "Blue Pot (Underwater)", height: "30 cm", width: "11 cm", weight: "1.9 kg", status: "available" },
  { id: 2, name: "Misfit (Red Pot)", height: "17 cm", width: "9 cm", weight: "650 g", status: "available" },
  { id: 3, name: "Misfit (Blue Pot)", height: "16 cm", width: "9 cm", weight: "650 g", status: "available" },
  { id: 4, name: "Small Coiling Pot A", height: "12 cm", width: "4 cm", weight: "300 g", status: "available" },
  { id: 5, name: "Small Coiling Pot B", height: "12 cm", width: "5 cm", weight: "300 g", status: "available" },
  { id: 6, name: "Small Coiling Pot C", height: "12 cm", width: "5 cm", weight: "300 g", status: "available" },
  { id: 7, name: "Small Coiling Pot D", height: "12 cm", width: "5 cm", weight: "300 g", status: "available" },
  { id: 8, name: "Small Coiling Pot E", height: "12 cm", width: "5 cm", weight: "300 g", status: "available" },
  { id: 9, name: "Slab Bowl", height: "6 cm", width: "22 cm", weight: "600 g", status: "available" },
  { id: 10, name: "Trinklit Plate", height: "1.5 cm", width: "14 cm", weight: "150 g", status: "available" },
  { id: 11, name: "Salad Bowl", height: "6.3 cm", width: "15.5 cm", weight: "450 g", status: "available" },
  { id: 12, name: "Dessert Plate", height: "2.5 cm", width: "16.5 cm", weight: "250 g", status: "available" },
  { id: 13, name: "Envelope Card Holder A", height: "5.5 cm", width: "9.3 cm", weight: "210 g", status: "available" },
  { id: 14, name: "Envelope Card Holder B", height: "5.5 cm", width: "9.3 cm", weight: "210 g", status: "available" },
  { id: 15, name: "Envelope Card Holder C", height: "5.5 cm", width: "9.3 cm", weight: "210 g", status: "available" },
  { id: 16, name: "Envelope Card Holder D", height: "5.5 cm", width: "9.3 cm", weight: "210 g", status: "available" },
  { id: 17, name: "Envelope Polaroid A", height: "4.4 cm", width: "7 cm", weight: "110 g", status: "available" },
  { id: 18, name: "Envelope Polaroid B", height: "4.4 cm", width: "7 cm", weight: "110 g", status: "available" },
  { id: 19, name: "Envelope Polaroid C", height: "4.4 cm", width: "7 cm", weight: "110 g", status: "available" },
  { id: 20, name: "Dip Bowl", height: "4 cm", width: "9 cm", weight: "150 g", status: "available" },
  { id: 21, name: "Autumn Field Pot", height: "39 cm", width: "21.3 cm", weight: "3.6 kg", status: "available" },
  { id: 22, name: "Very Big Envelope", height: "6.7 cm", width: "14.5 cm", length: "30 cm", weight: "600 g", status: "available" },
  { id: 23, name: "Dewed Daffodil", height: "42 cm", width: "20 cm", weight: "4 kg", status: "available" },
  { id: 24, name: "Lavender (Big)", height: "16.5 cm", width: "40 cm", weight: "1.3 kg", status: "available" },
  { id: 25, name: "Lavender (Small)", height: "17 cm", width: "11 cm", weight: "900 g", status: "available" },
  { id: 26, name: "Cup (60 ml)", height: "6.4 cm", weight: "100 g", status: "available" },
  { id: 27, name: "Coaster", width: "11.5 cm", weight: "200 g", status: "available" },
  { id: 28, name: "Wavy Bowl A (160 ml)", height: "6 – 6.5 cm", width: "19 cm", weight: "300 g", status: "available" },
  { id: 29, name: "Wavy Bowl B (160 ml)", height: "6 – 6.5 cm", width: "19 cm", weight: "300 g", status: "available" },
  { id: 30, name: "Green Cup (160 ml)", height: "8 cm", width: "8.5 cm", weight: "300 g", status: "available" },
  { id: 31, name: "Box A", height: "10.5 cm", width: "10.5 cm", weight: "800 g", status: "available" },
  { id: 32, name: "Still Life", height: "8 cm", width: "35 cm", weight: "790 g", status: "defect" },
  { id: 33, name: "Good Vibe", height: "9.5 cm", width: "9.5 cm", weight: "500 g", status: "available" },
  { id: 34, name: "Pastel Pot", height: "15.5 cm", width: "12 cm", weight: "1 kg", status: "available" },
  { id: 35, name: "Chocolate Flow", height: "13 cm", width: "9.5 cm", weight: "500 g", status: "available" },
  { id: 36, name: "Spoon Rest A", width: "14 cm", weight: "150 g", status: "available" },
  { id: 37, name: "Still Life Bowl", height: "7.5 – 15 cm", width: "25 cm", length: "32 cm", weight: "1.15 kg", status: "sold-out" },
  { id: 38, name: "Still Life Bowl", height: "8 – 13 cm", width: "20 cm", length: "27 cm", weight: "1.2 kg", status: "defect" },
  { id: 39, name: "Candle Dish", height: "3.5 cm", width: "14.5 cm", weight: "300 g", status: "available" },
  { id: 40, name: "Sunflower Tray", width: "12.5 cm", length: "23.5 cm", weight: "400 g", status: "available" },
  { id: 41, name: "Tray A", width: "12.5 cm", length: "23.5 cm", weight: "400 g", status: "defect" },
  { id: 42, name: "Green Big Pot", height: "32.5 cm", width: "27.5 cm", weight: "3 kg", status: "sold-out" },
  { id: 43, name: "Goblet Set – Pair (150 ml)", height: "12.5 cm", width: "8 cm", weight: "400 g", status: "defect" },
  { id: 44, name: "Tray B", width: "12.5 cm", length: "32.5 cm", weight: "400 g", status: "defect" },
  { id: 45, name: "Spoon Rest B", width: "14 cm", weight: "150 g", status: "available" },
];

export type Workshop = {
  name: string;
  hours: string;
  peoplePerSession: string;
  tagline: string;
  description: string;
  price: string;
};

export const workshops: Workshop[] = [
  {
    name: "Handbuilding Basics",
    hours: "3 hours",
    peoplePerSession: "up to 6",
    tagline: "Shape your first piece with your own hands.",
    description: "A beginner friendly session covering pinch, coil, and slab techniques. All clay, tools, and firing included.",
    price: "₹2,500 per person",
  },
  {
    name: "Wheel Throwing Intro",
    hours: "4 hours",
    peoplePerSession: "up to 4",
    tagline: "Center clay and pull your first cup on the wheel.",
    description: "Guided time on the wheel with a small group. Take home two of your favorite fired pieces.",
    price: "₹3,500 per person",
  },
  {
    name: "Glazing and Finishing",
    hours: "2 hours",
    peoplePerSession: "up to 8",
    tagline: "Bring color and character to bisqueware.",
    description: "Learn dipping, brushing, and layering techniques on studio bisqueware. Ideal add on after a build session.",
    price: "₹1,800 per person",
  },
];

export const studioInfo = {
  name: "Banian Pottery",
  about:
    "Banian Pottery is a small handcrafted ceramics studio offering original stoneware pieces, custom commissions, and hands on pottery workshops.",
  contact: "Reach out via the Contact page on banianpottery.lovable.app for commissions, workshop bookings, and studio visits.",
};
