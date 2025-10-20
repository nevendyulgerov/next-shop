import type { Metadata } from "next";
import { ShoppingCart } from "@/components/cart/shopping-cart";

export const metadata: Metadata = {
  title: "Shopping Cart",
};

export default function ShoppingCartPage() {
  return <ShoppingCart />;
}
