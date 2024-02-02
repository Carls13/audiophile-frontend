import { CategoriesSelector } from "@audiophile/components/CategoriesSelector/CategoriesSelector";
import { TheBest } from "@audiophile/components/TheBest/TheBest";
import { getAllProducts } from "@audiophile/services/productService";
import { useEffect } from "react";

export const HomeView = () => {
  useEffect(() => {
    getAllProducts()
    .catch((e) => {
      console.log(e);
    })
  }, []);

    return (
        <>
            <CategoriesSelector />
            <TheBest />
        </>
    );
};