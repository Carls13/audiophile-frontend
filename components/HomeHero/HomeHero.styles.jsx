import { WHITE } from "@audiophile/theme/colors.theme";
import { DESKTOP_X_PADDING } from "@audiophile/theme/spacing.theme";
import styled from "styled-components";

export const HomeHeroContainer = styled.div`
    background-image: url('/home/desktop/image-hero.jpg');
    height: 100vh;
    background-size: cover;
    background-position: 50px;

    hr {
        padding-left: ${DESKTOP_X_PADDING};
        position: relative;
        left: ${DESKTOP_X_PADDING};
    }

    @media screen and (max-width: 1200px) {
        background-image: url('/home/tablet/image-header.jpg');
        background-position: -200px;
    }
`;

export const HeroColumn = styled.div`
    margin-left: ${DESKTOP_X_PADDING};
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    gap: 20px;
    width: 25%;

    @media screen and (max-width: 1200px) {
        width: 50%;
        align-items: center;
        margin-left: 25%;
        text-align: center;
    }
`;

export const HeroNew = styled.span`
    color: ${WHITE};

    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 10px;
    text-transform: uppercase;
`;


export const HeroTitle = styled.h1`
    color: ${WHITE};

    font-family: Manrope;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 44px;
    letter-spacing: 1.429px;
    text-transform: uppercase;
`;

export const HeroText = styled.p`
    color: ${WHITE};

    font-family: Manrope;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px;
`;