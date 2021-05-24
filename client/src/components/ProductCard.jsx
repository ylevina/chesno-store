import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { ButtonSmall } from './ButtonSmall';

export const ProductCard = ({ key, imgUrl, name, price, id, onClick }) => {
    const _id = id;
    return (
        <StyledCard>
            <div>
                <ImageStyled imgUrl={imgUrl}>
                    <IconRight src='/img/heart.svg' alt='heart icon' onClick={onClick} />
                </ImageStyled>
                <LinkStyled to={{
                    pathname: `/product/${_id}`,
                    state: { key, imgUrl, name, price, id }
                }}>
                    <ProductInfo>
                        <Name>{name}</Name>
                        <Price>{price}</Price>
                    </ProductInfo>
                    <ButtonSmall
                        backgroundColor={'#FF8B00'}
                        textColor="white"
                        onClick={() => { }}
                        text={<span>В корзину <LinkStyled right="10px"><img src='/img/cart_add.svg' alt='add to cart icon'/></LinkStyled></span>}
                        // text="В корзину"
                        hide={true} />
                </LinkStyled>
            </div>
        </StyledCard>
    );
}

const StyledCard = styled.div` 
    box-sizing: border-box;    
    border: 1px solid transparent;
    transition: 0.4s; 
    margin: 0;
    padding: 0;      
    
    :hover {
        transform: scale(1.19, 1.15);    
        transition: 0.4s;
        border: 1px solid #FF8B00;
        border-radius: 15px;
    }

    div {
        display: flex;
        flex-direction: column;        
        box-sizing: border-box;
        width: 180px;         
        transition: 0.4s; 
        margin: 0;
        padding: 0;  
    }

    :hover div {
        transform: scale(0.91, 0.93);
        transition: 0.4s;
   
        button {           
            display: flex; 
            visibility: visible;
            transform: display;    
            transition: 0.4s; 
        }
    }
`;

const LinkStyled = styled(Link)`
    text-decoration: none;
    :visited {color: black;} 
    :hover {color: black;}   
    :active {color: black;} 
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    margin: 0;
    padding: 0;  
`;

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;    
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
    top: 14px;
    right: 14px;
`;

const Name = styled.p`    
    width: 180px;    
    margin: 10px 0;
`;

const Price = styled.p` 
    color: #FF8B00; 
    font-size: 24px;
    font-weight: 800;
    margin: 0;
`;