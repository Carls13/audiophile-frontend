import Image from "next/image";

import {
    CategoriesContainer,
    CategoryCard,
    CategoryTitle,
    TextContainer,
    CategoryText
} from './CategoriesSelector.styles';
import { useRouter } from "next/router";

export const CategoriesSelector = () => {
    const router = useRouter();

    return (
        <CategoriesContainer>
            <CategoryCard>
                <Image className="category-image" src='/shared/desktop/image-category-thumbnail-headphones.png' alt="Headphones" width={122.947} height={160} />
                <CategoryTitle>HEADPHONES</CategoryTitle>
                <TextContainer onClick={() => router.push('/headphones')}>
                    <CategoryText>SHOP</CategoryText>
                    <Image src='/shared/desktop/icon-arrow-right.svg' alt="Icon right" width={5} height={10} />
                </TextContainer>
            </CategoryCard>
            <CategoryCard>
                <Image className="category-image" src='/shared/desktop/image-category-thumbnail-speakers.png' alt="Speakers" width={122.947} height={160} />
                <CategoryTitle>SPEAKERS</CategoryTitle>
                <TextContainer onClick={() => router.push('/speakers')}>
                    <CategoryText>SHOP</CategoryText>
                    <Image src='/shared/desktop/icon-arrow-right.svg' alt="Icon right" width={5} height={10} />
                </TextContainer>
            </CategoryCard>
            <CategoryCard>
                <Image className="category-image" src='/shared/desktop/image-category-thumbnail-earphones.png' alt="Earphones" width={122.947} height={160} />
                <CategoryTitle>EARPHONES</CategoryTitle>
                <TextContainer onClick={() => router.push('/earphones')}>
                    <CategoryText>SHOP</CategoryText>
                    <Image src='/shared/desktop/icon-arrow-right.svg' alt="Icon right" width={5} height={10} />
                </TextContainer>
            </CategoryCard>
        </CategoriesContainer>
    );
};