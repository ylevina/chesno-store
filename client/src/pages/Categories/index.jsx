import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { ProductCard } from '../../components/ProductCard';
import { CategoriesList } from '../../components/CategoriesList';
// import { Products } from '../../components/Products';

import { setCategories, selectCategories } from '../../store/category.jsx';
import { filterProducts, selectFilteredProducts } from '../../store/products.jsx';

const mapStateToProps = state => ({
    categories: selectCategories(state),
    products: selectFilteredProducts(state)
});

export const Categories = connect(mapStateToProps, { selectCategories, filterProducts })(
    ({ categories, filterProducts, products }) => {

        const [topCategory, setTopCategory] = useState('');
        const [secondaryCategory, setSecondaryCategory] = useState('');

        useEffect(() => {
            filterProducts(topCategory && topCategory.id, secondaryCategory && secondaryCategory.id);
        }, [topCategory, secondaryCategory]);


        return (
            <CategoriesStyled>
                <Header>
                    <Heading>Для дому</Heading>
                    <select>
                        <option value="">Від дорогих до дешевих</option>
                        <option value="">Від дешевих до дорогих</option>
                        <option value="">Популярні</option>
                    </select>
                </Header>
                <Main>
                    <Filter>
                        <div>
                            <MenuHeading>
                                Категорії
                            </MenuHeading>
                            <ListStyled>
                                {categories.filter(el => el.level == 0).map(el => (
                                    <ListItemStyled onClick={() => { setTopCategory(el); setSecondaryCategory('');} }>
                                        <Checkbox isChecked={topCategory && topCategory.id == el.id}></Checkbox>
                                        <pStyled>{el.name}</pStyled>
                                    </ListItemStyled>))}
                            </ListStyled>
                        </div>
                        {topCategory && <div>
                            <MenuHeading>{topCategory.name}</MenuHeading>
                            <ListStyled>
                                {categories.filter(el => el.level == 1 && el.parentId == topCategory.id).map(el => (
                                    <ListItemStyled onClick={() => setSecondaryCategory(el)}>
                                        <Checkbox isChecked={secondaryCategory && secondaryCategory.id == el.id}></Checkbox>
                                        <pStyled>{el.name}</pStyled>
                                    </ListItemStyled>))}
                            </ListStyled>
                        </div>}
                    </Filter>
                    <Products>
                        <ListStyled>
                            {products.map(el => (<ProductCard key={el.id}
                                imgUrl={el.imageUrls[0]}
                                name={el.name}
                                price={el.currentPrice}
                            />))}
                        </ListStyled>
                    </Products>
                </Main>


            </CategoriesStyled>
        )
    });

const CategoriesStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;   
`;

const Heading = styled.h2`
`;

const Main = styled.div`
    display: flex;
    width: 85%;
`;

const Filter = styled.div`
    display: flex;
    flex-direction: column;
    width: 15%;
`;

const ListStyled = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const ListItemStyled = styled.li`
    display: flex;
    align-items: center;    
`;

const pStyled = styled.p`
    margin: 0;
`;

const MenuHeading = styled.div`
    padding: 10px 20px;
    border: 1px solid #FF8B00;
    border-radius: 30px;
`;


const Checkbox = styled.div`
    height: 10px;
    width: 10px;
    border: 1px solid #FF8B00;
    background-color: ${props => (props.isChecked ? '#FF8B00' : 'white')};
    margin: 0 10px;
`;

const Products = styled.div`
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 30px;    
`;