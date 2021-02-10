import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { setCategories, selectCategories } from '../../store/category.jsx';
import { filterProducts, selectFilteredProducts } from '../../store/products.jsx';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { InputPassword } from '../../components/InputPassword';
import { PersonalInformation } from '../../components/PersonalInformation';

const mapStateToProps = state => ({
    categories: selectCategories(state),
    products: selectFilteredProducts(state)
});

export const Profile = connect(mapStateToProps, { selectCategories, filterProducts })(
    ({ categories, filterProducts, products }) => {

        const [topCategory, setTopCategory] = useState('');

        return (
            <ProfileStyled>
                <FlexRow>
                    <FlexColumn>
                        <FlexColumnDecorated>
                            <Heading>Персональна інформація</Heading>
                            <PersonalInformation></PersonalInformation>
                            <Button text="Зберегти зміни" backgroundColor="#FF8B00;" textColor="white" />
                        </FlexColumnDecorated>

                    </FlexColumn>
                    <FlexColumn>
                        <Heading>Персональна інформація</Heading>
                        <InputPassword label="Актуальний пароль" />
                        <InputPassword label="Новий пароль" />
                        <Button text="Зберегти зміни" backgroundColor="#FF8B00;" textColor="white" />
                    </FlexColumn>
                </FlexRow>
            </ProfileStyled >
        )
    });

const ProfileStyled = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 0;
`;

const Heading = styled.h1`  
    font-weight: normal;
    font-size: 20px;
    margin: 0 0 1em;
`;

const FlexColumn = styled.div`
    display: flex;  
    flex-direction: column;    
    align-items: flex-start;
    width: 50%;   
`;

const FlexColumnDecorated = styled(FlexColumn)`
    :last-child:before {
        display: block;
        content:' ';
        width: 100%;
        height: 100px;
        border-right: 1px solid #E8E8E8;
        margin: 30px 0 20px;
    }
`;

const FlexRow = styled.div`
    display: flex;  
    justify-content: space-between;   
    width: 100%;
    margin-bottom: ${props => (props.marginBottom)};
`;

const Left = styled.div`
    display: flex;  
    justify-content: space-between;
    margin: 0 20px 0 0;
    width: 35%;
`;

const Right = styled.div`
    display: flex; 
    flex-direction: column; 
    margin: 0;
    width: 65%;
`;