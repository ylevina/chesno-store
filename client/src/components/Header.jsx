import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logo from './Logo.jsx';
import { CategoriesList } from './CategoriesList.jsx';
import { ListItemStyled } from './ListItemStyled.jsx';
import { LinkStyled } from './LinkStyled.jsx';
import { Button } from './Button.jsx';
import { Modal } from './Modal.jsx';
import { Auth } from '../pages/Auth';
import { Search } from './Search.jsx';
import { BurgerMenu } from './BurgerMenu.jsx';

export const Header = () => {
    const [showCategories, setShowCategories] = useState(false);
    const [showLogIn, setShowLogIn] = useState(false);

    return (
        <HeaderStyled className='header'>
            <HeaderTop className='header__top'>
                <Contacts className='header-top__contacts'>
                    <IconStyled src='/img/phone.svg' alt='phone icon'></IconStyled>
                    <p>+38 (067) 833 1662, Пн - Нд, 10:00 - 20:00</p>
                </Contacts>
                <ListStyled className='header-top__menu'>
                    <ListItemStyled>
                        <LinkStyled color='black' to=''>Наша місія</LinkStyled>
                    </ListItemStyled>
                    <ListItemStyled>
                        <LinkStyled color='black' to=''>Новини</LinkStyled>
                    </ListItemStyled>
                    <ListItemStyled>
                        <LinkStyled color='black' to=''>Чому ми?</LinkStyled>
                    </ListItemStyled>
                    <ListItemStyled>
                        <LinkStyled color='black' to=''>Питання та відповіді</LinkStyled>
                    </ListItemStyled>
                    <ListItemStyled>
                        <LinkStyled color='black' to=''>Поради</LinkStyled>
                    </ListItemStyled>
                    <ListItemStyled>
                        <LinkStyled color='black' to=''>Як долучитися</LinkStyled>
                    </ListItemStyled>
                    <ListItemStyled>
                        <LinkStyled color='black' to=''>Акції</LinkStyled>
                    </ListItemStyled>
                </ListStyled>
            </HeaderTop>
            <HeaderBottom className='header__bottom'>
                <LogoWrap className='header-bottom__logo' to='/'>
                    <div>
                        <LogoImageOne src='/img/logo/happy_doggo.svg' alt='cartoon dog' />
                    </div>
                    <LogoTextWrap>
                        <LogoImageTwo src='/img/logo/chesno.svg' alt='chesno' />
                        <LogoImageThree src='/img/logo/store.svg' alt='store' />
                    </LogoTextWrap>
                </LogoWrap>
                <Categories className='header-bottom__category-menu'>
                    <CategoryMenu onClick={() => setShowCategories(!showCategories)}>
                        <BurgerMenu></BurgerMenu>                        
                        <TextStyled>Категорії</TextStyled>
                    </CategoryMenu>
                    <div>
                        {showCategories && <CategoriesList></CategoriesList>}
                    </div>
                </Categories>
                <Search />
                <Personal className='header-bottom__personal'>
                    <UserLists>
                        <LinkStyled right="10px" to="/wishlist"><img src='/img/heart.svg' alt='heart icon' /></LinkStyled>
                        <LinkStyled to='/cart'><img src='/img/shopping_bag.svg' alt='shopping bag icon' /><TextStyled>Кошик</TextStyled></LinkStyled>
                    </UserLists>
                    <Button text="Log in" backgroundColor="#FF8B00;" textColor="white" onClick={() => { setShowLogIn(true) }} />
                </Personal>
            </HeaderBottom>
            {showLogIn && <Modal id="" handleClose={() => { setShowLogIn(false) }} content={<Auth handleClose={() => { setShowLogIn(false) }} />}></Modal>}

        </HeaderStyled>

    )
}

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)` 
    font-size: 25px; 
    margin: 10px;
    cursor: pointer;
    color: #FF7051;
`;

const HeaderStyled = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
`;

const HeaderTop = styled.div`
    display: flex;
    justify-content: space-between;
    background: #F7F7F7;
    border-radius: 0px 0px 20px 20px;
    width: 1180px;
    font-size: 14px; 
    font-weight: 300;
    margin-bottom: 30px; 
    padding: 0 15px;  

    > ul, p {
        margin-top: 0.5em;
        margin-bottom: 0.5em;
    }
`;

const Contacts = styled.div`
    display: flex;
    align-items: center; 
    width: 30%;
    svg {
        font-size: 14px;
        margin: 0 5px;
    }   
`;

const HeaderBottom = styled.div`
    width: 1180px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

const ListStyled = styled.ul`
    display: flex;   
    list-style-type: none;
    
    li:not(:last-child) {
        margin-right: 20px; 
    }
`;

const LogoWrap = styled(Link)`
    display: flex;
    justify-content: space-between;
    
    img {
        margin: 0 12px 6px 0;
    }
`;
const LogoImageOne = styled.img`
    width: 54px;
    height: 49px;
`;

const LogoImageTwo = styled.img`
    width: 119px;
    height: 29px;
`;

const LogoImageThree = styled.img`
    width: 46px;
    height: 14px;
`;

const LogoTextWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Categories = styled.div`
    display: flex;
    border: 1px solid #FF8B00;
    border-radius: 25px;
    padding: 10px 15px;
`;

const CategoryMenu = styled.div`
    display: flex;  
    align-items: center;  
`;

const IconStyled = styled.img`
    width: 16px;
    height: 16px;
    margin: 0 10px;
`;

const Personal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    width: 20%;      
`;

const UserLists = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    width: 60%;
    svg {
        font-size: 14px;
        margin: 0 10px;
    }   
`;

const TextStyled = styled.p`
    font-family: Nunito;
    font-size: 16px;
    font-weight: 700;
    color: black;
    margin: 0 0.5em 0 1em;
`;