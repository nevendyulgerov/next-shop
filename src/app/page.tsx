import { notFound } from "next/navigation";
import { getProducts } from "@/components/products/actions";
import { ProductsGrid } from "@/components/products/products-grid";
import type { ProductModel } from "@/components/products/types";

export default async function Home() {
  let products: ProductModel[] = [];
  try {
    products = await getProducts();
  } catch (_) {
    notFound();
  }

  return (
    <main className="flex justify-center items-center min-h-full pb-16">
      <ProductsGrid products={products} />
    </main>
  );
}
