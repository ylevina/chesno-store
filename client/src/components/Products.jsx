import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { setProducts, selectProducts } from '../store/products.jsx';
import { useEffect } from 'react';
import { ListItemStyled } from './ListItemStyled.jsx';
import { ProductCard } from './ProductCard.jsx';

const mapStateToProps = state => ({
    products: selectProducts(state)
});

export const Products = connect(mapStateToProps, { setProducts })(
    ({ setProducts, products }) => {

        useEffect(() => {
            setProducts();
        }, []);

        return (
            <ListStyled>
                {products.map(element => (
                    <ProductCard
                        key={element.id}
                        imgUrl={element.imageUrls[0]}
                        name={element.name}
                        price={element.currentPrice}
                    />
                ))}
            </ListStyled>
        )
    });

const ListStyled = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 30px;    
`;