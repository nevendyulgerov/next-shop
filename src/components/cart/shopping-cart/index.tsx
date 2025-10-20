"use client";

import Image from "next/image";
import NextLink from "next/link";
import { type FC, useEffect, useState } from "react";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { useCart } from "@/hooks/use-cart";

export const ShoppingCart: FC = () => {
  const {
    products,
    addProduct,
    getProductsByQuantity,
    removeProduct,
    removeSingleProduct,
  } = useCart();
  const [productsWithQuantities, setProductsWithQuantities] = useState(
    getProductsByQuantity,
  );
  const totalPrice = productsWithQuantities.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  // biome-ignore lint/correctness/useExhaustiveDependencies: Update products by quantity whenever products change
  useEffect(() => {
    setProductsWithQuantities(getProductsByQuantity());
  }, [products, getProductsByQuantity]);

  return (
    <section className="flex flex-col min-h-[calc(100vh-12rem)] px-4 py-4">
      <div className="pb-16 px-4 mx-auto 2xl:px-0 w-[1248px] max-w-full">
        <Breadcrumbs
          breadcrumbs={[
            {
              label: "Shopping Cart",
              path: "/shopping-cart",
            },
          ]}
        />

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 antialiased mt-4">
          <div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                Shopping Cart
              </h2>

              <div className="mt-6 sm:mt-8 md:gap-6 xl:gap-8">
                <div className="flex flex-col gap-4">
                  {productsWithQuantities.map((product) => {
                    const [mainImage] = product.images;
                    return (
                      <div key={product.id} className="flex-none">
                        <div className="space-y-6">
                          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                            <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                              <div className="shrink-0 md:order-1">
                                <Image
                                  className="mx-auto"
                                  src={mainImage}
                                  alt="Product"
                                  width={100}
                                  height={100}
                                />
                              </div>

                              <label
                                htmlFor="counter-input"
                                className="sr-only"
                              >
                                Choose quantity:
                              </label>
                              <div className="flex items-center justify-between md:order-3 md:justify-end">
                                <div className="flex items-center">
                                  <button
                                    type="button"
                                    id="decrement-button"
                                    data-input-counter-decrement="counter-input"
                                    className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                                    onClick={() => {
                                      if (product.quantity > 1) {
                                        removeSingleProduct(product);
                                      }
                                    }}
                                  >
                                    <svg
                                      className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 18 2"
                                    >
                                      <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 1h16"
                                      />
                                    </svg>
                                  </button>
                                  <input
                                    type="text"
                                    id="counter-input"
                                    className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                                    placeholder=""
                                    value={product.quantity}
                                    required
                                    readOnly
                                  />
                                  <button
                                    type="button"
                                    id="increment-button"
                                    data-input-counter-increment="counter-input"
                                    className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                                    onClick={() => {
                                      addProduct(product);
                                    }}
                                  >
                                    <svg
                                      className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 18 18"
                                    >
                                      <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 1v16M1 9h16"
                                      />
                                    </svg>
                                  </button>
                                </div>
                                <div className="text-end md:order-4 md:w-32">
                                  <p className="text-base font-bold text-gray-900 dark:text-white">
                                    ${product.price}
                                  </p>
                                </div>
                              </div>

                              <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                <NextLink
                                  href={`/products/${product.id}`}
                                  className="text-base font-medium text-gray-900 hover:underline dark:text-white"
                                >
                                  {product.title}
                                </NextLink>

                                <div className="flex items-center gap-4">
                                  <button
                                    type="button"
                                    className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                                    onClick={() => removeProduct(product)}
                                  >
                                    <svg
                                      className="me-1.5 h-5 w-5"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18 17.94 6M18 18 6.06 6"
                                      />
                                    </svg>
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {productsWithQuantities.length > 0 ? (
                  <div className="mt-6 flex-1 space-y-6">
                    <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                      <p className="text-xl font-semibold text-gray-900 dark:text-white">
                        Order summary
                      </p>

                      <div className="space-y-4">
                        <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                          <dt className="text-base font-bold text-gray-900 dark:text-white">
                            Total
                          </dt>
                          <dd className="text-base font-bold text-gray-900 dark:text-white">
                            ${totalPrice.toFixed(2)}
                          </dd>
                        </dl>
                      </div>

                      <div className="flex items-center justify-center gap-2">
                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                          {" "}
                          or{" "}
                        </span>
                        <NextLink
                          href="/"
                          className="inline-flex items-center gap-2 text-sm font-medium underline hover:no-underline text-gray-500 dark:text-gray-400"
                        >
                          Continue Shopping
                          <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 12H5m14 0-4 4m4-4-4-4"
                            />
                          </svg>
                        </NextLink>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-md font-extrabold text-gray-900 dark:text-white">
                    There aren't any products in your shopping cart right now.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
