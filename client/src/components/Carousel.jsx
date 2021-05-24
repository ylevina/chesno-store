import React from 'react';
import styled from 'styled-components';
import "~slick-carousel/slick/slick.css"; 
import "~slick-carousel/slick/slick-theme.css";

export const Carousel = ({ onClick }) => {
  return (
    <StyledColor backgroundColor={backgroundColor} onClick={onClick}/>
  );
}

const StyledColor = styled.div`
  background-color: ${props => (props.backgroundColor)};
  border: 1px solid gray;
  border-radius: 20px;
  margin: 10px;
  width: 20px; 
  height: 20px; 
  cursor: pointer;
`;