import React from 'react';
import styled from 'styled-components';

export const Button = ({ backgroundColor, textColor, onClick, text }) => {
  return (
    <StyledButton backgroundColor={backgroundColor} textColor={textColor} onClick={onClick}>{text}</StyledButton>
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
`
//margin: 10px;