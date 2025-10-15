import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { getProducts } from "@/components/products/actions";
import { ProductCard } from "@/components/products/product-card";
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
    <>
      <Header />
      <main>
        <ProductsGrid products={products} />
      </main>
    </>
  );
}
