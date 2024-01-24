export const getCart = () => {
    const cart = localStorage.getItem('cart');

    return JSON.parse(cart) || [];
}

const setCart = (newCart) => {
    debugger;
    localStorage.setItem('cart', JSON.stringify(newCart));
    window.dispatchEvent(new Event("storage"));
}

export const addItemToCart = (cartItem) => {
    const cart = getCart();
    const currentItem = cart.find((cartElement) => cartElement.id === cartItem.id);
    const restOfTheCart = cart.filter((cartElement) => cartElement.id !== cartItem.id);        

    if (currentItem) {
        setCart([
            ...restOfTheCart,
            {
                ...currentItem,
                amount: parseInt(currentItem.amount) + 1
            }
        ]);
        return;
    }

    setCart([
        ...restOfTheCart,
        cartItem
    ]);
};

export const removeItemFromCart = (cartItem) => {
    const cart = getCart();
    const currentItem = cart.find((cartElement) => cartElement.id === cartItem.id);
    const restOfTheCart = cart.filter((cartElement) => cartElement.id !== cartItem.id);        

    if (parseInt(currentItem.amount) > 1) {
        setCart([
            ...restOfTheCart,
            {
                ...currentItem,
                amount: parseInt(currentItem.amount) - 1
            }
        ]);
        return;
    }


    setCart(restOfTheCart);
};

export const clearCart = () => {
    setCart([]);
};

export const getCartAmount = () => {
    const cart = getCart();

    return cart.reduce((previousAmount, current) => {
        return parseInt(previousAmount) + parseInt(current.amount);
    }, [0]);
};

export const getTotalPrice = () => { 
    const cart = getCart();
    
    return cart.reduce((previousPrice, current) => {
        return parseInt(previousPrice) + (parseInt(current.amount) * parseFloat(current.price));
    }, [0]);
};
