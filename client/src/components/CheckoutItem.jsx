import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { Color } from './Color';


export const CheckoutItem = ({ imgUrl, name, price, size, color, quantity }) => {
    return (
        <StyledCartItem>
            <Image src='./img/cart/image34.png' />
            <Product>
                <Name>Полірована тарілка з кокосу</Name>
                <Details>
                    <Price>
                        <p>Ціна:</p>
                        <p>150 грн</p>
                    </Price>
                    <Size>
                        <p>Розмір:</p>
                        <p>15 см</p>
                    </Size>
                    <ColorStyled>
                        <p>Колір:</p>
                        <Color size='24px' backgroundColor='#695041' onClick={() => { }}></Color>
                    </ColorStyled>
                </Details>
            </Product>
            <Amount>
                <p>2 шт</p>
            </Amount>
            <TotalPrice>
                <p>300 грн</p>
            </TotalPrice>
        </StyledCartItem>
    );
}

const StyledFavoritesIcon = styled(FontAwesomeIcon)` 
    font-size: 20px; 
    margin: 20px;
    cursor: pointer;
    color: #FF7051;
`;

const StyledCartItem = styled.div`
    box-sizing: border-box;
    display: flex;
    aligh-items: baseline;
    width: 756px;
    height: 132px;
    border: 1px solid #E8E8E8;
    border-radius: 20px;
    padding: 30px;
    margin: 10px 0;
`;

const Image = styled.img`
    width: 75.23px;
    height: 70.39px;
    border-radius: 20px;
    margin-right: 20px;
`;

const Product = styled.div`
    width: 60%;   
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    p {
        margin: 0 10px 0 0;
    }
`;

const Name = styled.h2`
    font-size: 18px; 
    margin: 0 0 10px;
`;

const Details = styled.div`   
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px; 
    p {
        margin: 0 5px 0 0;
    }
`;

const Price = styled.div`
    display: flex;
    margin-right: 36px;
`;

const Size = styled.div`
    display: flex;
    margin-right: 36px;
`;

const ColorStyled = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
`;

const Amount = styled.div`
    width: 15%;   
    display: flex;   
    font-size: 14px;
    p {
        margin: 0;
        padding-top: 4px;
    }
`;

const TotalPrice = styled.div`
    width: 10%;  
    display: flex;
    font-size: 18px; 
    p {
        margin: 0;
    }
`;