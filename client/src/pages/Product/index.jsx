import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { selectProducts, getProducts } from '../../store/products.jsx';
import { Button } from '../../components/Button';
import { ProductCard } from '../../components/ProductCard';
import { CategoriesList } from '../../components/CategoriesList';
import { Color } from '../../components/Color';
import { LinkStyled } from '../../components/LinkStyled';

const mapStateToProps = state => ({
    products: selectProducts(state)
});

export const Product = connect(mapStateToProps, { getProducts })(
    ({ getProducts, products, match }) => {

        useEffect(() => {
            if (products.length == 0) getProducts();
        }, []);

        const baseUrl = '/img/products/home/bowl';

        const product = products.find(el => el.itemNo == match.params.id);
        console.log("product: ", product);
        const settings = {
            customPaging: function (i) {
                return (
                    <a>
                        <img src={`${baseUrl}/image3${i + 1}.png`} />
                    </a>
                );
            },
            dots: true,
            dotsClass: "slick-dots slick-thumb",
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 2
        };

        return (
            <Wrapper>
                <Navigation>
                    <ListStyled>
                        <CategoryItem><Link to='/'>Головна сторінка</Link></CategoryItem>
                        <CategoryItem><Link to='/'>Для дому</Link></CategoryItem>
                        <CategoryItem><Link to='/'>Посуд</Link></CategoryItem>
                        <CategoryItem><Link to='/'>Вироби з полірованого кокосу</Link></CategoryItem>
                        <CategoryItem><Link to='/'>Полірована тарілка з кокосу</Link></CategoryItem>
                    </ListStyled>
                </Navigation>
                <ProductWrapper>
                    <SideBar>
                        <ImageSlider></ImageSlider>

                    </SideBar>
                    {product &&
                        <Main>
                            <ProductDetails>
                                <Left>
                                    <SliderStyled {...settings}>
                                        <div>
                                            <SliderImage src='/img/products/home/bowl/image31.png' />
                                        </div>
                                        <div>
                                            <SliderImage src='/img/products/home/bowl/image32.png' />
                                        </div>
                                        <div>
                                            <SliderImage src='/img/products/home/bowl/image33.png' />
                                        </div>
                                        <div>
                                            <SliderImage src='/img/products/home/bowl/image34.png' />
                                        </div>
                                        <div>
                                            <SliderImage src='/img/products/home/bowl/image35.png' />
                                        </div>
                                        <div>
                                            <SliderImage src='/img/products/home/bowl/image36.png' />
                                        </div>
                                        <div>
                                            <SliderImage src='/img/products/home/bowl/image37.png' />
                                        </div>
                                        <div>
                                            <SliderImage src='/img/products/home/bowl/image38.png' />
                                        </div>
                                    </SliderStyled>
                                    <Description>
                                        <DescriptionHeader>Опис:</DescriptionHeader>
                                        <Text>{product.description}</Text>
                                    </Description>
                                </Left>
                                <Right>
                                    <Heading>{product.name}</Heading>
                                    <Code>Код товару: {product.itemNo}</Code>
                                    <Price>{product.currentPrice} грн</Price>
                                    <Button
                                        backgroundColor={'#FF8B00'}
                                        textColor="white"
                                        onClick={() => { }}
                                        text={<><span>Додати в корзину </span> <img src='/img/cart_add.svg' alt='add to cart icon' /></>}>
                                    </Button>
                                    {false && <Button
                                        backgroundColor={'white'}
                                        textColor="#FF8B00"
                                        onClick={() => { }}
                                        text={<span>Видалити з корзини <LinkStyled marginRight="10px"><img src='/img/cart_remove.svg' alt='remove from cart icon' /></LinkStyled></span>}>
                                    </Button>}

                                    <Colors>
                                        <FeatureNameSmall>Колір:</FeatureNameSmall>
                                        <ListStyled>
                                            <li> <Color size={'32px'} backgroundColor={'white'} onClick={() => { }} /></li>
                                            <li> <Color size={'32px'} backgroundColor={'#373027'} onClick={() => { }} /></li>
                                            <li> <Color size={'32px'} backgroundColor={'#695041'} onClick={() => { }} /></li>
                                            <li> <Color size={'32px'} backgroundColor={'#8B7040'} onClick={() => { }} /></li>
                                        </ListStyled>
                                    </Colors>
                                    {product.size && <Size>
                                        <FeatureNameSmall>Розмір, см:</FeatureNameSmall>
                                        <SizeList> {product.size.map(el => <SizeItem>{el}</SizeItem>)}</SizeList>
                                        <p>В наявності <Quantity>{product.quantity}</Quantity> товарів із заданими параметрами</p>
                                    </Size>}
                                    <Additional>
                                        <FeatureNameSmall>Корисні поради по використанню:</FeatureNameSmall>
                                        <VerticalList>
                                            <li>1. Рекомендується застосовувати піали з кокоса для других страв, закусок, салатів, супів-пюре, смузі, морозива та інших продуктів.</li>
                                            <li>2. Посуд з кокоса відмінно підходить, як для домашнього використання, так і для кафе і ресторанів.</li>
                                            <li>3. Ідеальні підходить як подарунок</li>
                                        </VerticalList>
                                    </Additional>
                                </Right>
                            </ProductDetails>
                            <Related>
                                <RelatedHeader>З цим товаром часто купують</RelatedHeader>
                                <RelatedProducts>
                                    <ProductCard
                                        name='Багаторазова авоська для покупок'
                                        imgUrl='/img/products/home/Rectangle55.png'
                                        price='60 грн'
                                    />
                                    <ProductCard
                                        name='Дерев’яна зубна щітка з бамбуку'
                                        imgUrl='/img/products/sanitary/image11.png'
                                        price='75 грн'
                                    />
                                    <ProductCard
                                        name='Дерев’яний столовий набір'
                                        imgUrl='/img/products/home/Rectangle77.png'
                                        price='90 грн'
                                    />
                                </RelatedProducts>
                            </Related>
                        </Main>}
                </ProductWrapper>
            </Wrapper>
        )
    });




