import React from 'react';
import styled from 'styled-components';

export const Button = ({ type, backgroundColor, onClick, text, textColor, fontSize, hide }) => {
  return (
    <StyledButton type={type} backgroundColor={backgroundColor} fontSize={fontSize} textColor={textColor} onClick={onClick} hide={hide}>{text}</StyledButton>
  );
}

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  background-color: ${props => (props.backgroundColor)};
  border: 1px solid #FF8B00;
  border-radius: 20px;
  font-family: Nunito;
  font-size: ${props => (props.fontSize)};
  font-weight: 700;
  color: ${props => (props.textColor)};
  margin: 10px 0;
  padding: 0.7em 1.5em;
  min-width: 100px; 
  cursor: pointer;   
  visibility: ${props => (props.hide)? 'hidden' : 'visible '};

  > * {
    display: flex;
    justify-content: space-between;
    align-items: center;   
  }

  a {
    margin-left: 5px;
  }
`;