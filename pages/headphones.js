import { getProductsByCategory } from "@audiophile/services/productService";
import { HeadphonesView } from "@audiophile/views/Headphones/Headphones";

export async function getServerSideProps() {
    // Fetch data from external API
    const response = await getProductsByCategory('headphones');
    const products = response.data;

    // Pass data to the page via props
    return {
        props: {
            products,
            title: "HEADPHONES"
        }
    };
};

export default function Headphones({ products }) {
    return (
        <HeadphonesView products={products} />
    );
};
