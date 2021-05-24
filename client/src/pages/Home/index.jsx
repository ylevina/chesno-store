import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { CategoryCard } from '../../components/CategoryCard';
import { ProductCard } from '../../components/ProductCard';
import { Section } from '../../components/Section';
import { Banner } from './Banner';
import { FontSize, FontWeight, FontColor, BackgroundColor } from '../../variables.js'

export const Home = () => (
    <HomeStyled>
        <Section>
            <Banner>

            </Banner>
        </Section>
        <Section>
            <SectionHeader>
                <Heading>Користуються попитом</Heading>
                <LinkStyled to="/categories">Всі товари</LinkStyled>
            </SectionHeader>
            <PopularProducts>
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
                <ProductCard
                    name='Сукня із перероблених матеріалів'
                    imgUrl='/img/products/clothes/image11.png'
                    price='800 грн'
                />
                <ProductCard
                    name='Косметичка із водонепроникного паперу Raw Flaw'
                    imgUrl='/img/products/sanitary/image12.png'
                    price='60 грн'
                />
                <ProductCard
                    name='Сонцезахисні окулярі з кавових зерен'
                    imgUrl='/img/products/clothes/image13.png'
                    price='2650 грн'
                />
            </PopularProducts>
        </Section>      
        <Section>
            <SectionHeader>
                <Heading>Популярні категорії товарів</Heading>
                <LinkStyled to="/categories">Всі категорії</LinkStyled>
            </SectionHeader>
            <PopularCategories>
                <CategoryCard
                    name='Базовий набір'
                    description='Речі, які дозволять зменьшити кількість побутових відходів до мінімуму'
                    buttonText='Про набір'
                    url='/category'
                    imgUrl='/img/products/basics/main.png'
                />
                <CategoryCard
                    name='Одяг та аксесуари'
                    description='З перероблених матеріалів, які дозволять бути більш свідомим у тому що носиш'
                    buttonText='Більше'
                    url='/category'
                    imgUrl='/img/products/clothes/main.png'
                />
                <CategoryCard
                    name='Засоби гігієни'
                    description='Безліч засобів особистої гігієни, які не шкодять довкіллю за найнижчими цінами'
                    buttonText='Більше'
                    url='/category'
                    imgUrl='/img/products/sanitary/main.png'
                />
                <CategoryCard
                    name='Для дому'
                    description='Все що потрібно для того щоб правильно організувати та зменьшити кількість відходів'
                    buttonText='Більше'
                    url='/category'
                    imgUrl='/img/products/home/main.png'
                />
            </PopularCategories>
        </Section>

    </HomeStyled>
);

const HomeStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;   
`;

const Heading = styled.h3`
    font-size: ${FontSize.XL};
    font-weight: 600;
    margin: 0 0 0.6em;    
`;

const LinkStyled = styled(Link)`
    font-size: 18px;
    text-decoration: none;
    color: black;
    ::after {
        content: '→';
        color: red;
        margin: 0 0 0 5px;      
    }
`;

const PopularProducts = styled.div`
    display: flex;    
    justify-content: space-between;
    align-items: flex-start;
       
`;

const PopularCategories = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 1180px;
    margin-bottom: 30px;
`;