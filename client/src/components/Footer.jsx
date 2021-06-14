import React from 'react';
import styled from 'styled-components';
import { CategoriesList } from './CategoriesList.jsx';
import { ListStyled } from './ListStyled.jsx';
import { ListItemStyled } from './ListItemStyled.jsx';
import { LinkStyled } from './LinkStyled.jsx';
import { FontSize } from '../variables.js';

export const Footer = () => {
    return (
        <FooterStyled className='footer'>
            <Wrapper>
                <Info>
                    <FooterColumn className='footer__contacts'>
                        <BlockHeading>Контакти</BlockHeading>
                        <div>
                            <SmallBold>+38 (067) 833 16 62</SmallBold>
                            <SmallBold>+38 (093) 134 96 62</SmallBold>
                        </div>
                        <div>
                            <SmallLight>Київ, вул. Немировича, 5</SmallLight>
                            <Location>
                                <LinkStyled right="10px"><img src='/img/location.svg' alt='location icon' /></LinkStyled>
                                <p>Схема проїзду</p>
                            </Location>
                            <FlexRow>
                                <SmallLight>Пн - Нд, </SmallLight>
                                <SmallBold>10:00 - 20:00</SmallBold>
                            </FlexRow>
                        </div>
                    </FooterColumn>
                    <FooterColumn className='footer__categories'>
                        <BlockHeading>Категорії товарів</BlockHeading>
                        <FooterCategories>
                            <CategoriesList className='categories__menu' />
                        </FooterCategories>
                    </FooterColumn>
                    <FooterColumn className='footer__about-us'>
                        <BlockHeading>Про нас</BlockHeading>
                        <ListStyled className='about-us__menu'>
                            <ListItemStyled><LinkStyled to="" color='white'>Наша місія</LinkStyled></ListItemStyled>
                            <ListItemStyled><LinkStyled to="" color='white'>Новини</LinkStyled></ListItemStyled>
                            <ListItemStyled><LinkStyled to="" color='white'>Чому ми?</LinkStyled></ListItemStyled>
                            <ListItemStyled><LinkStyled to="" color='white'>Акції</LinkStyled></ListItemStyled>
                            <ListItemStyled><LinkStyled to="" color='white'>Як долучитися</LinkStyled></ListItemStyled>
                        </ListStyled>
                    </FooterColumn>
                    <FooterColumn className='footer__help'>
                        <BlockHeading>Допомога</BlockHeading>
                        <ListStyled className='help__menu'>
                            <ListItemStyled><LinkStyled to="" color='white'>Доставка і оплата</LinkStyled></ListItemStyled>
                            <ListItemStyled><LinkStyled to="" color='white'>Повернення товару</LinkStyled></ListItemStyled>
                            <ListItemStyled><LinkStyled to="" color='white'>Гарантія</LinkStyled></ListItemStyled>
                            <ListItemStyled><LinkStyled to="" color='white'>Питання та відповіді</LinkStyled></ListItemStyled>
                            <ListItemStyled><LinkStyled to="" color='white'>Поради</LinkStyled></ListItemStyled>
                        </ListStyled>
                    </FooterColumn>
                    <FooterColumn className='footer__subscribe'>
                        <div>
                            <BlockHeading>Підписатися на розсилку</BlockHeading>
                            <input type="email" placeholder='example@example.com' />
                            <LinkStyled right="10px"><img src='/img/mail.svg' alt='envelope icon' /></LinkStyled>
                        </div>
                        <div className='subscribe__social'>
                            <BlockHeading>Ми у соціальних мережах</BlockHeading>
                            <SocialIcons>
                                <LinkStyled right="10px"><img src='/img/social/facebook.svg' alt='Facebook icon' /></LinkStyled>
                                <LinkStyled right="10px"><img src='/img/social/youtube.svg' alt='Youtube icon' /></LinkStyled>
                                <LinkStyled right="10px"><img src='/img/social/instagram.svg' alt='Instagram icon' /></LinkStyled>
                                <LinkStyled right="10px"><img src='/img/social/twitter.svg' alt='Twitter icon' /></LinkStyled>
                            </SocialIcons>
                        </div>
                    </FooterColumn>
                </Info>
                <Copyright>
                    <p>Kyiv, 2021, chesnostore.com</p>
                </Copyright>
            </Wrapper>
        </FooterStyled>
    );
};

const FooterStyled = styled.footer`
    width: 100%;   
    background: rgb(51,51,51,1);
    color: rgb(224,224,224,1);
    padding: 0;
`;

const Wrapper = styled.div`
    width: 1180px;
    margin: 0 auto;
    padding: 55px 0 12px
`;

const Info = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 3fr 1fr 1.5fr 2fr;
    gap: 0.5em;
`;

const FooterColumn = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;     
`;

const BlockHeading = styled.h3`
    margin: 0 0 1.2em 0;
    padding-bottom: 0.6em;
    font-size: 18px;
    font-weight: 700;
    border-bottom: 2px solid #FF8B00;    
`;

const Location = styled.div`
    display: flex;
    align-items: center;
    margin: 1em 0;    
`;

const Copyright = styled.div`
    :before {
        display: block;
        content: ' ';
        width: 100%;
        height: 1px;
        background: gray;
        margin: 20px 0;        
    }
`;

const FooterCategories = styled.div`
    display: flex;
`;

const SmallBold = styled.p`
    font-size: ${FontSize.XXS};
    font-weight: 700;
    margin: 0 0 12px 0;
`;

const SmallLight = styled.p`
    font-size: ${FontSize.XXS};
    font-weight: 400;
`;

const FlexRow = styled.div`
    display: flex;
`;

const LinkSmall = styled.a`

`;

const SocialIcons = styled.div`
    display: flex;
`;

// const ListStyled = styled.ul`
//     list-style-type: none;
//     margin: 0;
//     padding: 0;
// `;