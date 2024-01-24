import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItemToCart = (cartItem) => {
        const currentItem = cart.find((cartElement) => cartElement.id === cartItem.id);

        if (currentItem) {
            setCart([
                ...cart,
                {
                    ...currentItem,
                    amount: currentItem.amount + cartItem.amount
                }
            ]);
            return;
        }

        setCart([
            ...cart,
            cartItem
        ]);
    };

    const removeItemFromCart = (cartItem) => {
        const currentItem = cart.find((cartElement) => cartElement.id === cartItem.id);

        if (currentItem.amount > 1) {
            setCart([
                ...cart,
                {
                    ...currentItem,
                    amount: currentItem.amount - 1
                }
            ]);
            return;
        }

        const newCart = cart.filter((cartElement) => cartElement.id !== cartItem.id);        

        setCart(newCart);
    };

    const clearCart = () => {
        setCart([]);
    };

    const cartAmount = cart.reduce((previousAmount, current) => {
        return previousAmount + current.amount;
    }, [0]);

    const totalPrice = cart.reduce((previousPrice, current) => {
        return previousPrice + (current.amount * current.price);
    }, [0]);

    return (
        <CartContext.Provider
            cart={cart}
            cartAmount={cartAmount}
            totalPrice={totalPrice}
            addItemToCart={addItemToCart}
            removeItemFromCart={removeItemFromCart}
            clearCart={clearCart}
        >
            {children}
        </CartContext.Provider>
    );
}