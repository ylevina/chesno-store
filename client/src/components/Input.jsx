import React from 'react';
import styled from 'styled-components';

export const Input = ({ hasLabel, label }) => {
    return (
        <InputWrapper>
            { hasLabel && <label for="name">{label}</label> }
            <InputStyled type="text" id="name" name="name" />
        </InputWrapper>
    );
}

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 1em 0;

    label {
        font-weight: normal;
        font-size: 14px;
        margin: 0.3em 1.5em 0.8em;
    }
`;

const InputStyled = styled.input`
    width: 400px;
    height: 40px;
    border: 2px solid #E8E8E8;
    box-sizing: border-box;
    border-radius: 20px;
    padding: 0 1.5em;
`;
