import { getProductsByCategory } from "@audiophile/services/productService";
import { SpeakersView } from "@audiophile/views/Speakers/Speakers";

export async function getServerSideProps() {
    // Fetch data from external API
    const response = await getProductsByCategory('speakers');
    const products = response.data;

    // Pass data to the page via props
    return {
        props: {
            products
        }
    };
};

export default function Speakers({ products }) {
    return (
        <SpeakersView products={products} />
    );
};
