import React from 'react';
import styled from 'styled-components';
import { Input } from './Input';
import { Field, Formik, Form } from 'formik';

export const PersonalInformation = () => {
    return (
        <Container>
            <Formik>
                <Form>
                    <Input name="firstName" label="Ім'я" />
                    <Input name="lastName" label="Прізвище" />
                    <Input name="email" label="Електронна адреса" />
                    <Input name="phone" label="Номер телефону" />
                </Form>
            </Formik>
        </Container>
    );
}

const Container = styled.div`
    margin: 0;
`;