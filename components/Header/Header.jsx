import Image from "next/image";
import { CustomLink } from "../CustomLink/CustomLink";

import { HeaderContainer, HeaderOptions } from './Header.styles';
import Link from "next/link";
import { useState } from "react";
import { Cart } from "../Cart/Cart";

export const Header = ({ isHome }) => {
    const [openMenu, setIsOpen] = useState(false);
    const [openCart, setOpenCart] = useState(false);

    return (
        <>
            <HeaderContainer isHome={isHome}>
                <Link href={'/'}>
                    <Image src={'/shared/desktop/logo.svg'} width={143} height={35} alt="Logo" />
                </Link>
                <HeaderOptions isOpen={openMenu}>
                    <CustomLink headerLink={true} route="/">HOME</CustomLink>
                    <CustomLink headerLink={true} route="/headphones">HEADPHONES</CustomLink>
                    <CustomLink headerLink={true} route="/speakers">SPEAKERS</CustomLink>
                    <CustomLink headerLink={true} route="/earphones">EARPHONES</CustomLink>
                </HeaderOptions>
                <Image onClick={() => setOpenCart(!openCart)} id="cart-icon" src='/shared/desktop/icon-cart.svg' width={23} height={20} alt="Cart icon" />
            </HeaderContainer>
            <Cart hidden={!openCart} />
        </>
        
    );
};