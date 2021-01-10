import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { CheckoutItem } from '../../components/CheckoutItem';

import { setCategories, selectCategories } from '../../store/category.jsx';
import { filterProducts, selectFilteredProducts } from '../../store/products.jsx';
import { Button } from '../../components/Button';
import { Checkbox } from '../../components/Checkbox';

const mapStateToProps = state => ({
    categories: selectCategories(state),
    products: selectFilteredProducts(state)
});

export const Checkout = connect(mapStateToProps, { selectCategories, filterProducts })(
    ({ categories, filterProducts, products }) => {

        const [topCategory, setTopCategory] = useState('');

        return (
            <CheckoutStyled>
                <Heading>Оформлення замовлення</Heading>
                <Order>
                    <Details>
                        <CheckoutItem />
                        <PersonalInformationStyled>
                            <h3>Персональна інформація:</h3>
                            <div>
                                <div>
                                    <label for="name">Ім'я</label>
                                    <input type="text" id="name" name="name" />
                                </div>
                                <div>
                                    <label for="surname">Прізвище</label>
                                    <input type="text" id="surname" name="surname" />
                                </div>
                                <div>
                                    <label for="email">Електронна адреса</label>
                                    <input type="text" id="email" name="email" />
                                </div>
                                <div>
                                    <label for="phone">Номер телефону</label>
                                    <input type="text" id="phone" name="phone" />
                                </div>
                            </div>
                        </PersonalInformationStyled>
                        <Delivery>
                            <h3>Виберіть спосіб доставки:</h3>
                            <div>
                                <Checkbox text="кур’єром по місту" />
                            </div>
                        </Delivery>
                        <PaymentMethod>
                            <h3>Виберіть спосіб оплати:</h3>
                            <div>

                            </div>
                        </PaymentMethod>
                    </Details>
                    <Total>
                        <h3>Разом</h3>
                        <div>
                            <p>2 товари на суму</p>
                            <p>300 грн</p>
                        </div>
                        <div>
                            <p>Вартість доставки</p>
                            <p>40 грн</p>
                        </div>
                        <div>
                            <p>До сплати:</p>
                            <p>340 грн</p>
                        </div>
                        <Button backgroundColor='#FF8B00' textColor='white' onClick={() => { }} text='Замовлення підтверджую'></Button>
                    </Total>
                </Order>
            </CheckoutStyled>
        )
    });

const CheckoutStyled = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 0;
`;

const Heading = styled.h1`  
`;

const Order = styled.div`
    display: flex;   
`;

const PersonalInformationStyled = styled.div`
    box-sizing: border-box;
    display: flex;
    aligh-items: baseline;
    border: 1px solid #E8E8E8;
    border-radius: 20px;
    padding: 30px;
    margin: 10px 0;
`;

const Details = styled.div`
    display: flex;  
    flex-direction: column;  
`;

const Delivery = styled.div`
    display: flex;   
    border: 1px solid #E8E8E8;
    border-radius: 20px; 
`;

const PaymentMethod = styled.div`
    display: flex; 
    border: 1px solid #E8E8E8;
    border-radius: 20px;   
`;

const Total = styled.div`
    display: flex;  
    border: 1px solid #FF8B00;
    border-radius: 20px;  
`;