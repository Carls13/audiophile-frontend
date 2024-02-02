import { BLACK, THEME_GRAY, WHITE } from "@audiophile/theme/colors.theme";
import { DESKTOP_X_PADDING } from "@audiophile/theme/spacing.theme";
import styled from "styled-components";

export const BlackHeroContainer = styled.div`
    background-color: ${BLACK};
    height: 250px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

export const HR = styled.hr`
    padding: 0 ${DESKTOP_X_PADDING};
    border: 1px solid ${THEME_GRAY};
    width: 50%;
    display: block;
    margin-bottom: 0;
`;

export const Title = styled.h1`
    color: ${WHITE};
    font-family: Manrope;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 44px;
    letter-spacing: 2px;
    display: block;
    margin: auto;
`;