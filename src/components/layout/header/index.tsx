import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import { CartDropdown } from "@/components/cart/cart-dropdown";
import { ThemeModeButton } from "@/components/layout/theme-mode-button";
import favicon from "./favicon.svg";

export const Header: FC = () => {
  return (
    <nav className="sticky top-0 shadow-lg bg-white border-gray-200 px-4 lg:px-6 dark:bg-gray-800">
      <div className="flex flex-wrap items-center justify-between mx-auto max-w-screen-xl py-2">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image src={favicon} alt="Logo" width={60} height={60} priority />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900 dark:text-white">
            Next Shop
          </span>
        </Link>

        <div className="flex items-center w-auto">
          <CartDropdown />
          <ThemeModeButton />
        </div>
      </div>
    </nav>
  );
};
