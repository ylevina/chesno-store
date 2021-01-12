import React from 'react';
import styled from 'styled-components';
import { Input } from './Input';

export const PersonalInformation = () => {
    return (
        <Container>    
            <Input hasLabel={true} label="Ім'я" />
            <Input hasLabel={true} label="Прізвище" />
            <Input hasLabel={true} label="Електронна адреса" />
            <Input hasLabel={true} label="Номер телефону" />
        </Container>
    );
}

const Container = styled.div`
    margin: 0;
`;