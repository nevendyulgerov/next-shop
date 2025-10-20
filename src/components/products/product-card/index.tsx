"use client";

import Image from "next/image";
import NextLink from "next/link";
import { type FC, useCallback } from "react";
import { AddProductToCartButton } from "@/components/products/add-product-to-cart-button";
import { ProductRating } from "@/components/products/product-rating";
import type { ProductModel } from "@/components/products/types";
import { useCart } from "@/hooks/use-cart";

interface ProductCardProps {
  product: ProductModel;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const [mainImage] = product.images;
  const { addProduct } = useCart();

  const onAddProductToCart = useCallback(() => {
    addProduct(product);
  }, [product, addProduct]);

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="h-56 w-full">
        <Image
          className="mx-auto"
          src={mainImage}
          alt="Product"
          width={200}
          height={200}
        />
      </div>

      <div className="pt-6">
        <NextLink
          href={`/products/${product.id}`}
          className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
        >
          {product.title}
        </NextLink>

        <div className="mt-2 flex items-center gap-2">
          <ProductRating rating={product.rating} />

          <p className="text-sm font-medium text-gray-900 dark:text-white">
            ({product.rating.toFixed(1)})
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
            ${product.price}
          </p>

          <AddProductToCartButton onClick={onAddProductToCart} />
        </div>
      </div>
    </div>
  );
};
