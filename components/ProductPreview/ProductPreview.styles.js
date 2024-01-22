import { BLACK, ORANGE, PINK, WHITE } from "@audiophile/theme/colors.theme";
import { DESKTOP_X_PADDING } from "@audiophile/theme/spacing.theme";
import styled from "styled-components";

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
    gap: 50px;
    margin: 50px ${DESKTOP_X_PADDING};
`;

export const ProductColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const NewText = styled.span`
    color: ${ORANGE};

    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 10px;
    text-transform: uppercase;
`;

export const ProductTitle = styled.h1`
    color: ${BLACK};

    font-family: Manrope;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 44px;
    letter-spacing: 1.429px;
    text-transform: uppercase;
`;

export const ProductText = styled.p`
    color: ${BLACK};

    font-family: Manrope;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px;
    margin: 30px 0;
`;

export const ProductButton = styled.button`
    width: 160px;
    height: 48px;
    flex-shrink: 0;
    background: ${ORANGE};
    text-align: center;
    color: ${WHITE};
    font-family: Manrope;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
    outline: none;
    border: none;

    &:hover {
        background: ${PINK};
    }
`;