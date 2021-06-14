import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

export const Search = () => {
  
    return (
        <SearchStyled className='header-bottom__search-form'>
            <InputStyled type="text" placeholder='Я шукаю...' />
            <Button 
                text={<ButtonImageStyled src='/img/search.svg'/>} 
                backgroundColor="#FF8B00;" 
                textColor="white" 
                onClick={() => { }} 
            />
        </SearchStyled>
    );
};

const SearchStyled = styled.div`   
    width: 520px;
    position: relative; 
    display: flex;
    justify-content: flex-end;
`;

const InputStyled = styled.input`
    -webkit-appearance: none;
    border: 2px solid #FF8B00;
    border-radius: 24px;
    width: 460px;
    padding: 0.88em 20px;
    position: absolute;
    left: 15px;
    font-family: Nunito;
    color: #828282;
    
    :focus {
        outline: none;
    }      
`;

const ButtonImageStyled = styled.img`
    width: 16px;
    height: 16px;
    margin: 6px 0 3px 25px;
`;

