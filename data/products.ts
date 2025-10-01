export type Product = {
  id: string
  title: string
  description: string
  basePriceEur: number
  image: string
  slug: string
}

export const products: Product[] = [
  {
    id: "mug-classic",
    title: "كوب كلاسيك 330ml",
    description: "سيراميك عالي الجودة يصلح للطباعة الحرارية. آمن للغسالة.",
    basePriceEur: 12,
    image: "/images/mugs/bild.jpg",
    slug: "classic-330ml",
  },
  {
    id: "mug-magic",
    title: "كوب سحري يتغير لونه",
    description: "يظهر التصميم مع السخونة. هدية مميزة.",
    basePriceEur: 15,
    image: "/images/mugs/bild.jpg",
    slug: "magic-330ml",
  },
  {
    id: "mug-travel",
    title: "كوب سفر بغطاء",
    description: "ستانلس ستيل مزدوج الجدار. يحافظ على الحرارة.",
    basePriceEur: 19,
    image: "/images/mugs/bild.jpg",
    slug: "travel-400ml",
  },
  {
    id: "mug-heart",
    title: "كوب بمقبض قلب",
    description: "رومانسي ولطيف للتقديم.",
    basePriceEur: 14,
    image: "/images/mugs/bild.jpg",
    slug: "heart-330ml",
  },
  {
    id: "mug-glass",
    title: "كوب زجاجي شفاف",
    description: "زجاج مقسّى مناسب للمشروبات الباردة والساخنة.",
    basePriceEur: 13,
    image: "/images/mugs/bild.jpg",
    slug: "glass-350ml",
  },
  {
    id: "mug-thermo",
    title: "ترموس حافظ للحرارة",
    description: "سعة 500ml عملي للسفر.",
    basePriceEur: 22,
    image: "/images/mugs/bild.jpg",
    slug: "thermo-500ml",
  },
]
