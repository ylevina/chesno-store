import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

export const CategoryCard = ({ name, description, imgUrl, buttonText, url }) => {
    return (
        <StyledCard imgUrl={imgUrl}>
            <DetailsStyled>
                <TextWrap>
                    <HeadingStyled>{name}</HeadingStyled>
                    <DescriptionStyled>{description}</DescriptionStyled>
                </TextWrap>
                <ButtonWrap>
                    <Button backgroundColor={'#FF8B00'} onClick={ () => { }} text={buttonText}></Button>
                </ButtonWrap>
            </DetailsStyled>
        </StyledCard>
    );
}

const StyledCard = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: flex-end;   
    background: no-repeat url(${props => (props.imgUrl)}) center/102%;
    border: 1px solid transparent;
    border-radius: 20px;
    width: 580px;
    height: 580px;
    padding: 40px;
`;

const DetailsStyled = styled.div`
    box-sizing: border-box;
    display: flex;
    background: white;
    border: 1px solid transparent;
    border-radius: 20px;
    width: 500px;
    height: 179px;
    color: black;
    padding: 30px;
`;

const TextWrap = styled.div`
    width: 55%;
`;

const ButtonWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 45%;
    bottom: 0px;
`;

const HeadingStyled = styled.h3`

`;

const DescriptionStyled = styled.p`

`;