const SliderStyled = styled(Slider)`
    transform: rotate(90deg);
    display: flex;
    flex-direction: column;
    width: 450px;
    height: 590px;
    margin-bottom: 20px;
    margin-left: 76px;

    button {
        background: lightgray;
        margin: 260px 0 0 0;
    }

    .slick-track {
        width: 440px;
        height: 500px;
    }

    .slick-list{
        width: 440px;
        height: 500px;
    }    
    
    .slick-slide{
        height: 460px;
        
        > div > div {
            height: 460px;
        }

        img {
            transform: rotate(-90deg);
            width: 460px;
            height: 415px;
            border-radius: 15px;
            margin-top: 60px;
            
        }
    }
    ul {
        margin: 0 auto;
    }
    .slick-dots {        
        margin: 20px auto;
        width: 380px;
        height: 80px;
        li {
            width: 80px;
            height: 80px;  
        }
        img {
            width: 80px;
            height: 80px;  
            border-radius: 10px;
            transform: rotate(-90deg);
        }
    }
    .slick-dots li {
        display: inline-block;
    }
`;

const SliderImage = styled.img`
    transform: rotate(-90deg);
`;

const Wrapper = styled.div`
    padding: 0 0 30px;
`;

const FeatureNameSmall = styled.p`
    margin: 5px 0;
    padding: 0;
    font-weight: bold;
`;

const Navigation = styled.div` 
    display: flex;   
    margin: 20px 0;
    font-size: 14px;
`;

const ListStyled = styled.ul`    
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
`;

const VerticalList = styled.ul`   
    list-style: none;
    margin: 0;
    padding: 0;
`;

//ToDo: find pretty arrow '>'
const CategoryItem = styled.li`
    :not(:last-child):after{
        content: '>';
        margin: 0 5px;
    }   
`;

const ProductWrapper = styled.div`   
    
`;

const SideBar = styled.div`    
`;

const ImageSlider = styled.div`    
`;

const Main = styled.div`
    display: flex;  
    flex-direction: column;   
`;

const ProductDetails = styled.div`   
    display: flex; 
`;

const Left = styled.div` 
    width: 50%;  
`;

const Right = styled.div`   
    width: 50%;
`;

const Image = styled.img`  
    border-radius: 20px;
    margin-bottom: 20px;
`;

const Description = styled.div` 
    width: 85%   
`;

const DescriptionHeader = styled.p`
    margin: 5px 0;
    font-weight: bold;
`;

const Text = styled.p` 
    margin: 0;
`;

const Heading = styled.h1`
    margin: 0;
    font-size: 38px;
`;

const Code = styled.p` 
    font-size: 14px;
    margin: 0;
    color: #828282;
`;

const Price = styled.div`  
    font-size: 38px; 
    color: #FF8B00; 
    margin: 15px 0;
`;

const Colors = styled.div`    
`;

const Size = styled.div`  
    display: flex;
    flex-direction: column;  
    align-items: flex-start;
`;

const SizeList = styled.ul`   
    display: flex;
    aligh-items: 
    box-sizing: border-box;
    list-style: none;
    margin: 0;
    padding: 0 5px;
    border: 1px solid #FF8B00;
    border-radius: 20px;
    li {            
        padding: 2px 5px;
        font-size: 14px;        
    }
    li:not(:last-child) {
        border-right: 1px solid #FF8B00;
    } 
    .active {
        background: rgba(255,217,142,0.2);
    }   
`;

const SizeItem = styled.li`

`;

const Additional = styled.div`
    width: 80%;    
`;

const Related = styled.div`    
`;

const RelatedHeader = styled.div`    
    font-weight: bold;
    font-size: 24px;
    margin: 15px 0;
`;

const RelatedProducts = styled.div`    
    display: flex;
    div {
        margin-right: 20px;
    }
`;

const FlexColumn = styled.div`
    display: flex;  
    flex-direction: column;
    width: 100%;   
`;

const FlexColumnDecorated = styled(FlexColumn)`
    :last-child:before {
        display: block;
        content:' ';
        width: 100%;
        border-top: 1px solid #E8E8E8;
        margin: 30px 0 20px;
    }
`;

const FlexRow = styled.div`
    display: flex;  
    justify-content: space-between;   
    width: 100%;
    margin-bottom: ${props => (props.marginBottom)};
`;

const Quantity = styled.span`
    color: #FF8B00;
`;