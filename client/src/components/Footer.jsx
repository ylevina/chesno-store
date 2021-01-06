import React from 'react';
import styled from 'styled-components';
import { CategoriesList } from './CategoriesList.jsx';
import { ListStyled } from './ListStyled.jsx';
import { ListItemStyled } from './ListItemStyled.jsx';
import { LinkStyled } from './LinkStyled.jsx';

export const Footer = () => {
    return (
        <FooterStyled className='footer'>
                <Wrapper>
                    <Content>
                        <div className='footer__contacts'>
                            <BlockHeading>Контакти</BlockHeading>
                            <div>
                                <p>+38 (067) 833 16 62</p>
                                <p>+38 (093) 134 96 62</p>
                            </div>
                            <div>
                                <p>Київ, вул. Немировича, 5</p>
                                <div>
                                    <i className="fas fa-map-marker-alt"></i>
                                    <p>Схема проїзду</p>
                                </div>
                                <p>Пн - Нд, 10:00 - 20:00</p>
                            </div>
                        </div>
                        <div className='footer__categories'>
                            <BlockHeading>Категорії</BlockHeading>
                            <CategoriesList className='categories__menu'></CategoriesList>
                        </div>
                        <div className='footer__about-us'>
                            <BlockHeading>Про нас</BlockHeading>
                            <ListStyled className='about-us__menu'>
                                <ListItemStyled><LinkStyled to="" color='white'>Наша місія</LinkStyled></ListItemStyled>
                                <ListItemStyled><LinkStyled to="" color='white'>Новини</LinkStyled></ListItemStyled>
                                <ListItemStyled><LinkStyled to="" color='white'>Чому ми?</LinkStyled></ListItemStyled>
                                <ListItemStyled><LinkStyled to="" color='white'>Акції</LinkStyled></ListItemStyled>
                                <ListItemStyled><LinkStyled to="" color='white'>Як долучитися</LinkStyled></ListItemStyled>
                            </ListStyled>
                        </div>
                        <div className='footer__help'>
                            <BlockHeading>Допомога</BlockHeading>
                            <ul className='help__menu'>
                                <ListItemStyled><LinkStyled to="" color='white'>Доставка і оплата</LinkStyled></ListItemStyled>
                                <ListItemStyled><LinkStyled to="" color='white'>Повернення товару</LinkStyled></ListItemStyled>
                                <ListItemStyled><LinkStyled to="" color='white'>Гарантія</LinkStyled></ListItemStyled>
                                <ListItemStyled><LinkStyled to="" color='white'>Питання та відповіді</LinkStyled></ListItemStyled>
                                <ListItemStyled><LinkStyled to="" color='white'>Поради</LinkStyled></ListItemStyled>
                            </ul>
                        </div>
                        <div className='footer__subscribe'>
                            <div>
                                <BlockHeading>Підписатися на розсилку</BlockHeading>
                                <input type="email" placeholder='example@example.com' />
                                <a><i className="far fa-envelope"></i></a>
                            </div>
                            <div className='subscribe__social'>
                                <BlockHeading>Ми у соціальних мережах</BlockHeading>
                                <div>
                                    <i className="fab fa-facebook-square"></i>
                                    <i className="fab fa-youtube"></i>
                                    <i className="fab fa-instagram"></i>
                                    <i className="fab fa-twitter-square"></i>
                                </div>
                            </div>
                        </div>
                    </Content>
                </Wrapper>
        </FooterStyled>
    )
}

const FooterStyled = styled.footer`
    width: 100%;   
    background: rgb(51,51,51,1);
    color: rgb(224,224,224,1);
    padding: 0;
`;

const Wrapper = styled.div`
    width: 1180px;
    margin: 0 auto;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 50px 0;
`;

const BlockHeading = styled.h3`
    margin: 10px 0;
    font-size: 18px;
    font-weight: normal;
    ::after {
        content: ' ';
        height: 5px;
        width: 50px;
        border-top: 2px solid #FF8B00;
      }
`;