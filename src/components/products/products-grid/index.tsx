import type { FC } from "react";
import { ProductCard } from "@/components/products/product-card";
import type { ProductModel } from "@/components/products/types";

interface ProductsGridProps {
  products: ProductModel[];
}

export const ProductsGrid: FC<ProductsGridProps> = ({ products }) => {
  return (
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl pt-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
