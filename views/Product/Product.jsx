import Image from "next/image";
import { useRouter } from "next/router";

import { 
    ProductContainer,
    ProductColumn,
    NewText,
    ProductTitle,
    ProductText,
    ProductButton
 } from '@audiophile/components/ProductPreview/ProductPreview.styles';

import {
    ProductPrice,
    AddToCartContainer,
    AmountContainer,
    SignButton,
    Amount,
    GalleryGrid,
    BackgroundDiv,
    ProductInfoContainer,
    FeaturesColumn,
    ColumnTitle,
    FeaturesText,
    InTheBoxColumn,
    FeaturesContainer,
    FeatureContainer,
    FeatureAmount,
    FeatureText,
    OthersContainer,
    OthersRow,
    OtherContainer,
    OtherTitle
} from './Product.styles';
import { useState } from "react";
import { CategoriesSelector } from "@audiophile/components/CategoriesSelector/CategoriesSelector";
import { TheBest } from "@audiophile/components/TheBest/TheBest";
import { addItemToCart } from "@audiophile/services/cartService";
import { GoBack } from "@audiophile/components/GoBack/GoBack";

export const ProductView = ({ product }) => {
    const [amount, setAmount] = useState(1);
    const { name, new: isNew, description, image, features, others, price, gallery, includes } = product;

    const { first, second, third } = gallery;

    const firstImageSrc = first.desktop.replace('./assets/', '/'); 
    const secondImageSrc = second.desktop.replace('./assets/', '/'); 
    const thirdImageSrc = third.desktop.replace('./assets/', '/'); 

    const { desktop } = image;

    const productImageSrc = desktop.replace('./assets/', '/');

    const router = useRouter();

    return (
        <>
            <GoBack/>
            <ProductContainer reverse={false}>
                <Image src={productImageSrc} width={540} height={560} alt={name} />
                <ProductColumn>
                    {isNew && <NewText>NEW PRODUCT</NewText>}
                    <ProductTitle>{name}</ProductTitle>
                    <ProductText>{description}</ProductText>
                    <ProductPrice>${price}</ProductPrice>
                    <AddToCartContainer>
                        <AmountContainer>
                            <SignButton onClick={() => setAmount(amount === 0 ? 0 : amount - 1)}>-</SignButton>
                            <Amount>{amount}</Amount>
                            <SignButton onClick={() => setAmount(amount + 1)}>+</SignButton>
                        </AmountContainer>
                        <ProductButton onClick={() => addItemToCart({
                            ...product,
                            amount
                        })}>ADD TO CART</ProductButton>
                    </AddToCartContainer>
                </ProductColumn>
            </ProductContainer>
            <ProductInfoContainer>
                <FeaturesColumn>
                    <ColumnTitle>FEATURES</ColumnTitle>
                    <FeaturesText dangerouslySetInnerHTML={{
                        __html: features.replace('\n', '<br/> <br/>')
                    }}/>
                </FeaturesColumn>
                <InTheBoxColumn>
                    <ColumnTitle>in the box</ColumnTitle>
                    <FeaturesContainer>
                        {
                            includes.map((feature, i) => {
                                return <FeatureContainer key={i}>
                                    <FeatureAmount>{feature.quantity}x</FeatureAmount>
                                    <FeatureText>{feature.item}</FeatureText>
                                </FeatureContainer>;
                            })
                        }
                    </FeaturesContainer>
                </InTheBoxColumn>
            </ProductInfoContainer>
            <GalleryGrid>
                <BackgroundDiv backgroundSrc={firstImageSrc} />
                <BackgroundDiv backgroundSrc={secondImageSrc} />
                <BackgroundDiv backgroundSrc={thirdImageSrc} />
            </GalleryGrid>
            <OthersContainer>
                <ColumnTitle>you may also like</ColumnTitle>
                <OthersRow>
                    {
                        others.map((other, i) => {
                            const otherSrc = other.image.desktop.replace('./assets/', '/');

                            return (
                                <OtherContainer>
                                    <Image src={otherSrc} width={350} height={318} alt={other.name} />
                                    <OtherTitle>{other.name}</OtherTitle>
                                    <ProductButton onClick={() => router.push(`/product/${other.slug}`)}>SEE PRODUCT</ProductButton>
                                </OtherContainer>
                            );
                        })
                    }
                </OthersRow>
            </OthersContainer>
            <CategoriesSelector />
            <TheBest />
        </>
        
    );
}