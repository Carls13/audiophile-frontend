import { BLACK, GRAY, WHITE } from "@audiophile/theme/colors.theme";
import { MOBILE_X_PADDING } from "@audiophile/theme/spacing.theme";
import styled from "styled-components";

export const ConfirmationContainer = styled.div`
    position: absolute;
    top: 100px;
    left: calc(50vw - 270px);
    width: 540px;
    height: auto;
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
        top: 50px;
        padding: 20px 10px;
    }
`;

export const ThankYou = styled.h1`
    color: ${BLACK};

    font-family: Manrope;
    font-size: 32px;
    line-height: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.286px;
    text-transform: uppercase;
`;

export const ConfirmationText = styled.p`
    color: ${BLACK};
    font-family: Manrope;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
`;

export const ConfirmationTotalContainer = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    border-radius: 8px;

    @media screen and (max-width: 600px) {
        display: grid;
        grid-template-columns: 1fr;
        width: 100%;
    }
`;

export const SummaryTotalContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const ExpandableLabel = styled.div`
    cursor: pointer;
    color: ${BLACK};

    font-family: Manrope;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;

    @media screen and (max-width: 600px) {
        text-align: center;
    }
`;

export const TotalPriceContainer = styled.div`
    background-color: ${BLACK};
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    border-radius: 0 8px 8px 0;

    @media screen and (max-width: 600px) {
        border-radius: 0 0 8px 8px;
    }
`;

export const TotalPriceLabel = styled.span`
    color: ${GRAY};

    font-family: Manrope;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px;
`;

export const TotalPriceValue = styled.h6`
    color: ${WHITE};
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
`;