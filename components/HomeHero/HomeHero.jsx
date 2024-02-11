import { useRouter } from "next/router";
import { ProductButton } from "../ProductPreview/ProductPreview.styles";
import { HR } from "../SmallPageHero/SmallPageHero.styles";

import {
    HomeHeroContainer,
    HeroColumn,
    HeroNew,
    HeroTitle,
    HeroText
} from './HomeHero.styles';

export const HomeHero = ({ children }) => {
    const router = useRouter();

    return (
        <HomeHeroContainer>
            {children}
            <HeroColumn>
                <HeroNew>NEW PRODUCT</HeroNew>
                <HeroTitle>XX99 Mark II Headphones</HeroTitle>
                <HeroText>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</HeroText>
                <ProductButton onClick={() => router.push('/product/xx99-mark-two-headphones')}>SEE PRODUCT</ProductButton>
            </HeroColumn>
        </HomeHeroContainer>
    );
}