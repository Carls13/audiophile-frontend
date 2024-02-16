import { ORANGE, WHITE } from "@audiophile/theme/colors.theme";
import styled, { css } from "styled-components";

const activeStyle = css`
    color: ${ORANGE}!important;
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
        ${props => props.active ? activeStyle : null}
        text-decoration: none;
        &:hover {
            ${activeStyle}
        }
    }

    ${props => props.active ? activeStyle : null}

    @media screen and (max-width: 600px) {
        background: none;
        backdrop-filter: none;
    }
`;