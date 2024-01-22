import Image from "next/image";
import { CustomLink } from "../CustomLink/CustomLink";
import { FooterContainer, FooterFirstRow, FooterOptions, FooterSecondRow, FooterLeft, FooterInfo, FooterCopyright,  SocialRow } from "./Footer.styles";
import Link from "next/link";

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterFirstRow>
                <Link href={'/'}>
                    <Image src={'/shared/desktop/logo.svg'} width={143} height={35} alt="Logo" />
                </Link>
                <FooterOptions>
                    <CustomLink headerLink={true} route="/">HOME</CustomLink>
                    <CustomLink headerLink={true} route="/headphones">HEADPHONES</CustomLink>
                    <CustomLink headerLink={true} route="/speakers">SPEAKERS</CustomLink>
                    <CustomLink headerLink={true} route="/earphones">EARPHONES</CustomLink>
                </FooterOptions>
            </FooterFirstRow>
            <hr />
            <FooterSecondRow>
                <FooterLeft>
                     <FooterInfo>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</FooterInfo>

                    <FooterCopyright>Copyright {new Date().getFullYear()}. All Rights Reserved</FooterCopyright>
                </FooterLeft>
                <SocialRow>
                    <a href="https://carlosshb.com" target="_blank">
                        <Image src={'/shared/desktop/icon-facebook.svg'} width={24} height={24} alt="Facebook" />
                    </a>
                    <a href="https://carlosshb.com" target="_blank">
                        <Image src={'/shared/desktop/icon-twitter.svg'} width={24} height={24} alt="Twitter" />
                    </a>
                    <a href="https://carlosshb.com" target="_blank">
                        <Image src={'/shared/desktop/icon-instagram.svg'} width={24} height={24} alt="Instagram" />
                    </a>
                    </SocialRow>
            </FooterSecondRow>
        </FooterContainer>
    )
}