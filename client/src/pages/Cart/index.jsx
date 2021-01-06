import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { CartItem } from '../../components/CartItem';

import { setCategories, selectCategories } from '../../store/category.jsx';
import { filterProducts, selectFilteredProducts } from '../../store/products.jsx';
import { Button } from '../../components/Button';

const mapStateToProps = state => ({
    categories: selectCategories(state),
    products: selectFilteredProducts(state)
});

export const Cart = connect(mapStateToProps, { selectCategories, filterProducts })(
    ({ categories, filterProducts, products }) => {

        const [topCategory, setTopCategory] = useState('');

        return (
            <CartStyled>
                <CartItem></CartItem>
                <CartItem></CartItem>
                <Actions>
                    <Button backgroundColor='white' textColor='#FF8B00' onClick={() => { }} text='Продовжити покупки'></Button>

                    <Checkout>
                        <Price>
                            <p>Разом:</p>
                            <p>300 грн</p>
                        </Price>
                        <Button backgroundColor='#FF8B00' textColor='white' onClick={() => { }} text='Оформити замовлення'></Button>
                    </Checkout>

                </Actions>
            </CartStyled>
        )
    });

const CartStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Checkout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const Price = styled.div`
    display: flex;    
`;

const Actions = styled.div`
    width: 100%; 
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 50px;
`;