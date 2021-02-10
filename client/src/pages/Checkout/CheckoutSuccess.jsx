import React from 'react';

import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import styled from 'styled-components';

import { signIn, signUp } from '../../store/auth.jsx';
import { useState } from 'react';

export const CheckoutSuccess = connect(null, { signIn, signUp })(({ signIn, signUp }) => {

    return (
        <Container>
            
        </Container>
    )
})

const Container = styled.div`
max-width: 500px;
margin:40px auto;
`
