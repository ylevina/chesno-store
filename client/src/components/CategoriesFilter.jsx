import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { setCategories, selectCategories } from '../store/category.jsx';
import { useEffect } from 'react';
import { ListItemStyled } from './ListItemStyled.jsx';

const mapStateToProps = state => ({
    categories: selectCategories(state)
});

export const CategoriesFilter = connect(mapStateToProps, { setCategories })(
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