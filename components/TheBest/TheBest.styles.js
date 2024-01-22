import { BLACK, ORANGE } from "@audiophile/theme/colors.theme";
import { DESKTOP_X_PADDING } from "@audiophile/theme/spacing.theme";
import styled from "styled-components";

export const TheBestContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 75px;
    margin: 50px ${DESKTOP_X_PADDING};
`;

export const TheBestColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 32px;
`;

export const TheBestTitle = styled.h1`
    color: ${BLACK};
    font-family: Manrope;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 44px;
    letter-spacing: 1.429px;
    text-transform: uppercase;
`;

export const Orange = styled.span`
    color: ${ORANGE};
`;

export const TheBestText = styled.p`
    color: ${BLACK};

    font-family: Manrope;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px;
`;