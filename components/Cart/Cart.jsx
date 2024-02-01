import { AddToCartContainer, Amount, AmountContainer, SignButton } from "@audiophile/views/Product/Product.styles";
import { useEffect, useState } from "react"
import { ProductButton } from "../ProductPreview/ProductPreview.styles";

import {
    DarkOverlay,
    CartContainer,
    CartHeader,
    CartTitle,
    RemoveAll,
    CartItemsContainer,
    CartItem,
    CartInfoColumn,
    CartItemName,
    CartItemPrice,
    TotalContainer,
    TotalLabel,
    TotalValue,
} from './Cart.styles';
import { addItemToCart, clearCart, getCart, getCartAmount, getTotalPrice, removeItemFromCart } from "@audiophile/services/cartService";
import Image from "next/image";
import { useRouter } from "next/router";

export const Cart = ({ hidden }) => {
    // Context way does not work due to Next.js bug
    // const { cart, addItemToCart, removeItemFromCart, cartAmount, totalPrice, clearCart } = useContext(CartContext);
    const [cart, setCart] = useState([]);
    const [cartAmount, setAmount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const router = useRouter();

    useEffect(() => {
        setCart(getCart());
        setAmount(getCartAmount());
        setTotalPrice(getTotalPrice());

        const listenStorageChange = () => {
            setCart(getCart());
            setAmount(getCartAmount());
            setTotalPrice(getTotalPrice());
        };

        window.addEventListener("storage", listenStorageChange);
        return () => window.removeEventListener("storage", listenStorageChange);
      }, []);

    return (
        <DarkOverlay hidden={hidden}>
            <CartContainer hidden={hidden}>
                <CartHeader>
                    <CartTitle>CART ({parseInt(cartAmount)})</CartTitle>
                    <RemoveAll onClick={clearCart}>Remove all</RemoveAll>
                </CartHeader>
                <CartItemsContainer>
                    {
                        cart.map((cartItem, i) => {
                            const { name, image, price, amount } = cartItem;
                            const productImageSrc = image.desktop.replace('./assets/', '/');

                            return (
                                <CartItem key={i}>
                                    <Image src={productImageSrc} width={64} height={64} alt={name} />
                                    <CartInfoColumn>
                                        <CartItemName>{name}</CartItemName>
                                        <CartItemPrice>${price}</CartItemPrice>
                                    </CartInfoColumn>
                                    <AddToCartContainer>
                                        <AmountContainer className="cart-item-amount">
                                            <SignButton onClick={() => removeItemFromCart(cartItem)}>-</SignButton>
                                            <Amount>{amount}</Amount>
                                            <SignButton onClick={() => addItemToCart(cartItem)}>+</SignButton>
                                        </AmountContainer>
                                    </AddToCartContainer>
                                </CartItem>
                            );
                        })
                    }
                </CartItemsContainer>
                <TotalContainer>
                    <TotalLabel>TOTAL</TotalLabel>
                    <TotalValue>${parseFloat(totalPrice)}</TotalValue>
                </TotalContainer>
                <ProductButton onClick={() => router.push('/checkout')}>CHECKOUT</ProductButton>
            </CartContainer>
        </DarkOverlay>
    );
}