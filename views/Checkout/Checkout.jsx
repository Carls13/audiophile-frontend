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
import { useForm } from "react-hook-form";

export const CheckoutView = () => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const vat = 0.20 * parseFloat(totalPrice);
    const grandTotal = parseFloat(totalPrice) + 50 + vat;

    const [selectedPayment, setSelectedPayment] = useState("e-money");

    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();

    const onSubmit = (data) => console.log(data)

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
                                {errors.name && <ErrorMessage>Empty</ErrorMessage>}
                            </LabelContainer>
                            <Input  {...register("name", { required: true })}  />
                        </InputContainer>
                        <InputContainer>
                            <LabelContainer>
                                <Label>Email Address</Label>
                                {errors.email && <ErrorMessage>Empty</ErrorMessage>}
                            </LabelContainer>
                            <Input  {...register("email", { required: true })} />
                        </InputContainer>
                    </DoubleColumnContainer>
                    <DoubleColumnContainer>
                        <InputContainer>
                            <LabelContainer>
                                <Label>Phone Number</Label>
                                {errors.phoneNumber && <ErrorMessage>Empty</ErrorMessage>}
                            </LabelContainer>
                            <Input  {...register("phoneNumber", { required: true })}/>
                        </InputContainer>
                    </DoubleColumnContainer>
                    <SectionTitle>shipping info</SectionTitle>
                    <SingleColumnContainer>
                        <InputContainer>
                            <LabelContainer>
                                <Label>Address</Label>
                                {errors.address && <ErrorMessage>Empty</ErrorMessage>}
                            </LabelContainer>
                            <Input  {...register("address", { required: true })} />
                        </InputContainer>
                    </SingleColumnContainer>
                    <DoubleColumnContainer>
                        <InputContainer>
                            <LabelContainer>
                                <Label>ZIP-Code</Label>
                                {errors.zip && <ErrorMessage>Empty</ErrorMessage>}
                            </LabelContainer>
                            <Input  {...register("zip", { required: true })} />
                        </InputContainer>
                        <InputContainer>
                            <LabelContainer>
                                <Label>City</Label>
                                {errors.city && <ErrorMessage>Empty</ErrorMessage>}
                            </LabelContainer>
                            <Input  {...register("city", { required: true })} />
                        </InputContainer>
                    </DoubleColumnContainer>
                    <DoubleColumnContainer>
                        <InputContainer>
                            <LabelContainer>
                                <Label>Country</Label>
                                {errors.country && <ErrorMessage>Empty</ErrorMessage>}
                            </LabelContainer>
                            <Input  {...register("country", { required: true })} />
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
                   {
                    selectedPayment === 'e-money' &&
                        <DoubleColumnContainer>
                            <InputContainer>
                                <LabelContainer>
                                    <Label>e-Money Number</Label>
                                    {errors.eMoneyNumber && <ErrorMessage>Empty</ErrorMessage>}
                                </LabelContainer>
                                <Input  {...register("eMoneyNumber", { required: selectedPayment === 'e-money' })} />
                            </InputContainer>
                            <InputContainer>
                                <LabelContainer>
                                    <Label>e-Money PIN</Label>
                                    {errors.eMoneyPIN && <ErrorMessage>Empty</ErrorMessage>}
                                </LabelContainer>
                                <Input  {...register("eMoneyPIN", { required: selectedPayment === 'e-money' })} />
                            </InputContainer>
                        </DoubleColumnContainer>
                    }
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
                        <TotalValue>${parseFloat(totalPrice).toFixed(2)}</TotalValue>
                    </TotalContainer>
                    <TotalContainer>
                        <TotalLabel>SHIPPING</TotalLabel>
                        <TotalValue>$50</TotalValue>
                    </TotalContainer>
                    <TotalContainer>
                        <TotalLabel>VAT (INCLUDED)</TotalLabel>
                        <TotalValue>${parseFloat(vat).toFixed(2)}</TotalValue>
                    </TotalContainer>
                    <TotalContainer>
                        <TotalLabel>GRAND TOTAL</TotalLabel>
                        <TotalValue>${parseFloat(grandTotal).toFixed(2)}</TotalValue>
                    </TotalContainer>
                    <ProductButton onClick={handleSubmit(onSubmit)}>CONTINUE & PAY</ProductButton>
                </SummaryContainer>
            </CheckoutPageContainer>
        </>
    );
};