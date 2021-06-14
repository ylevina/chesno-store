import React from 'react';
import styled from 'styled-components';

export const BurgerMenu = () => {
    return (
        <BurgerMenuStyled>
            <div></div>
            <div></div>
            <div></div>
        </BurgerMenuStyled>
    );
};

const BurgerMenuStyled = styled.div`
    div {
        width: 24px;
        height: 2px;
        background-color: #FF8B00;
        margin: 5px 0;
    }
`;