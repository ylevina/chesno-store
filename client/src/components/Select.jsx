import React from 'react';
import styled from 'styled-components';

export const Select = ({ options, onClick }) => {
  return (
    <StyledSelect onClick={onClick}>
      {options}      
    </StyledSelect>
  );
}

const StyledSelect = styled.select`  
  border: 1px solid #FF8B00;
  border-radius: 40px;
  font-size: 16px;
  color: white;
  margin: 10px;
  padding: 1em 1.5em;
  min-width: 100px; 
  cursor: pointer; 
`