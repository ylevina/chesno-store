import React from 'react';
import styled from 'styled-components';

export const Button = ({ backgroundColor, onClick, text }) => {
  return (
    <StyledButton backgroundColor={backgroundColor} onClick={onClick}>{text}</StyledButton>
  );
}

const StyledButton = styled.button`
  background-color: ${props => (props.backgroundColor)};
  border: 1px solid ${props => (props.backgroundColor)};
  border-radius: 30px;
  font-size: 16px;
  color: white;
  margin: 10px;
  padding: 1em;
  min-width: 100px; 
  cursor: pointer; 
`