import { BLACK, ORANGE, THEME_GRAY } from "@audiophile/theme/colors.theme";
import { DESKTOP_X_PADDING, MOBILE_X_PADDING, TABLET_X_PADDING } from "@audiophile/theme/spacing.theme";
import styled from "styled-components";

export const ProductPrice = styled.span`
    color: ${BLACK};
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.286px;
    text-transform: uppercase;
`;

export const AddToCartContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin: 20px 0;

    @media screen and (max-width: 600px) {
        button {
            width: 100px;
        }
    }
`;

export const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: ${THEME_GRAY};
`;

export const SignButton = styled.div`
    color: ${BLACK};
    width: 35px;
    text-align: center;
    font-family: Manrope;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    padding: 15px;

    &:hover {
        filter: brightness(0.9);
    }

    @media screen and (max-width: 600px) {
        width: 15px;
    }
`;

export const ProductInfoContainer = styled.div`
    margin: 50px ${DESKTOP_X_PADDING};
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 40px;

    @media screen and (max-width: 1200px) {
        margin: 50px ${TABLET_X_PADDING};
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 600px) {
        margin: 38px ${MOBILE_X_PADDING};
    }
`;

export const FeaturesColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`;

export const ColumnTitle = styled.h6`
    color: ${BLACK};

    font-family: Manrope;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px; /* 112.5% */
    letter-spacing: 1.143px;
    text-transform: uppercase;
`;

export const FeaturesText = styled.p`
    color: ${BLACK};

    font-family: Manrope;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px;
`;

export const InTheBoxColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media screen and (max-width: 1200px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
    }
`;

export const FeaturesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const FeatureContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 21px;
`;

export const FeatureAmount = styled.span`
    color: ${ORANGE};

    font-family: Manrope;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px; 
`;

export const FeatureText = styled.span`
    color: ${BLACK};

    font-family: Manrope;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px;
`;

export const OthersContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 64px;
    margin: 50px ${DESKTOP_X_PADDING};

    @media screen and (max-width: 1200px) {
        margin: 50px ${TABLET_X_PADDING};
    }

    @media screen and (max-width: 600px) {
        margin: 50px ${MOBILE_X_PADDING};
    }
`;

export const OthersRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;

    @media screen and (max-width: 1200px) {
        margin: 50px ${MOBILE_X_PADDING};
        grid-template-columns: 1fr;
    }
`;

export const OtherContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    img {
        width: 100%;
    }
`;

export const OtherTitle = styled.h6`
    color: ${BLACK};
    text-align: center;
    font-family: Manrope;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.714px;
    text-transform: uppercase;
`;

export const GalleryGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 30px;
    margin: 20px ${DESKTOP_X_PADDING};

    img {
        width: 100%;
    }

    @media screen and (max-width: 1200px) {
        margin: 20px ${TABLET_X_PADDING};
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 600px) {
        margin: 20px ${MOBILE_X_PADDING};
        grid-template-columns: 1fr;
    }   
`;

export const BackgroundDiv = styled.div`
    background-image: url('${props => props.backgroundSrc}');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 280px;

    &:nth-child(2) {
        grid-column: 2;
        grid-row: 1 /    span 2;
        height: 592px;
    }

    @media screen and (max-width: 600px) {
        &:nth-child(2) {
            grid-column: unset;
            grid-row: unset;
        }
    } 
`;

export const Amount = styled.div`
    color: ${BLACK};
    width: 50px;

    text-align: center;
    font-family: Manrope;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 15px;

    @media screen and (max-width: 600px) {
        width: 20px;
    }
`;