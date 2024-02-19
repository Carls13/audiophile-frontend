import { useRouter } from "next/router"
import { CartItem, CartInfoColumn, CartItemName, CartItemPrice, DarkOverlay } from "../Cart/Cart.styles"
import { ProductButton } from "../ProductPreview/ProductPreview.styles"
import { CheckoutAmount } from "@audiophile/views/Checkout/Checkout.styles";
import { clearCart, getCart, getTotalPrice } from "@audiophile/services/cartService";

import {
    ConfirmationContainer,
    ThankYou,
    ConfirmationText,
    ConfirmationTotalContainer,
    SummaryTotalContainer,
    ExpandableLabel,
    TotalPriceContainer,
    TotalPriceLabel,
    TotalPriceValue,
} from './ConfirmationModal.styles';
import { useEffect, useState } from "react";
import Image from "next/image";

export const ConfirmationModal = ({ hidden }) => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [expandedCart, setExpandedCart] = useState(false);

    const vat = 0.20 * parseFloat(totalPrice);
    const grandTotal = parseFloat(totalPrice) + 50 + vat;

    useEffect(() => {
        setCart(getCart());
        setTotalPrice(getTotalPrice());

        const listenStorageChange = () => {
            setCart(getCart());
            setTotalPrice(getTotalPrice());
        };

        window.addEventListener("storage", listenStorageChange);
        return () => window.removeEventListener("storage", listenStorageChange);
    }, []);

    const router = useRouter();

    const displayedCart = expandedCart ? cart : cart.filter((_, i) => i === 0);

    const handleBackToHome = () => {
        clearCart();
        router.push('/');
    }

    return (
        <DarkOverlay hidden={hidden}>
            <ConfirmationContainer>
                <Image src='/checkout/icon-order-confirmation.svg' width={64} height={64} alt="Confirmation" />
                <ThankYou>THANK YOU FOR YOUR ORDER</ThankYou>
                <ConfirmationText>You will receive an email confirmation shortly.</ConfirmationText>
                <ConfirmationTotalContainer>
                    <SummaryTotalContainer>
                    {
                        displayedCart.map((cartItem, i) => {
                            const { name, image, price, amount } = cartItem;
                            const productImageSrc = image.desktop.replace('./assets/', '/');

                            return (
                                <CartItem key={i}>
                                    <Image src={productImageSrc} width={64} height={64} alt={name} />
                                    <CartInfoColumn>
                                        <CartItemName>{name}</CartItemName>
                                        <CartItemPrice>${price}</CartItemPrice>
                                    </CartInfoColumn>
                                    <CheckoutAmount>x{amount}</CheckoutAmount>
                                </CartItem>
                            );
                        })
                    }
                        <hr />
                        <ExpandableLabel onClick={() => setExpandedCart(!expandedCart)}>and 2 other item(s)</ExpandableLabel>
                    </SummaryTotalContainer>
                    <TotalPriceContainer>
                        <TotalPriceLabel>GRAND TOTAL</TotalPriceLabel>
                        <TotalPriceValue>${parseFloat(grandTotal).toFixed(2)}</TotalPriceValue>
                    </TotalPriceContainer>
                </ConfirmationTotalContainer>
                <ProductButton onClick={handleBackToHome}>BACK TO HOME</ProductButton>
            </ConfirmationContainer>
        </DarkOverlay>
    );
}