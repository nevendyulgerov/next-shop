"use client";

import NextLink from "next/link";
import { type FC, useCallback, useState } from "react";
import { useCart } from "@/hooks/use-cart";
import { useCloseOutside } from "@/hooks/use-close-outside";
import { cn } from "@/utils/common";

export const CartDropdown: FC = () => {
  const [active, setActive] = useState(false);
  const { products, removeProduct, getProductsByQuantity } = useCart();
  const productsWithQuantity = getProductsByQuantity();
  const onCloseOutside = useCallback(() => setActive(false), []);
  const refComponent = useCloseOutside<HTMLDivElement>(onCloseOutside);

  return (
    <div
      ref={refComponent}
      className="relative flex items-center lg:space-x-2 mr-2"
    >
      <button
        id="myCartDropdownButton1"
        data-dropdown-toggle="myCartDropdown1"
        type="button"
        className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
        onClick={() => {
          if (products.length === 0) {
            return;
          }
          setActive((value) => !value);
        }}
      >
        <span className="sr-only">Cart</span>
        <svg
          className="w-5 h-5 lg:me-1"
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
            d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
          />
        </svg>
        <span className="sm:flex">My Cart ({products.length})</span>
        <svg
          className="hidden sm:flex w-4 h-4 text-gray-900 dark:text-white ms-1"
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
            d="m19 9-7 7-7-7"
          />
        </svg>
      </button>

      <div
        id="myCartDropdown1"
        className={cn(
          "absolute top-full -left-full z-10 mx-auto w-[250px] space-y-4 overflow-hidden rounded-lg bg-white p-4 antialiased dark:bg-gray-700 shadow-2xl",
          !active && "hidden",
        )}
      >
        {productsWithQuantity.map((product) => (
          <div key={product.id}>
            <div className="relative">
              <div className="truncate pr-4">
                <NextLink
                  href={`/products/${product.id}`}
                  className="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline"
                  onClick={() => setActive(false)}
                >
                  {product.title}
                </NextLink>
              </div>

              <div className="mt-0.5 flex justify-between items-center">
                <p className="truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                  ${product.price}
                </p>

                <p className="text-sm font-normal leading-none text-gray-500 dark:text-gray-400 mt-2">
                  Qty: {product.quantity}
                </p>
              </div>

              <button
                data-tooltip-target="tooltipRemoveItem1a"
                type="button"
                className="absolute top-1 right-0 text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600"
                onClick={() => {
                  removeProduct(product);

                  if (products.length === 1) {
                    setActive(false);
                  }
                }}
              >
                <span className="sr-only"> Remove </span>
                <svg
                  className="h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}

        <NextLink
          href="/shopping-cart"
          title=""
          className="mt-2 inline-flex w-full items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => setActive(false)}
        >
          {" "}
          Proceed to Checkout{" "}
        </NextLink>
      </div>
    </div>
  );
};
