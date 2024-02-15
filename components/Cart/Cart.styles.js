import { BLACK, ORANGE, THEME_BLACK, THEME_GRAY, WHITE } from "@audiophile/theme/colors.theme";
import { MOBILE_X_PADDING } from "@audiophile/theme/spacing.theme";
import styled from "styled-components";

export const DarkOverlay = styled.div`
    position: absolute;
    top: 100px;
    left: 0;
    width: 100%;
    height: 200vh;
    background: ${BLACK}88;
    z-index: 10;
    display: ${props => props.hidden ? 'none' : 'block'};

    @media screen and (max-width: 600px) {
        top: 90px;
    }
`;

export const CartContainer = styled.div`
    position: absolute;
    top: 100px;
    right: 150px;
    width: 377px;
    height: 488px;
    background: ${WHITE};
    display: ${props => props.hidden ? 'none' : 'flex'};
    flex-direction: column;
    border-radius: 8px;
    padding: 33px;
    gap: 15px;

    button {
        display: block;
        margin: 0 auto;
    }

    @media screen and (max-width: 600px) {
        left: ${0};
        max-width: calc(100vw - ${MOBILE_X_PADDING});
        width: calc(100vw - ${MOBILE_X_PADDING});
            // width: 300px;
        top: 50px;
        padding: 20px 10px;
    }
`;

export const CartHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const CartTitle = styled.h4`
    color: ${BLACK};

    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.286px;
    text-transform: uppercase;
`;

export const RemoveAll = styled.span`
    color: ${BLACK};

    font-family: Manrope;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px; /* 166.667% */
    text-decoration-line: underline;
    cursor: pointer;

    &:hover {
        color: ${ORANGE};
    }
`;

export const CartItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    gap: 12px;
`;

export const CartItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;

    .cart-item-amount div:nth-child(2n + 1) {
        width: 20px;
    }
`;

export const CartInfoColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CartItemName = styled.h6`
    color: ${BLACK};

    font-family: Manrope;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
`;

export const CartItemPrice = styled.p`
    color: ${THEME_BLACK};

    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px;
`;

export const TotalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: auto;
`;

export const TotalLabel = styled.span`
    color: ${BLACK};

    font-family: Manrope;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px;
`;

export const TotalValue = styled.h6`
    color: ${BLACK};
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
`;