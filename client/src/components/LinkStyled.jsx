import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`
    text-decoration: none; 
    margin-right: ${props => (props.right)}; 
    margin-bottom: ${props => (props.marginBottom)};

    :visited {color: ${props => (props.color)};} 
    :hover {color: ${props => (props.color)};}   
    :active {color: ${props => (props.color)};} 

    display: flex;
    align-items: center;
   
`;