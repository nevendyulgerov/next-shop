"use client";

import type { FC } from "react";
import { CartDropdown } from "@/components/cart-dropdown";
import { Logo } from "@/components/logo";

export const Header: FC = () => {
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="https://flowbite.com" className="flex items-center">
            <Logo className="dark:fill-white" />
          </a>
          <CartDropdown />
        </div>
      </nav>
    </header>
  );
};
