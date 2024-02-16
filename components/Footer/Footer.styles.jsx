import { BLACK, DARK_GREY, WHITE } from "@audiophile/theme/colors.theme";
import styled from "styled-components";
import { DESKTOP_X_PADDING, TABLET_X_PADDING, MOBILE_X_PADDING } from "@audiophile/theme/spacing.theme";

export const FooterContainer = styled.footer`
    background-color: ${BLACK};
    padding: 72px ${DESKTOP_X_PADDING};
    display: flex;
    flex-direction: column;
    gap: 31px;
    position: relative;
    margin-top: 50px;

    hr {
        width: 100%;
    }

    @media screen and (max-width: 1200px) {
        padding: 72px ${TABLET_X_PADDING};
    }
    
    @media screen and (max-width: 600px) {
        padding: 72px ${MOBILE_X_PADDING};
    }
`;

export const FooterFirstRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        gap: 15px;
    }
`;

export const FooterOptions = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        text-align: center;
    }
`;

export const FooterSecondRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        gap: 15px;
    }
`;

export const FooterLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 50%;

    @media screen and (max-width: 600px) {
        width: 100%;
    }
`;

export const FooterInfo = styled.span`
    color: ${WHITE};

    font-family: Manrope;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px;
`; 

export const FooterCopyright = styled.span`
    color: ${WHITE};

    font-family: Manrope;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
`; 

export const SocialContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    @media screen and (max-width: 600px) {
       justify-content: center;
       align-items: center;
    }
`;

export const SocialRow = styled.div`
    display: flex;
    gap: 10px;
`;