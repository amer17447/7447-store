import ProductCard from "@/components/ProductCard"
import { products } from "@/data/products"

export default function ProductsPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">unser produkte</h1>
      <div className="grid-products">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  )
}
