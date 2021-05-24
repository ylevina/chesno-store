import React from 'react';

import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import styled from 'styled-components';

import { signIn } from '../../store/auth.jsx';
import { Input } from '../../components/Input.jsx';
import { Button } from '../../components/Button.jsx';
import { FormErrors} from '../../components/FormErrors.jsx';

const validationSchema = Yup.object().shape({
    loginOrEmail: Yup.string()
        .min(5, 'Too Short!')
        .max(250, 'Too Long!')
        .email('Email not valid')
        .required('Required'),
    password: Yup.string()
        .min(8, 'Too Short!')
        .max(30, 'Too Long!')
        .required('Required'),
});

export const LoginForm = connect(null, { signIn })(({ signIn, handleClose }) => {

    const initialValues = {
        loginOrEmail: '',
        password: ''
    }

    const onSubmit = (values) => {
        signIn({...values});
        handleClose();
    }

    return (
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                {({ errors, values }) => (
                    <Form>
                        <FormStyled>                            
                            <Input name="loginOrEmail" label="Електронна адреса" placeholder='example@example.com' />
                            <Input name="password" type="password" label="Пароль" placeholder='****************' />

                            <Button type="submit" backgroundColor='#FF8B00' textColor='white' onClick={() => { }} text='Увійти' />
                            <FormErrors errors={errors} />
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