import "./globals.css"
import Nav from "@/components/Nav"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: process.env.STORE_NAME || "7447 Store",
  description: "كاسات مطبوعة حسب الطلب. اطلب عبر الواتساب.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <Nav />
        <main className="container py-8">
          {children}
        </main>
        <footer className="border-t mt-12">
          <div className="container py-8 text-sm text-gray-600">
            <p>© {new Date().getFullYear()} {process.env.STORE_NAME || "7447 Store"} — متجر تجريبي. الشراء يتم بالتواصل المباشر.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
