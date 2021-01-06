import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { Color } from './Color';


export const CartItem = ({ imgUrl, name, price }) => {
    return (
        <StyledCartItem>
            <StyledFavoritesIcon icon={faTrashAlt} onClick={() => { }}></StyledFavoritesIcon>
            <Image src='./img/cart/image34.png' />
            <ProductDetails>
                <Name>Полірована тарілка з кокосу</Name>
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
                    <Color size='32px' backgroundColor='#695041' onClick={() => { }}></Color>
                </ColorStyled>

            </ProductDetails>
            <Amount>
                <p>Кількість товару:</p>
                <div>
                    <p>-</p>
                    <AmountField>2</AmountField>
                    <p>+</p>
                </div>
            </Amount>
            <TotalPrice>
            <p>Сума:</p>
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
    display: flex;
    align-items: center;
    width: 1084px;
    height: 180px;
    border: 1px solid #E8E8E8;
    border-radius: 20px;
    padding: 15px 40px;
    margin-bottom: 10px;
`;

const Image = styled.img`
    width: 142px;
    height: 135px;
    border-radius: 20px;
    margin: 0 20px 0;
`;

const ProductDetails = styled.div`
    width: 50%;   
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    p {
        margin: 0 5px 0 0;
    }
`;

const Name = styled.h2`
    font-size: 20px; 
    margin: 0 0 15px 0;
`;

const Price = styled.div`
    display: flex;
    margin-bottom: 15px;
`;

const Size = styled.div`
    display: flex;
    margin-bottom: 10px;
`;

const ColorStyled = styled.div`
    display: flex;
    align-items: center;
`;

const Amount = styled.div`
    width: 15%;   
`;

const AmountField = styled.div`
    display: inline;
    padding: 0 10px;
    border: 1px solid #FF8B00;
    border-radius: 20px;
`;

const TotalPrice = styled.div`
    width: 10%;   
`;