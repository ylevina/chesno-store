import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`
    text-decoration: none; 
    :visited {color: ${props => (props.color)};} 
    :hover {color: ${props => (props.color)};}   
    :active {color: ${props => (props.color)};}    
`;