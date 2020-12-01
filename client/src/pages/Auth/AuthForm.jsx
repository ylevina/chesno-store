import React from 'react';

import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import styled from 'styled-components';

import { signIn, signUp } from '../../store/auth.jsx';
import { useState } from 'react';

export const AuthForm = connect(null, { signIn, signUp })(({ signIn, signUp }) => {
    
    const [isRegistration, setIsRegistration] = useState(false);

    const initialValues = {
        firstName: '',
        lastName: '',
        login: '',
        email: '',
        password: ''
    }

    const onSubmit = (values) => {
        const { isRegistration, ...credentials } = values;
        if(isRegistration) signUp(credentials);
        else signIn(credentials);
    }

    return (
        <Container>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {({ values }) => (
                    <Form>
                        <div>
                            <a onClick={() => { setIsRegistration(false) }}>Login</a>
                            <a onClick={() => { setIsRegistration(true) }}>Registration</a>
                        </div>
                        {isRegistration &&
                            <>
                                <Field name="firstName" placeholder='First name'></Field>
                                <Field name="lastName" placeholder='Last name'></Field>
                                <Field name="login" placeholder='Login'></Field>
                                <Field name="email" placeholder='Email'></Field>
                            </>                           
                        }
                        {!isRegistration &&
                            <>
                                <Field name="email" placeholder='Email'></Field>
                            </>
                        }

                        <Field name="password" type="password" placeholder='Password'></Field>
                        <button type="submit">Sign Up</button>                        
                    </Form>)
                }
            </Formik>
        </Container>
    )
})

const Container = styled.div`
max-width: 500px;
margin:40px auto;
`
