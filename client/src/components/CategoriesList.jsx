import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { setCategories, selectCategories } from '../store/category.jsx';
import { ListItemStyled } from './ListItemStyled.jsx';

const mapStateToProps = state => ({
    categories: selectCategories(state)
});

export const CategoriesList = connect(mapStateToProps, { setCategories })(
    ({ setCategories, categories }) => {

        useEffect(() => {
            setCategories();
        }, []);

        return (
            <ListStyled>{categories.map(element => (<li>{element.name}</li>))}</ListStyled>
        )
    });

const ListStyled = styled.ul`
    list-style-type: none;
`;