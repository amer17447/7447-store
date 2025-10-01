"use client"
import Link from "next/link"
import Image from "next/image"
import { ShoppingBag, MessageSquare } from "lucide-react"

export default function Nav() {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container flex items-center gap-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="MugLab" width={32} height={32} />
          <span className="font-semibold text-lg">MugLab</span>
        </Link>
        <nav className="ms-auto flex items-center gap-4 text-sm">
          <Link href="/products" className="hover:underline">المنتجات</Link>
          <Link href="/contact" className="hover:underline">تواصل</Link>
          <a href="#whatsapp" className="btn btn-primary flex gap-2">
            <MessageSquare size={16} />
            اطلب عبر الواتساب
          </a>
        </nav>
      </div>
    </header>
  )
}
