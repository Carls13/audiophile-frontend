import { BLACK, THEME_GRAY } from "@audiophile/theme/colors.theme";
import { DESKTOP_X_PADDING, TABLET_X_PADDING } from "@audiophile/theme/spacing.theme";
import styled from "styled-components";

export const CategoriesContainer = styled.div`
    margin: 80px ${DESKTOP_X_PADDING};
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;

    @media screen and (max-width: 1200px) {
        margin: 80px ${TABLET_X_PADDING};
    }
`;

export const CategoryCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    background-color: ${THEME_GRAY};
    border-radius: 8px;
    padding: 30px;

    .category-image {
        margin-top: -70px;
        margin-bottom: -30px;        
    }
    
`;

export const CategoryTitle = styled.h6`
    color: ${BLACK};
    text-align: center;
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.286px;
    text-transform: uppercase;
`;

export const TextContainer = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
    cursor: pointer;
`;

export const CategoryText = styled.p`
    color: ${BLACK};

    font-family: Manrope;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
`;