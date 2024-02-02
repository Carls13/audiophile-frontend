import { getProductsByCategory } from "@audiophile/services/productService";
import { EarphonesView } from "@audiophile/views/Earphones/Earphones";

export async function getServerSideProps() {
    // Fetch data from external API
    const response = await getProductsByCategory('earphones');
    const products = response.data;

    // Pass data to the page via props
    return {
        props: {
            products,
            title: "EARPHONES"
        }
    };
};

export default function Earphones({ products }) {
    return (
        <EarphonesView products={products}  />
    );
};
