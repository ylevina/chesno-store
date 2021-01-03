import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductCard = ({ imgUrl, name, price }) => {
    return (
        <LinkStyled to={{
            pathname: "/product",
            state: {imgUrl, name, price}
        }}>
            <StyledCard >
                <ImageStyled imgUrl={imgUrl}>
                    {/* FontAswesome Heart*/}
                </ImageStyled>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </StyledCard>
        </LinkStyled>
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
`;

const ImageStyled = styled.div`
    box-sizing: border-box;     
    background: no-repeat url(${props => (props.imgUrl)}) center/102%;
    border: 1px solid transparent;
    border-radius: 20px;
    width: 180px;
    height: 200px;
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