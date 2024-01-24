import { getProductBySlug } from "@audiophile/services/productService";
import { ProductView } from "@audiophile/views/Product/Product";

export async function getServerSideProps(context) {
    const { slug } = context?.params;

    // Fetch data from external API
    const response = await getProductBySlug(slug);
    const product = response.data;

    // Pass data to the page via props
    return {
        props: {
            product
        }
    };
};

export default function Earphones({ product }) {
    return (
        <ProductView product={product} />
    );
};
