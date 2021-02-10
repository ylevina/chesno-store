import React from 'react';

import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import styled from 'styled-components';

import { signUp } from '../../store/auth.jsx';
import { Input } from '../../components/Input.jsx';
import { Button } from '../../components/Button.jsx';

export const RegistrationForm = connect(null, { signUp })(({ signUp }) => {

    const initialValues = {
        firstName: '',
        lastName: '',
        login: '',
        email: '',
        loginOrEmail: '',
        password: '',
        passwordConfirm: ''
    }

    const onSubmit = (values) => {
        signUp(values.credentials);
    }

    return (
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {({ values }) => (
                    <Form>
                        <FormStyled>
                            <Input name="firstName" label="Ім'я" />
                            <Input name="lastName" label="Прізвище" />
                            <Input name="email" label="Електронна адреса" />
                            <Input name="login" label="Нікнейм" />
                            <Input name="password" type="password" label="Пароль" placeholder='****************' />
                            <Input name="passwordConfirm" type="password" label="Підтвердіть пароль" placeholder='****************' />

                            <Button type="submit" backgroundColor='#FF8B00' textColor='white' onClick={() => { }} text='Зареєструватися' />
                        </FormStyled>
                    </Form>)
                }
            </Formik>
    )
})

const FormStyled = styled.div`
    display: flex;
    flex-direction: column;
`;

const FieldStyled = styled(Field)`
    width: 400px;
    height: 40px;
    border: 2px solid #E8E8E8;
    box-sizing: border-box;
    border-radius: 20px;
    padding: 0 1.5em;
`;
