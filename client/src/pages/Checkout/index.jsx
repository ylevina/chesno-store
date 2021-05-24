import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { setCategories, selectCategories } from '../../store/category.jsx';
import { getProducts, selectProducts } from '../../store/products.jsx';

import { Button } from '../../components/Button';
import { Checkbox } from '../../components/Checkbox';
import { CheckoutItems } from '../../components/CheckoutItem';
import { PersonalInformation } from '../../components/PersonalInformation';
import { Input } from '../../components/Input.jsx';
import { Formik } from 'formik';

const mapStateToProps = state => ({
    categories: selectCategories(state),
    products: selectProducts(state)
});

// if logged In get initial values of personal information from user profile info
// else leave empty to be filled in

const initialValues = {
    firstName: '',
    lastName: '',
    login: '',
    email: '',
    loginOrEmail: '',
    password: ''
}

const onSubmit = (values) => {
    // checkout();
}

export const Checkout = connect(mapStateToProps, { selectCategories, getProducts })(
    ({ categories, getProducts, products }) => {
        return (
            <Formik>
                <CheckoutStyled>
                    <Heading>Оформлення замовлення</Heading>
                    <Order>
                        <Details>
                            <SectionStyled>
                                <CheckoutItems />
                            </SectionStyled>
                            <SectionStyled>
                                <FlexRow marginBottom="0">
                                    <Left>
                                        <SubSectionHeading>Персональна інформація:</SubSectionHeading>
                                    </Left>
                                    <Right>
                                        <PersonalInformation></PersonalInformation>
                                    </Right>
                                </FlexRow>
                            </SectionStyled>
                            <SectionStyled>
                                <FlexColumn>
                                    <FlexRow marginBottom="15px">
                                        <Left>
                                            <SubSectionHeading>Виберіть спосіб доставки:</SubSectionHeading>
                                        </Left>
                                        <Right>
                                            <Checkbox text="Кур’єром по місту" />
                                            <Checkbox text="Cамовивіз зі складу" />
                                            <Checkbox text="Укрпошта" />
                                            <Checkbox text="Нова пошта" />
                                        </Right>
                                    </FlexRow>
                                    <FlexRow marginBottom="0">
                                        <Left>
                                            <SubSectionHeading>Адреса доставки:</SubSectionHeading>
                                        </Left>
                                        <Right>
                                            <Input name="address" hasLabel={false} />
                                        </Right>
                                    </FlexRow>
                                </FlexColumn>
                            </SectionStyled>
                            <SectionStyled>
                                <FlexRow marginBottom="0">
                                    <Left>
                                        <SubSectionHeading>Виберіть спосіб оплати:</SubSectionHeading>
                                    </Left>
                                    <Right>
                                        <Checkbox text="Банківською картою при отриманні" />
                                        <Checkbox text="Готівкою при отриманні" />
                                    </Right>
                                </FlexRow>
                            </SectionStyled>
                        </Details>
                        <Total>
                            <FlexColumnDecorated>
                                <TotalHeading>Разом</TotalHeading>
                                <FlexRow marginBottom="0">
                                    <TotalTextLine>2 товари на суму</TotalTextLine>
                                    <AmountTotal>300 грн</AmountTotal>
                                </FlexRow>
                                <FlexRow marginBottom="0">
                                    <TotalTextLine>Вартість доставки</TotalTextLine>
                                    <TotalTextLine>40 грн</TotalTextLine>
                                </FlexRow>
                            </FlexColumnDecorated>
                            <FlexColumnDecorated>
                                <FlexRow marginBottom="0">
                                    <TotalTextLine>До сплати:</TotalTextLine>
                                    <AmountToPay>340 грн</AmountToPay>
                                </FlexRow>
                                <Button backgroundColor='#FF8B00' textColor='white' onClick={() => { }} text='Замовлення підтверджую'></Button>
                            </FlexColumnDecorated>
                        </Total>
                    </Order>
                </CheckoutStyled>
            </Formik>
        )
    });

const CheckoutStyled = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 0;
`;

const Heading = styled.h1`  
    font-weight: normal;
    font-size: 20px;
    margin: 0 2em 1em;
`;

const Order = styled.div`
    display: flex;   
`;


const SectionStyled = styled.div`
    box-sizing: border-box;
    display: flex;
    aligh-items: baseline;
    border: 1px solid #E8E8E8;
    border-radius: 20px;
    padding: 31px;
    margin: 0 0 24px;
`;

const Details = styled.div`
    display: flex;  
    flex-direction: column; 
    margin: 0 20px 0 0; 
    width: 756px;
`;

const Total = styled.div`
    box-sizing: border-box;
    width: 30%;
    height: 340px;
    display: flex; 
    flex-direction: column; 
    border: 1px solid #FF8B00;
    border-radius: 20px;  
    padding: 32px;
`;

const TotalHeading = styled.h3`
    font-size: 18px;
    margin: 0 0 0.8em;  
`;

const TotalTextLine = styled.p`
    margin: 0 0 0.8em;  
`;

const AmountTotal = styled.p`
    margin: 0 0 0.8em; 
    font-size: 20px; 
`;

const AmountToPay = styled.p`
    margin: 0 0 0.8em; 
    font-size: 24px; 
    color: #FF8B00;
`;

const FlexColumn = styled.div`
    display: flex;  
    flex-direction: column;
    width: 100%;   
`;

const FlexColumnDecorated = styled(FlexColumn)`
    :last-child:before {
        display: block;
        content:' ';
        width: 100%;
        border-top: 1px solid #E8E8E8;
        margin: 30px 0 20px;
    }
`;

const FlexRow = styled.div`
    display: flex;  
    justify-content: space-between;   
    width: 100%;
    margin-bottom: ${props => (props.marginBottom)};
`;

const SubSectionHeading = styled.h3`
    font-weight: normal;
    font-size: 18px;
    margin: 0;
    width: 100%;
`;

const Left = styled.div`
    display: flex;  
    justify-content: space-between;
    margin: 0 20px 0 0;
    width: 35%;
`;

const Right = styled.div`
    display: flex; 
    flex-direction: column; 
    margin: 0;
    width: 65%;
`;

