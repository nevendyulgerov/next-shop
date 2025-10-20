import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProduct } from "@/components/products/actions";
import { SingleProduct } from "@/components/products/single-product";
import type { ProductModel } from "@/components/products/types";

interface ProductPageProps {
  params: Promise<{
    id: number;
  }>;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = await getProduct(id);

  return {
    title: product?.title ?? "Product",
  };
}

export default async function ProductPage(props: ProductPageProps) {
  const { id } = await props.params;
  let product: ProductModel;

  try {
    product = await getProduct(id);
  } catch (_) {
    notFound();
  }

  return <SingleProduct product={product} />;
}
