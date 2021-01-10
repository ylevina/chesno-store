import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { Color } from './Color';


export const Checkbox = ({text}) => {
    return (
        <Container class="container">{text}
            <input type="checkbox"/>
            <span class="checkmark"></span>
        </Container>
    );
}

/* Customize the label (the container) */
const Container = styled.label`
    isplay: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
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
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        background-color: white;
        border: 1px solid #FF8B00;
    }

    :hover input ~ span {
        background - color: #ccc;
    }

    input:checked ~ span {
        background - color: #FF8B00;
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
        left: 9px;
        top: 5px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`;