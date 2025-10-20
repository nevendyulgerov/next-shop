import { useCallback, useMemo } from "react";
import { useLocalStorage } from "usehooks-ts";
import type {
  ProductModel,
  ProductWithQuantityModel,
} from "@/components/products/types";

export const useCart = () => {
  const [products, setProducts] = useLocalStorage<ProductModel[]>(
    "next-shop-cart",
    [],
  );

  const addProduct = useCallback(
    (product: ProductModel) => {
      const nextProducts = [...products, product];
      setProducts(nextProducts);
    },
    [products, setProducts],
  );

  const removeProduct = useCallback(
    (product: ProductModel) => {
      const nextProducts = products.filter((p) => p.id !== product.id);
      setProducts(nextProducts);
    },
    [products, setProducts],
  );

  const removeSingleProduct = useCallback(
    (product: ProductModel) => {
      const productIndex = products.findLastIndex((p) => p.id === product.id);
      const nextProducts = products.filter(
        (_, index) => index !== productIndex,
      );
      setProducts(nextProducts);
    },
    [products, setProducts],
  );

  const getProductsByQuantity = useCallback(() => {
    return products.reduce((acc: ProductWithQuantityModel[], product) => {
      const matchIndex = acc.findIndex((p) => p.id === product.id);

      if (matchIndex > -1) {
        acc[matchIndex].quantity += 1;
      } else {
        acc.push({
          ...product,
          quantity: 1,
        });
      }

      return acc;
    }, []);
  }, [products]);

  return useMemo(
    () => ({
      products,
      addProduct,
      removeProduct,
      removeSingleProduct,
      getProductsByQuantity,
    }),
    [
      products,
      addProduct,
      removeProduct,
      removeSingleProduct,
      getProductsByQuantity,
    ],
  );
};
