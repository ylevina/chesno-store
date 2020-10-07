import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

export const AuthForm = () => {
    const initialValues = {
        firstName: '',
        lastName: '',
        login: '',
        emal: '',
        password: ''
    }

    const onSubmit = (values) => {
        const { isRegistration, ...credentials } = values;
        // sign(credentials, isRegistration)
    }

    return (
        <Container>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {({ values }) => (
                    <Form>
                        {values.isRegistration &&
                            <>
                                <Field name="firstName"></Field>
                                <Field name="lastName"></Field>
                                <Field name="login" placeholder='login'></Field>
                                <Field name="email" placeholder='email'></Field>
                            </>
                        }

                        <Field name="password"></Field>
                        <button>Sign Up</button>
                    </Form>)
                }
            </Formik>
        </Container>
    )
}

const Container = styled.div`
max-width: 500px;
margin:40px auto;
`