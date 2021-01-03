import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import InputRange from 'react-input-range';

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

export const Categories = connect(mapStateToProps, { selectCategories, filterProducts })(
    ({ categories, filterProducts, products }) => {

        const [topCategory, setTopCategory] = useState('');
        const [secondaryCategory, setSecondaryCategory] = useState('');
        const [priceMin, setPriceMin] = useState(0);
        const [priceMax, setPriceMax] = useState(100);
        const [price, setPrice] = useState({ min: 2, max: 10 });
        const [colorFilter, setColorFilter] = useState([]);
        const [colors, setColors] = useState([]);

        useEffect(() => {
            filterProducts(topCategory && topCategory.id,
                secondaryCategory && secondaryCategory.id);
        }, [topCategory, secondaryCategory]);

        useEffect(() => {
            if (products.length > 0) {
                const colorArr = [];
                products.forEach(el => { if (!colorArr.includes(el.color)) colorArr.push(el.color) })
                setColors(colorArr);
            }
        }, [products]);

        const filter = (products) => {
            let filteredProducts = products;
            if (priceMin) filteredProducts = filteredProducts.filter(el => el.currentPrice >= priceMin)
            if (priceMax) filteredProducts = filteredProducts.filter(el => el.currentPrice <= priceMax)
            if (colorFilter.length > 0) filteredProducts = filteredProducts.filter(el => colorFilter.includes(el.color))
            return filteredProducts;
        }

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
                                    <ListItemStyled key={el.id} onClick={() => { setTopCategory(el); setSecondaryCategory(''); }}>
                                        <Checkbox isChecked={topCategory && topCategory.id == el.id}></Checkbox>
                                        <PStyled>{el.name}</PStyled>
                                    </ListItemStyled>))}
                            </ListStyled>
                        </div>
                        {topCategory && <div>
                            <MenuHeading>{topCategory.name}</MenuHeading>
                            <ListStyled>
                                {categories.filter(el => el.level == 1 && el.parentId == topCategory.id).map(el => (
                                    <ListItemStyled onClick={() => setSecondaryCategory(el)}>
                                        <Checkbox isChecked={secondaryCategory && secondaryCategory.id == el.id}></Checkbox>
                                        <PStyled>{el.name}</PStyled>
                                    </ListItemStyled>))}
                            </ListStyled>
                        </div>}
                        <PriceFilter>
                            <p>Ціна, грн</p>
                            <PriceInputs>
                                <NumberInputStyled type="number" step="any" />
                                <NumberInputStyled type="number" step="any" />
                            </PriceInputs>
                            <PriceSlider type="range"></PriceSlider>
                            <form>
                                <InputRange
                                    maxValue={25}
                                    minValue={0}
                                    value={price}
                                    onChange={value => setPrice({value})} />
                            </form>
                        </PriceFilter>
                        <ColorFilter>
                            <p>Колір</p>
                            <Colors>
                                {colors.map(el => (<ListItemStyled><Color backgroundColor={el} onClick={() => setColorFilter([...colorFilter, el])}>{el}</Color></ListItemStyled>))}
                            </Colors>
                        </ColorFilter>
                    </Filter>
                    <Products>
                        {/* <ListStyled> */}
                        {
                            filter(products).map(el => (<ListItemStyled>
                                <ProductCard key={el.id}
                                    imgUrl={el.imageUrls[0]}
                                    name={el.name}
                                    price={el.currentPrice}
                                />
                            </ListItemStyled>))}
                        {/* </ListStyled> */}
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
    margin: 0;
`;

const ListItemStyled = styled.li`
    display: flex;
    align-items: center;
    margin: 5px;    
`;

const PStyled = styled.p`
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

const Products = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-bottom: 30px;    
`;

const PriceFilter = styled.div`
    display: flex;
    flex-direction: column;
`;

const PriceInputs = styled.div`
    display: flex;
`;

const NumberInputStyled = styled.input`
    width: 30px;
    padding: 10px 20px;
    border: 1px solid #FF8B00;
    border-radius: 20px;
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
`;

const PriceSlider = styled.input`       
`;

const ColorFilter = styled.div`
margin: 0;
`
const Colors = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
`