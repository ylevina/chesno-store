import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import { ROUTES } from './routes';
import { Home } from '../pages/Home';
import { Auth } from '../pages/Auth';
import { Cart } from '../pages/Cart';
import { Categories } from '../pages/Categories';
import { Checkout } from '../pages/Checkout';
import { Wishlist } from '../pages/Wishlist';
import { Product } from '../pages/Product';
import { useSelector } from 'react-redux';
import { selectUserToken } from '../store/auth';
import styled from 'styled-components';

export const Navigation = () => {
    const token = useSelector(selectUserToken);

    return (
    // <Router>
        <Main>
            <Switch>
                {token &&
                    <Route path={ROUTES.WISHLIST}>
                        <Wishlist />
                    </Route>
                }
                {token &&
                    <Route path={ROUTES.CART}>
                        <Cart />
                    </Route>
                }
                {token &&
                    <Route path={ROUTES.CHECKOUT}>
                        <Checkout />
                    </Route>
                }
                <Route path={ROUTES.CATEGORIES}>
                    <Categories />
                </Route>
                <Route path={ROUTES.PRODUCT} component={Product}>
                    {/* <Product /> */}
                </Route>
                <Route path={ROUTES.HOMEPAGE} exact>
                    <Home />
                </Route>
                <Redirect to='/' />
            </Switch>
        </Main>
    //</Router>
    )
}

const Main = styled.div`
  width: 1180px;
  margin: 0 auto;
`;