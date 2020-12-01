import React from 'react';
import styled from 'styled-components';
import Logo from './Logo.jsx';
import { CategoriesList } from './CategoriesList.jsx';
import { ListItemStyled } from './ListItemStyled.jsx';
import { LinkStyled } from './LinkStyled.jsx';
import { useState } from 'react';

export const Header = () => {
    const [showCategories, setShowCategories] = useState(false);

    return (
        <HeaderStyled className='header'>
            <HeaderTop className='header__top'>
                <div className='header-top__contacts'>
                    <i className="fas fa-phone-alt"></i>
                    <p>+38 (067) 833 16 62, Пн - Нд, 10:00 - 20:00</p>
                </div>
                <ListStyled className='header-top__menu'>
                    <ListItemStyled>
                        <LinkStyled href="#">Наша місія</LinkStyled>
                    </ListItemStyled>
                    <ListItemStyled>
                        <LinkStyled href="#">Новини</LinkStyled>
                    </ListItemStyled>
                    <ListItemStyled>
                        <LinkStyled href="#">Чому ми?</LinkStyled>
                    </ListItemStyled>
                    <ListItemStyled>
                        <LinkStyled href="#">Питання та відповіді</LinkStyled>
                    </ListItemStyled>
                    <ListItemStyled>
                        <LinkStyled href="#">Поради</LinkStyled>
                    </ListItemStyled>
                    <ListItemStyled>
                        <LinkStyled href="#">Як долучитися</LinkStyled>
                    </ListItemStyled>
                    <ListItemStyled>
                        <LinkStyled href="#">Акції</LinkStyled>
                    </ListItemStyled>
                </ListStyled>
            </HeaderTop>
            <HeaderBottom className='header__bottom'>
                <LogoWrap className='header-bottom__logo'>
                    <div>
                        <img src='./img/header/chesnoback7.png' alt="cartoon dog" />
                    </div>
                    <LogoTextWrap>
                        <img src='./img/header/chesnoback5.png' alt="chesno" />
                        <img src='./img/header/chesnoback6.png' alt="store" />
                    </LogoTextWrap>
                </LogoWrap>
                <CategoryMenu className='header-bottom__category-menu'>
                    <CategoryMenu onClick={() => setShowCategories(!showCategories)}>
                        <Accordion >
                            <span></span>
                            <span></span>
                            <span></span>
                        </Accordion>
                        <span>Категорії</span>
                    </CategoryMenu>
                    <div>
                        {showCategories && <CategoriesList></CategoriesList>}
                    </div>
                </CategoryMenu>
                <div className='header-bottom__search-form'>
                    <input type="text" placeholder='Я шукаю...' />
                    <button>Search</button>
                </div>
                <div className='header-bottom__personal'>
                    <i className="far fa-heart"></i>
                    <i className="fas fa-shopping-bag"></i>
                </div>
            </HeaderBottom>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const HeaderTop = styled.div`
    display: flex;
`;

const HeaderBottom = styled.div`
    display: flex;
    align-items: flex-start;
`;

const ListStyled = styled.ul`
    display: flex;
    list-style-type: none;
`;

const LogoWrap = styled.div`
    display: flex;
    justify-content: space-between;
`

const LogoTextWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const CategoryMenu = styled.div`
    display: flex;
`

const Accordion = styled.div`
    border: 1px solid red;
    background: red;
    height: 15px;
    width: 15px;
`;