import { BLACK, GRAY, ORANGE, THEME_GRAY, WHITE } from "@audiophile/theme/colors.theme";
import { DESKTOP_X_PADDING, MOBILE_X_PADDING, TABLET_X_PADDING } from "@audiophile/theme/spacing.theme";
import styled from "styled-components";

export const MainProductContainer = styled.div`
    margin: 50px ${DESKTOP_X_PADDING};
    display: flex;
    background: url('/home/desktop/pattern-circles.svg'), linear-gradient(${ORANGE}, ${ORANGE});
    background-repeat: no-repeat;
    gap: 80px;
    height: 560px;
    padding-top: 50px;
    padding-left: 100px;

    img {
        display: block;
        margin-top: auto;
    }

    @media screen and (max-width: 1200px) {
        margin: 50px ${TABLET_X_PADDING};
        flex-direction: column;
        gap: 20px;
        padding: 20px;

        img {
            margin: auto;
            width: 197px;
            height: auto;
        }
    }

    @media screen and (max-width: 600px) {
        margin: 25px ${MOBILE_X_PADDING};

        img {
        }
    }
`;

export const MainProductColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    padding-right: 80px;

    @media screen and (max-width: 1200px) {
        padding: 0;
        align-items: center;
        width: 50%;
        margin-left: 25%;
        text-align: center;
        padding-bottom: 50px;
    }
`;

export const MainButton = styled.button`
    width: 160px;
    height: 48px;
    flex-shrink: 0;
    background: transparent;
    text-align: center;
    font-family: Manrope;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
    outline: none;
    border: 1px solid ${BLACK};
    color: ${WHITE};
    background: ${BLACK};

    &:hover {
        color: ${WHITE};
        background: ${GRAY};
        border: 1px solid ${GRAY};
    }
    `;

export const HomeSpeakerContainer = styled.div`
    margin: 50px ${DESKTOP_X_PADDING};
    padding-left: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: url('/home/desktop/image-speaker-zx7.jpg');
    background-size: cover;
    gap: 20px;
    height: 320px;

    @media screen and (max-width: 1200px) {
        background: url('/home/tablet/image-speaker-zx7.jpg');
        margin: 50px ${TABLET_X_PADDING};
    }

    @media screen and (max-width: 600px) {
        background: url('/home/mobile/image-speaker-zx7.jpg');
        background-size: contain;
        margin: 25px ${MOBILE_X_PADDING};
    }
`;

export const ProductTitleSecondary = styled.h3`
    color: ${BLACK};

    font-family: Manrope;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 1.429px;
    text-transform: uppercase;
`;

export const ProductButtonSecondary = styled.button`
    width: 160px;
    height: 48px;
    flex-shrink: 0;
    background: transparent;
    text-align: center;
    color: ${BLACK};
    font-family: Manrope;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
    outline: none;
    border: 1px solid ${BLACK};

    &:hover {
        color: ${WHITE};
        background: ${BLACK};
    }
`;

export const HomeProductDouble = styled.div`
    display: grid;
    margin: 50px ${DESKTOP_X_PADDING};
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;

    img {
        border-radius: 8px;
    }

    @media screen and (max-width: 1200px) {
        margin: 50px ${TABLET_X_PADDING};

        img {
            max-width: 100%;
        }
    }

    @media screen and (max-width: 600px) {
        grid-template-columns: 1fr;
        margin: 25px ${MOBILE_X_PADDING};
    }
`;

export const HomeEarphoneContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    background: ${THEME_GRAY};
    padding-left: 50px;
    border-radius: 8px;

    @media screen and (max-width: 600px) {
        padding: 30px 20px;
    }
`;