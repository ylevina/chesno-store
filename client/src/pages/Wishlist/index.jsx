import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { selectWishlist, getWishlist } from '../../store/wishlist.jsx';
import { ProductCard } from '../../components/ProductCard';

const mapStateToProps = state => ({
    wishlist: selectWishlist(state)
});

export const Wishlist = connect(mapStateToProps, { selectWishlist, getWishlist })(
    ({ wishlist, getWishlist }) => {

        useEffect(()=> {
            getWishlist();
            console.log("wishlist useEffect")            
        }, [])

        return (
            <WishlistStyled>
                <ListStyled>
                    {wishlist.map(element => (
                        <ProductCard
                            key={element.id}
                            imgUrl={element.imageUrls[0]}
                            name={element.name}
                            price={element.currentPrice}
                        />
                    ))}
                </ListStyled>
            </WishlistStyled>
        )
    });

const WishlistStyled = styled.div` 
`;

const ListStyled = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 30px;    
`;

const Checkout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const Price = styled.div`
    display: flex;    
`;

const Actions = styled.div`
    width: 100%; 
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 50px;
`;