import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Button } from '../../components/Button';
import { BackgroundColor, FontSize } from '../../variables';

export const Banner = () => {
    return (
        <BannerStyled>
            <BannerHeading>Екосумка</BannerHeading>
            <BannerDescription>Для тих, хто хоче споживати відповідально</BannerDescription>
            <Button backgroundColor={BackgroundColor.buttonMain} textColor={'white'} fontSize={FontSize.M} text={'Дізнатися більше'}></Button>
        </BannerStyled>
    );
}

const BannerStyled = styled.div`
    box-sizing: border-box;
    box-shadow: 0 55px 55px -35px rgba(22,22,22,0.3);
    display: flex;
    flex-direction: column;
    align-items: flex-start;   
    background: no-repeat url('/img/banner.png') center/105%;
    border: 1px solid transparent;
    border-radius: 25px;
    width: 100%;
    height: 450px;
    padding: 135px 80px;
    margin-bottom: 60px;
    color: white;
`;

const BannerHeading = styled.h1`
    font-size: ${FontSize.XXL};
    font-weight: 700;
    margin: 0 0 0.2em;

`;
const BannerDescription = styled.p`
    font-size: ${FontSize.XS};
    font-weight: 300;
    margin-bottom: 3em;

`;
const MoreInfoButton = styled.div`

`;