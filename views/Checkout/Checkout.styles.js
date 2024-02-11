import { BLACK, ERROR, ORANGE, THEME_GRAY, WHITE } from "@audiophile/theme/colors.theme";
import { DESKTOP_X_PADDING, MOBILE_X_PADDING, TABLET_X_PADDING } from "@audiophile/theme/spacing.theme";
import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
    margin: 30px ${DESKTOP_X_PADDING};
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 30px;

    @media screen and (max-width: 1200px) {
        margin: 30px ${TABLET_X_PADDING};
        grid-template-columns: 1fr;
    }
    
    @media screen and (max-width: 600px) {
        margin: 30px ${MOBILE_X_PADDING};
    }
`;

export const CheckoutContainer = styled.div`
    background-color: ${WHITE};
    border-radius: 8px;
    padding: 54px 48px;
    display: flex;
    flex-direction: column;
    gap: 31px;

    @media screen and (max-width: 600px) {
        padding: 20px;
    }
`;

export const CheckoutTitle = styled.h2`
    color: ${BLACK};

    font-family: Manrope;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 1.143px;
    text-transform: uppercase;
`;

export const SectionTitle = styled.h6`
    color: ${ORANGE};

    font-family: Manrope;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0.929px;
    text-transform: uppercase;
`;

export const SummaryContainer = styled.div`
    background-color: ${WHITE};
    border-radius: 8px;
    padding: 54px 48px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    height: 500px;

    button {
        width: 100%;
    }

    @media screen and (max-width: 1200px) {
        height: auto;
    }
`;

export const SummaryTitle = styled.h4`
    color: ${BLACK};

    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.286px;
    text-transform: uppercase;
`;

export const CheckoutAmount = styled.span`
    color: ${BLACK};

    text-align: right;
    font-family: Manrope;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
    margin-left: auto;
`;

export const DoubleColumnContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;

    @media screen and (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

export const SingleColumnContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const LabelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
`;

export const Label = styled.label`
    color: ${BLACK};

    font-family: Manrope;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
`;

export const ErrorMessage = styled.label`
    color: ${ERROR};

    font-family: Manrope;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
`;

export const Input = styled.input`
    background-color: transparent;
    border-radius: 8px;
    border: 2px solid ${THEME_GRAY};
    padding-left: 20px;
    color: ${BLACK};
    font-family: Manrope;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    outline: none;
    height: 56px;

    &::placeholder {
        color: ${THEME_GRAY};
        font-family: Manrope;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: 26px;
    }
`;

export const OptionContainer = styled.div`
    background-color: transparent;
    border-radius: 8px;
    border: 2px solid ${THEME_GRAY};
    padding-left: 20px;
    height: 56px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 20px;
    position: relative;
`;

export const RadioButtonLabel = styled.label`
    position: absolute;
    top: 25%;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: white;
    border: 1px solid #ccc;
`;

export const Radio = styled.input`
    width: 20px;
    height: 20px;
    opacity: 0;
    z-index: 1;
    
    &:hover ~ ${RadioButtonLabel} {
        background: #ccc;
        &::after {
            content: circle;
          display: block;
          color: white;
          width: 12px;
          height: 12px;
          margin: 4px;
        }
      }
      &:checked + ${OptionContainer} {
        background: ${ORANGE};
        border: 2px solid ${ORANGE};
      }
      &:checked + ${RadioButtonLabel} {
        background: ${ORANGE};
        border: 1px solid ${ORANGE};
        &::after {
        content: circle;
          display: block;
          color: white;
          width: 12px;
          height: 12px;
          margin: 4px;
        }
      }
`;

export const RadioLabel = styled.span`
    color: ${BLACK};

    font-family: Manrope;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
`;

export const CashOnDeliveryContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 32px;
`;

export const CashOnDeliveryText = styled.p`
    color: ${BLACK};

    font-family: Manrope;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
`;  