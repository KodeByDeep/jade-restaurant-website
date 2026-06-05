export type DietaryLabel = "Vegan" | "Vegetarian" | "Gluten-Free" | "Spicy" | "Seasonal";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  labels: DietaryLabel[];
  badge?: "Seasonal" | "Unavailable" | "Chef's Pick";
  image?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Menu" | "Interior" | "People";
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface Award {
  title: string;
  year: string;
  body: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const menuItems: MenuItem[] = [
  {
    id: "scallion",
    name: "Scallion Pancakes",
    description: "Hand-rolled crispy flatbread with house chili oil and sea salt.",
    price: "£6",
    category: "Appetisers",
    labels: ["Vegetarian"],
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80",
  },
  {
    id: "chicken",
    name: "Sichuan Chili Oil Chicken",
    description: "Poached chicken, numbing Sichuan peppercorns, and fiery chili oil.",
    price: "£11",
    category: "Appetisers",
    labels: ["Gluten-Free", "Spicy"],
    badge: "Chef's Pick",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80",
  },
  {
    id: "veg-dumplings",
    name: "Jade Vegetable Dumplings",
    description: "Handmade wrappers filled with house-mixed greens and ginger.",
    price: "£8",
    category: "Appetisers",
    labels: ["Vegan"],
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&q=80",
  },
  {
    id: "peking-duck",
    name: "Whole Roasted Peking Duck",
    description:
      "Three-part service: crispy skin with plum sauce, stir-fried meat with mixed vegetables, and rich duck bone broth. Serves 2–3.",
    price: "£54",
    category: "Signature Dishes",
    labels: ["Gluten-Free"],
    badge: "Chef's Pick",
    image: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=600&q=80",
  },
  {
    id: "mapo-tofu",
    name: "Mapo Tofu",
    description: "Silken tofu in spicy garlic-chili sauce with ground pork and Sichuan peppercorns.",
    price: "£13",
    category: "Signature Dishes",
    labels: ["Spicy"],
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80",
  },
  {
    id: "hand-noodles",
    name: "Hand-Pulled Noodles with Lamb",
    description: "Fresh noodles served in cumin-scented broth with braised lamb and scallions.",
    price: "£14",
    category: "Signature Dishes",
    labels: [],
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80",
  },
  {
    id: "sea-bass",
    name: "Steamed Sea Bass",
    description: "Whole sea bass with ginger, scallion, and soy — a Cantonese classic.",
    price: "£28",
    category: "Signature Dishes",
    labels: ["Gluten-Free", "Seasonal"],
    badge: "Seasonal",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80",
  },
  {
    id: "sesame-balls",
    name: "Sesame Balls",
    description: "Crispy glutinous rice exterior filled with sweet red bean and sesame paste.",
    price: "£6",
    category: "Desserts",
    labels: ["Vegetarian"],
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&q=80",
  },
  {
    id: "lychee-panna-cotta",
    name: "Lychee & Jasmine Panna Cotta",
    description: "Silky custard with fresh lychee compote and jasmine floral notes.",
    price: "£8",
    category: "Desserts",
    labels: ["Vegetarian", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "peking-duck",
    title: "Peking Duck",
    category: "Menu",
    image: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=800&q=80",
  },
  {
    id: "dim-sum",
    title: "Dim Sum Selection",
    category: "Menu",
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&q=80",
  },
  {
    id: "noodles",
    title: "Hand-Pulled Noodles",
    category: "Menu",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80",
  },
  {
    id: "dining-room",
    title: "The Dining Room",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80",
  },
  {
    id: "bar",
    title: "The Bar",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80",
  },
  {
    id: "wok-station",
    title: "Wok Station",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  },
  {
    id: "chef-wei",
    title: "Chef Wei at Work",
    category: "People",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80",
  },
  {
    id: "team",
    title: "Our Team",
    category: "People",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Wei Chen",
    role: "Executive Chef",
    description:
      "Master of Sichuan fire techniques, trained in Chengdu for 20 years before bringing his craft to San Diego.",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80",
  },
  {
    name: "Lin Zhang",
    role: "Dim Sum & Pastry Chef",
    description:
      "Hand-rolling dumplings and crafting traditional pastries since childhood in Guangzhou.",
    image: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=400&q=80",
  },
  {
    name: "James Liu",
    role: "General Manager",
    description:
      "Ensuring warmth and care in every dining experience with 15 years in hospitality.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
];

export const awards: Award[] = [
  { title: "Michelin Bib Gourmand", year: "2025", body: "Michelin Guide" },
  { title: "Best Chinese Restaurant", year: "2024", body: "San Diego Food Awards" },
  { title: "James Beard Foundation Finalist", year: "2024", body: "James Beard Foundation" },
];

export const faqItems: FaqItem[] = [
  {
    question: "Do you accommodate dietary restrictions?",
    answer:
      "Yes. We offer vegan, vegetarian, and gluten-free options. Please inform your server or include dietary notes in your reservation. Our chef can also adapt dishes upon request.",
  },
  {
    question: "How far in advance should I reserve?",
    answer:
      "We recommend booking 7–14 days ahead for weekends and 2–3 days for weekdays. Last-minute availability is often available for smaller parties Monday–Thursday.",
  },
  {
    question: "Do you offer private dining?",
    answer:
      "Yes. We have dedicated banquet rooms for 8–50 guests with customisable menus. Contact us at +1 555-0123 or complete the contact form to enquire.",
  },
  {
    question: "What are your most popular dishes?",
    answer:
      "Our signature items are the Whole Roasted Peking Duck (3-part service), Hand-Pulled Noodles with Lamb, and our Weekend Dim Sum selection.",
  },
  {
    question: "Do you have a wine or beverage pairing menu?",
    answer:
      "We offer curated wine pairings, craft cocktails inspired by Asian flavours, and traditional teas. Ask your server for recommendations.",
  },
  {
    question: "Can we customise dishes or make substitutions?",
    answer:
      "Absolutely. Our kitchen is happy to accommodate preferences like heat level, protein swaps, or vegetable additions. Let your server know.",
  },
];

export const timeSlots = ["12:00 PM", "1:30 PM", "5:30 PM", "7:00 PM", "8:30 PM", "9:30 PM"];
export const fullyBookedSlots = ["8:30 PM"];
