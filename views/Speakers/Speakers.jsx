import { CategoriesSelector } from "@audiophile/components/CategoriesSelector/CategoriesSelector";
import { ProductPreview } from "@audiophile/components/ProductPreview/ProductPreview";
import { TheBest } from "@audiophile/components/TheBest/TheBest";

export const SpeakersView = ({ products }) => {
    return (
        <>
            {
                products.map((product, i) => {
                    return <ProductPreview product={product} reverse={(i % 2 ) === 1} />;
                })
            }
            <CategoriesSelector />
            <TheBest />
        </>
    );
};