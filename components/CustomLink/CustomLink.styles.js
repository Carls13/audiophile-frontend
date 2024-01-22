import { BLACK, LIGHT_PEACH, ORANGE, WHITE } from "@audiophile/theme/colors.theme";
import styled, { css } from "styled-components";

const activeStyle = css`
    color: ${ORANGE};
`;

export const Option = styled.span`
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px; /* 100% */
    letter-spacing: 2px;
    cursor: pointer;
    color: ${WHITE};
        
    a {
        color: ${WHITE};
        text-decoration: none;
        &:hover {
            ${activeStyle}
        }
    }

    &:nth-child(1) {
        padding-left: 120px;
    }
    
    &:nth-child(4) {
        padding-right: 65px;
    }

    ${props => props.active ? activeStyle : null}

    @media screen and (max-width: 600px) {
        background: none;
        backdrop-filter: none;

        &:nth-child(1) {
            padding-left: 0;
        }
       
        &:nth-child(4) {
            padding-right: 25px;
        }
    }
`;