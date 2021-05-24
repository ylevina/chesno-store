import React from 'react';

import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import styled from 'styled-components';

import { signUp } from '../../store/auth.jsx';
import { Input } from '../../components/Input.jsx';
import { Button } from '../../components/Button.jsx';
import { FormErrors } from '../../components/FormErrors.jsx';

const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(1, 'Too Short!')
        .max(30, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(8, 'Too Short!')
        .max(30, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .min(5, 'Too Short!')
        .max(250, 'Too Long!')
        .email('Email not valid')
        .required('Required'),
    login: Yup.string()
        .min(6, 'Too Short!')
        .max(30, 'Too Long!')
        .required('Required'),
    password: Yup.string()
        .min(8, 'Too Short!')
        .max(30, 'Too Long!')
        .required('Required'),
    repassword: Yup.string()
        .min(8, 'Too Short!')
        .max(30, 'Too Long!')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
})

export const RegistrationForm = connect(null, { signUp })(({ signUp, handleClose }) => {

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
        handleClose();
    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({ errors, values }) => (
                <Form>
                    <FormStyled>
                        <Input name="firstName" label="Ім'я" />
                        <Input name="lastName" label="Прізвище" />
                        <Input name="email" label="Електронна адреса" />
                        <Input name="login" label="Нікнейм" />
                        <Input name="password" type="password" label="Пароль" placeholder='****************' />
                        <Input name="repassword" type="password" label="Підтвердіть пароль" placeholder='****************' />

                        <Button type="submit" backgroundColor='#FF8B00' textColor='white' onClick={() => { }} text='Зареєструватися' />
                        <FormErrors errors={errors} />
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
