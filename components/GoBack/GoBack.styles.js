import { ORANGE } from "@audiophile/theme/colors.theme";
import { DESKTOP_X_PADDING } from "@audiophile/theme/spacing.theme";
import styled from "styled-components";

export const GoBackContainer = styled.div`
    color: #000;

    font-family: Manrope;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    margin: 38px ${DESKTOP_X_PADDING};
    cursor: pointer;

    &:hover {
        color: ${ORANGE};
    }
`;