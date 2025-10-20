"use client";

import Image from "next/image";
import { type FC, useCallback } from "react";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { AddProductToCartButton } from "@/components/products/add-product-to-cart-button";
import { ProductRating } from "@/components/products/product-rating";
import type { ProductModel } from "@/components/products/types";
import { useCart } from "@/hooks/use-cart";

interface SingleProductProps {
  product: ProductModel;
}

export const SingleProduct: FC<SingleProductProps> = ({ product }) => {
  const [mainImage] = product.images;
  const { addProduct } = useCart();
  const onAddProductToCart = useCallback(() => {
    addProduct(product);
  }, [product, addProduct]);

  return (
    <section className="flex flex-col min-h-[calc(100vh-12rem)] px-4 py-4">
      <div className="pb-16 max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <Breadcrumbs
          breadcrumbs={[
            {
              label: product.title,
              path: `/products/${product.id}`,
            },
          ]}
        />

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 antialiased mt-4">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
              <Image
                className="mx-auto"
                src={mainImage}
                alt="Product"
                width={200}
                height={200}
              />
            </div>

            <div className="mt-6 sm:mt-8 lg:mt-0">
              <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                {product.title}
              </h1>

              <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                  ${product.price}
                </p>

                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                  <ProductRating rating={product.rating} />

                  <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                    ({product.rating.toFixed(1)})
                  </p>
                </div>
              </div>

              <div className="mt-4 text-gray-500 dark:text-gray-400">
                {product.discountPercentage}% Off
              </div>

              <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-500 mr-4" />

              <p className="mb-6 text-gray-500 dark:text-gray-400">
                {product.description}
              </p>

              <div className="mt-6">
                <AddProductToCartButton onClick={onAddProductToCart} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
