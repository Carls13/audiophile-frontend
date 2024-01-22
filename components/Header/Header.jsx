import Image from "next/image";
import { CustomLink } from "../CustomLink/CustomLink";

import { HeaderContainer, HeaderOptions } from './Header.styles';
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
    const [openMenu, setIsOpen] = useState(false);
    const [openCart, setOpenCart] = useState(false);

    return (
        <HeaderContainer>
            <Link href={'/'}>
                <Image src={'/shared/desktop/logo.svg'} width={143} height={35} alt="Logo" />
            </Link>
            <HeaderOptions isOpen={openMenu}>
                <CustomLink headerLink={true} route="/">HOME</CustomLink>
                <CustomLink headerLink={true} route="/headphones">HEADPHONES</CustomLink>
                <CustomLink headerLink={true} route="/speakers">SPEAKERS</CustomLink>
                <CustomLink headerLink={true} route="/earphones">EARPHONES</CustomLink>
            </HeaderOptions>
            {/* <Image onClick={() => setIsOpen(!openMenu)} id="burger" src={openMenu ? '/close.svg': '/burger.svg'} width={24} height={20} alt="Menu" /> */}
            <Image onClick={() => setOpenCart(!openCart)} id="cart-icon" src='/shared/desktop/icon-cart.svg' width={23} height={20} alt="Cart icon" />
        </HeaderContainer>
    );
};