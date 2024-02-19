import { CategoriesSelector } from "@audiophile/components/CategoriesSelector/CategoriesSelector";
import { TheBest } from "@audiophile/components/TheBest/TheBest";
import { getAllProducts } from "@audiophile/services/productService";
import Image from "next/image";
import { useEffect } from "react";

import {
  MainProductContainer,
  MainProductColumn,
  MainButton,
  HomeSpeakerContainer,
  ProductTitleSecondary,
  ProductButtonSecondary,
  HomeProductDouble,
  HomeEarphoneContainer
} from './Home.styles';
import { HeroText, HeroTitle } from "@audiophile/components/HomeHero/HomeHero.styles";
import { useRouter } from "next/router";

export const HomeView = () => {
  const router = useRouter();

  useEffect(() => {
    getAllProducts()
    .catch((e) => {
      console.log(e);
    })
  }, []);

    return (
        <>
            <CategoriesSelector />
            <MainProductContainer>
              <Image src='/home/desktop/image-speaker-zx9.png' width={420} height={493} alt="ZX9 SPEAKER" />
              <MainProductColumn>
                <HeroTitle>ZX9 SPEAKER</HeroTitle>
                <HeroText>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</HeroText>
                <MainButton onClick={() => router.push('/product/zx9-speaker')}>SEE PRODUCT</MainButton>
              </MainProductColumn>
              
            </MainProductContainer>
            <HomeSpeakerContainer>
              <ProductTitleSecondary>ZX7 SPEAKER</ProductTitleSecondary>
              <ProductButtonSecondary onClick={() => router.push('/product/zx7-speaker')}>SEE PRODUCT</ProductButtonSecondary>
            </HomeSpeakerContainer>
            <HomeProductDouble>
              <Image src='/home/desktop/image-earphones-yx1.jpg' width={540} height={320} alt="YX1 EARPHONES" />
              <HomeEarphoneContainer>
                <ProductTitleSecondary>YX1 EARPHONES</ProductTitleSecondary>
                <ProductButtonSecondary onClick={() => router.push('/product/yx1-earphones')}>SEE PRODUCT</ProductButtonSecondary>
              </HomeEarphoneContainer>
            </HomeProductDouble>
            <TheBest />
        </>
    );
};