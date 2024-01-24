import Image from "next/image";
import { useRouter } from "next/router";

import { 
    ProductContainer,
    ProductColumn,
    NewText,
    ProductTitle,
    ProductText,
    ProductButton
 } from './ProductPreview.styles';

export const ProductPreview = ({ product, reverse }) => {
    const { slug, name, new: isNew, description, image } = product;

    const { desktop } = image;

    const imageSrc = desktop.replace('./assets/', '/');

    const router = useRouter();

    return (
        <ProductContainer reverse={reverse}>
            <Image src={imageSrc} width={540} height={560} alt={name} />
            <ProductColumn>
                {isNew && <NewText>NEW PRODUCT</NewText>}
                <ProductTitle>{name}</ProductTitle>
                <ProductText>{description}</ProductText>
                <ProductButton onClick={() => router.push(`/product/${slug}`)}>SEE PRODUCT</ProductButton>
            </ProductColumn>
        </ProductContainer>
    );
}