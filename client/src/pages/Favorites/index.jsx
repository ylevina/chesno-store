import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { ProductCard } from '../../components/ProductCard';
import { CategoriesList } from '../../components/CategoriesList';
// import { Products } from '../../components/Products';

import { setCategories, selectCategories } from '../../store/category.jsx';
import { filterProducts, selectFilteredProducts } from '../../store/products.jsx';
import { Color } from '../../components/Color';

const mapStateToProps = state => ({
    categories: selectCategories(state),
    products: selectFilteredProducts(state)
});

export const Favorites = connect(mapStateToProps, { selectCategories, filterProducts })(
    ({ categories, filterProducts, products }) => {

        const [topCategory, setTopCategory] = useState('');       

        return (
            <CategoriesStyled>
               <p>Favorites</p>
            </CategoriesStyled>
        )
    });

const CategoriesStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;