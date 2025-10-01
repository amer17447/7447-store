import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
  const waText = encodeURIComponent("مرحبا، أريد استفسار عن طباعة الكاسات.")
  const waHref = waNumber ? `https://wa.me/${waNumber}?text=${waText}` : "/contact"

  return (
    <section className="space-y-8">
      <div className="rounded-3xl bg-gray-50 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl md:text-4xl font-extrabold">كاسات مطبوعة بتصاميمك</h1>
          <p className="text-gray-700">اطلب الآن عبر الواتساب. الدفع والتسليم بالاتفاق.</p>
          <div className="flex gap-3">
            <Link href="/products" className="btn btn-primary">تصفّح المنتجات</Link>
            <Link href={waHref} className="btn border" id="whatsapp" target="_blank" rel="noopener">استفسر عبر واتساب</Link>
          </div>
        </div>
        <div className="relative w-full max-w-md aspect-square">
          <Image src="/images/mugs/bild.jpg" alt="Mug" fill className="object-contain" />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">لماذا تختارنا</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <li className="card p-4">جودة طباعة واضحة ومقاومة للغسيل</li>
          <li className="card p-4">تصميم حسب الطلب خلال 24 ساعة</li>
          <li className="card p-4">أسعار مناسبة للعائلات والهدايا</li>
        </ul>
      </div>
    </section>
  )
}
