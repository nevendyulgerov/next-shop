"use server";

import type { ProductModel } from "@/components/products/types";

/**
 * @description Gets all available products from the API
 * @returns ProductModel[]
 */
export const getProducts = async (): Promise<ProductModel[]> => {
  const result = await fetch("https://dummyjson.com/products");
  const data: { products: ProductModel[] } = await result.json();
  return data.products;
};

/**
 * @description Gets a single product by given id from the API
 * @param id
 * @returns ProductModel
 */
export const getProduct = async (id: number): Promise<ProductModel> => {
  const result = await fetch(`https://dummyjson.com/products/${id}`);
  return (await result.json()) as ProductModel;
};
