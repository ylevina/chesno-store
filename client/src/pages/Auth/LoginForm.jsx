import React from 'react';

import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import styled from 'styled-components';

import { signIn } from '../../store/auth.jsx';
import { Input } from '../../components/Input.jsx';
import { Button } from '../../components/Button.jsx';

export const LoginForm = connect(null, { signIn })(({ signIn }) => {

    const initialValues = {
        loginOrEmail: '',
        password: ''
    }

    const onSubmit = (values) => {
        signIn(values.credentials);
    }

    return (
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {({ values }) => (
                    <Form>
                        <FormStyled>
                            <Input name="loginOrEmail" label="Електронна адреса" placeholder='example@example.com' />
                            <Input name="password" type="password" label="Пароль" placeholder='****************' />

                            <Button type="submit" backgroundColor='#FF8B00' textColor='white' onClick={() => { }} text='Увійти' />
                            <ParagraphStyled>або</ParagraphStyled>
                            <Button backgroundColor='#FF8B00' textColor='white' onClick={() => { }} text='Увійти через Facebook' />
                            <Button backgroundColor='#FF8B00' textColor='white' onClick={() => { }} text='Увійти через Google' />
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

const ParagraphStyled = styled.p`
    margin: 1em auto;
`;
