"use client"
import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/data/products"
import { MessageSquare } from "lucide-react"

const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER

function waLink(product: Product) {
  const text = encodeURIComponent(`مرحبا، أريد طلب ${product.title} (${product.slug}).`)
  return waNumber ? `https://wa.me/${waNumber}?text=${text}` : "/contact"
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="card h-full flex flex-col">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
        <Image src={product.image} alt={product.title} fill className="object-cover" />
      </div>
      <div className="card-body flex flex-col gap-3">
        <h3 className="font-semibold">{product.title}</h3>
        <p className="text-sm text-gray-600">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="badge">ابتداءً من {product.basePriceEur}€</span>
          <Link href={waLink(product)} className="btn btn-primary flex gap-2" target="_blank" rel="noopener">
            <MessageSquare size={16} />
            اطلب
          </Link>
        </div>
      </div>
    </div>
  )
}
