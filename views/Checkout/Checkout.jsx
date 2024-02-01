import { CartInfoColumn, CartItem, CartItemName, CartItemPrice, TotalContainer, TotalLabel, TotalValue } from "@audiophile/components/Cart/Cart.styles";
import { GoBack } from "@audiophile/components/GoBack/GoBack";
import { ProductButton } from "@audiophile/components/ProductPreview/ProductPreview.styles";
import Image from "next/image";

import {
    CheckoutPageContainer,
    CheckoutContainer,
    CheckoutTitle,
    SectionTitle,
    SummaryContainer,
    SummaryTitle,
    CheckoutAmount,
    DoubleColumnContainer,
    SingleColumnContainer,
    InputContainer,
    LabelContainer,
    Label,
    ErrorMessage,
    Input,
    OptionContainer,
    Radio,
    RadioLabel,
    CashOnDeliveryContainer,
    CashOnDeliveryText,
    RadioButtonLabel
} from './Checkout.styles';
import { getCart, getCartAmount, getTotalPrice } from "@audiophile/services/cartService";
import { useEffect, useState } from "react";
import { THEME_GRAY } from "@audiophile/theme/colors.theme";

export const CheckoutView = () => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const vat = 0.20 * parseFloat(totalPrice);
    const grandTotal = parseFloat(totalPrice) + 50 + vat;

    const [selectedPayment, setSelectedPayment] = useState("e-money");

    useEffect(() => {
        setCart(getCart());
        setTotalPrice(getTotalPrice());

        const listenStorageChange = () => {
            setCart(getCart());
            setTotalPrice(getTotalPrice());
        };

        const body = document.body;
        body.style.background = THEME_GRAY;

        window.addEventListener("storage", listenStorageChange);
        return () => window.removeEventListener("storage", listenStorageChange);
      }, []);

    const handleSelectChange = event => {
        const value = event.target.value;
        setSelectedPayment(value);
      };

    return (
        <>
            <GoBack/>
            <CheckoutPageContainer>
                <CheckoutContainer>
                    <CheckoutTitle>CHECKOUT</CheckoutTitle>
                    <SectionTitle>billing details</SectionTitle>
                    <DoubleColumnContainer>
                        <InputContainer>
                            <LabelContainer>
                                <Label>Name</Label>
                                <ErrorMessage>Empty</ErrorMessage>
                            </LabelContainer>
                            <Input />
                        </InputContainer>
                        <InputContainer>
                            <LabelContainer>
                                <Label>Email Address</Label>
                                <ErrorMessage>Empty</ErrorMessage>
                            </LabelContainer>
                            <Input />
                        </InputContainer>
                    </DoubleColumnContainer>
                    <DoubleColumnContainer>
                        <InputContainer>
                            <LabelContainer>
                                <Label>Phone Number</Label>
                                <ErrorMessage>Empty</ErrorMessage>
                            </LabelContainer>
                            <Input />
                        </InputContainer>
                    </DoubleColumnContainer>
                    <SectionTitle>shipping info</SectionTitle>
                    <SingleColumnContainer>
                        <InputContainer>
                            <LabelContainer>
                                <Label>Phone Number</Label>
                                <ErrorMessage>Empty</ErrorMessage>
                            </LabelContainer>
                            <Input />
                        </InputContainer>
                    </SingleColumnContainer>
                    <DoubleColumnContainer>
                        <InputContainer>
                            <LabelContainer>
                                <Label>Name</Label>
                                <ErrorMessage>Empty</ErrorMessage>
                            </LabelContainer>
                            <Input />
                        </InputContainer>
                        <InputContainer>
                            <LabelContainer>
                                <Label>Email Address</Label>
                                <ErrorMessage>Empty</ErrorMessage>
                            </LabelContainer>
                            <Input />
                        </InputContainer>
                    </DoubleColumnContainer>
                    <DoubleColumnContainer>
                        <InputContainer>
                            <LabelContainer>
                                <Label>Phone Number</Label>
                                <ErrorMessage>Empty</ErrorMessage>
                            </LabelContainer>
                            <Input />
                        </InputContainer>
                    </DoubleColumnContainer>
                    <SectionTitle>payment details</SectionTitle>
                    <DoubleColumnContainer>
                        <Label>Payment Method</Label>
                        <InputContainer>
                            <OptionContainer onClick={() => setSelectedPayment('e-money')}>
                                <Radio type="radio" name="payment" value='e-money' checked={selectedPayment === "e-money"}
                                        onChange={event => handleSelectChange(event)} />
                                <RadioButtonLabel />
                                <RadioLabel>e-Money</RadioLabel>
                            </OptionContainer>
                            <OptionContainer onClick={() => setSelectedPayment('cash')}>
                                <Radio type="radio" name="payment" value='cash' checked={selectedPayment === "cash"}
                                        onChange={event => handleSelectChange(event)} />
                                <RadioButtonLabel />
                                <RadioLabel>Cash on Delivery</RadioLabel>
                            </OptionContainer>
                        </InputContainer>
                    </DoubleColumnContainer>
                    <DoubleColumnContainer>
                        <InputContainer>
                            <LabelContainer>
                                <Label>Name</Label>
                                <ErrorMessage>Empty</ErrorMessage>
                            </LabelContainer>
                            <Input />
                        </InputContainer>
                        <InputContainer>
                            <LabelContainer>
                                <Label>Email Address</Label>
                                <ErrorMessage>Empty</ErrorMessage>
                            </LabelContainer>
                            <Input />
                        </InputContainer>
                    </DoubleColumnContainer>
                    <CashOnDeliveryContainer>
                        <Image width={48} height={48} alt="Cash on Delivery" src='/checkout/icon-cash-on-delivery.svg' />
                        <CashOnDeliveryText>
                        The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
                        </CashOnDeliveryText>
                    </CashOnDeliveryContainer>
                </CheckoutContainer>
                <SummaryContainer>
                    <SummaryTitle>SUMMARY</SummaryTitle>
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
                                    <CheckoutAmount>x{amount}</CheckoutAmount>
                                </CartItem>
                            );
                        })
                    }
                    <TotalContainer>
                        <TotalLabel>TOTAL</TotalLabel>
                        <TotalValue>${parseFloat(totalPrice)}</TotalValue>
                    </TotalContainer>
                    <TotalContainer>
                        <TotalLabel>SHIPPING</TotalLabel>
                        <TotalValue>$50</TotalValue>
                    </TotalContainer>
                    <TotalContainer>
                        <TotalLabel>VAT (INCLUDED)</TotalLabel>
                        <TotalValue>${parseFloat(vat)}</TotalValue>
                    </TotalContainer>
                    <TotalContainer>
                        <TotalLabel>GRAND TOTAL</TotalLabel>
                        <TotalValue>${parseFloat(grandTotal)}</TotalValue>
                    </TotalContainer>
                    <ProductButton>CONTINUE & PAY</ProductButton>
                </SummaryContainer>
            </CheckoutPageContainer>
        </>
    );
};