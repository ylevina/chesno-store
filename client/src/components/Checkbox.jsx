import React from 'react';
import styled from 'styled-components';

export const Checkbox = ({text}) => {
    return (
        <Container class="container">{text}
            <input type="checkbox"/>
            <span class="checkmark"></span>
        </Container>
    );
}

const Container = styled.label`
    display: block;
    position: relative;
    padding-left: 24px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 16px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }
    
    span {
        position: absolute;
        top: 4px;
        left: 0;
        height: 16px;
        width: 16px;
        background-color: white;
        border: 1px solid #FF8B00;
    }

    :hover input ~ span {
        background - color: #ccc;
    }

    input:checked ~ span {
        background - color: #2196F3;
    }

    span:after {
        content: "";
        position: absolute;
        display: none;
    }

    input:checked ~ span:after {
        display: block;
    }
    
    span:after {
        left: 3px;
        top: 3px;
        width: 8px;
        height: 8px;        
        background: #FF8B00;
    }  
`;