import React from 'react';

import { connect } from 'react-redux';
import * as Yup from 'yup';
import styled from 'styled-components';

import { signIn, signUp } from '../../store/auth.jsx';
import { LoginForm } from './LoginForm';
import { RegistrationForm } from './RegistrationForm';
import { useState } from 'react';

export const Auth = connect(null, { signIn, signUp })(({ signIn, signUp }) => {

    const [isRegistration, setIsRegistration] = useState(false);

    const initialValues = {
        firstName: '',
        lastName: '',
        login: '',
        email: '',
        loginOrEmail: '',
        password: ''
    }

    const onSubmit = (values) => {
        const { isRegistration, ...credentials } = values;
        if (isRegistration) signUp(credentials);
        else signIn(credentials);
    }

    return (
        <Container>
            <Header>
                <LogoImage src='/img/logo/happy_doggo.svg' alt='cartoon dog' />
                <BackgroundImage>
                    <BubbleText>{isRegistration ? "Привіт! Давай знайомитися :)" : "Привіт! Давно не бачилися :)"}</BubbleText>
                </BackgroundImage>
            </Header>
            <Tabs>
                <Tab highlight={!isRegistration} onClick={() => { setIsRegistration(false) }}>Вхід на сайт</Tab>
                <Tab highlight={isRegistration} onClick={() => { setIsRegistration(true) }}>Реєстрація</Tab>
            </Tabs>
            <FormContainer>
                {isRegistration && <RegistrationForm />}
                {!isRegistration && <LoginForm />}
            </FormContainer>
        </Container>
    )
})

const Container = styled.div`
    max-width: 580px;
    padding: 0 100px 40px;
    margin: o auto;
`;

const FormContainer = styled.div`
    width: 380px;    
`;

const Header = styled.div`
    display: flex;   
    align-items: flex-start;
    position: relative;
    margin: 1.5em 0 0.8em;
`;

const LogoImage = styled.img`
    width: 89px;
    height: 81px;
`;

const BackgroundImage = styled.div`
    background: no-repeat center url('/img/dialog-bubble-small.svg');
    background-size: 101%;
    width: 60%;   
    position: absolute;
    left: 92px;
    bottom: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.8em 0 1.2em 0.5em
`;

const BubbleText = styled.span`
    font-size: 15px;
    
`;

const Tabs = styled.div`
    width: 100%;
    display: flex;
    margin: 0;    
`;

const Tab = styled.a`
    width: 50%;
    text-align: center;
    padding: 1em 0;
    font-weight: ${props => (props.highlight) ? "bold" : "regular"};
   
    :after {
        display: block;
        content:' ';
        width: 100%;
        border-top: ${props => (props.highlight) ? "3px solid #FF8B00" : "1px solid #E8E8E8"};
        margin: 0.5em 0;
    }
`;

