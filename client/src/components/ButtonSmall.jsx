import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

export const ButtonSmall = ({ backgroundColor, textColor, onClick, text, hide }) => {
  return (
    <StyledButton backgroundColor={backgroundColor} textColor={textColor} onClick={onClick} hide={hide}>{text}</StyledButton>
  );
}

const StyledButton = styled(Button)`  
  padding: 0.5em 1.5em; 
`;