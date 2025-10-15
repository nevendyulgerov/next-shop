import type { ProductModel } from "@/components/products/types";

export const getProducts = async (): Promise<ProductModel[]> => {
  const result = await fetch("https://dummyjson.com/products");
  const data: { products: ProductModel[] } = await result.json();
  return data.products;
};
