import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { ButtonSmall } from './ButtonSmall';

export const ProductCard = ({ key, imgUrl, name, price, id, onClick }) => {
    const _id = id;
    return (
        <StyledCard>
            <ImageStyled imgUrl={imgUrl}>
                <IconRight src='/img/heart.svg' alt='heart icon' onClick={onClick} />
            </ImageStyled>
            <LinkStyled to={{
                pathname: `/product/${_id}`,
                state: { key, imgUrl, name, price, id }
            }}>
                <Name>{name}</Name>
                <Price>{price} грн</Price>
                <ButtonSmall
                    backgroundColor={'#FF8B00'}
                    textColor="white"
                    onClick={() => { }}
                    text={<span>В корзину <LinkStyled right="10px"><img src='/img/cart_add.svg' alt='add to cart icon' /></LinkStyled></span>}
                    hide={false} />
            </LinkStyled>
        </StyledCard>

    );
}

const LinkStyled = styled(Link)`
    text-decoration: none;
    :visited {color: black;} 
    :hover {color: black;}   
    :active {color: black;} 
`;


const StyledCard = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    :hover button {
        display: flex;
    }
  
`;

const ImageStyled = styled.div`
    position: relative;
    box-sizing: border-box;     
    background: no-repeat url(${props => (props.imgUrl)}) center/102%;
    border: 1px solid transparent;
    border-radius: 20px;
    width: 180px;
    height: 200px;
`;

const IconRight = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
`;

//height: 60px;
const Name = styled.p`    
    width: 180px;    
    margin: 10px 0;
`;

const Price = styled.p` 
    color: #FF8B00; 
    font-size: 24px;
    font-weight: bold;
    margin: 0;
`;