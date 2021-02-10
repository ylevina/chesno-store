import React from 'react';
import styled from 'styled-components';

export const Color = ({ size, backgroundColor, onClick }) => {
  return (
    <StyledColor size={size} backgroundColor={backgroundColor} onClick={onClick}/>
  );
}

const StyledColor = styled.div`
  background-color: ${props => (props.backgroundColor)};
  border: 1px solid gray;
  border-radius: ${props => (props.size)};
  margin: 5px;
  width: ${props => (props.size)};
  height: ${props => (props.size)}; 
  cursor: pointer;
`