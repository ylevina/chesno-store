import React from 'react';
import styled from 'styled-components';

export const Button = ({ type, backgroundColor, textColor, onClick, text, hide }) => {
  return (
    <StyledButton type={type} backgroundColor={backgroundColor} textColor={textColor} onClick={onClick} hide={hide}>{text}</StyledButton>
  );
}

const StyledButton = styled.button`
  background-color: ${props => (props.backgroundColor)};
  border: 1px solid #FF8B00;
  border-radius: 20px;
  font-size: 16px;
  color: ${props => (props.textColor)};
  margin: 10px 0;
  padding: 1em 1.5em;
  min-width: 100px; 
  cursor: pointer; 
  display: ${props => (props.hide)? 'none' : 'block'};
`
//margin: 10px;