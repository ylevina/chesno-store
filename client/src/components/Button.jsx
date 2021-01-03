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
  border-radius: 20px;
  font-size: 16px;
  color: white;
  margin: 10px 0;
  padding: 1em 1.5em;
  min-width: 100px; 
  cursor: pointer; 
`
//margin: 10px;