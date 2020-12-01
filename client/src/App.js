import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Auth } from './pages/Auth';
import { Home } from './pages/Home';
import { Button } from './components/Button';
import { Modal } from './components/Modal';

import { store } from './store';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Categories } from './pages/Categories';

function App() {

  const actions = <>
    <Button backgroundColor="orange" text="Ok" onClick={() => { }}></Button>
    <Button backgroundColor="orange" text="Cancel" onClick={() => { }}></Button>
  </>

  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header >
            {/* <Navbar></Navbar> */}
          </Header>

          <Switch>
            <Route path="/categories">
              <Categories />
            </Route>

            <Route path="/product">
              {/* <Product /> */}
            </Route>

            <Route path="/favorites">
              {/* <Favorites /> */}
            </Route>

            <Route path="/cart">
              {/* <Cart /> */}
            </Route>

            <Route path="/checkout">
              {/* <Checkout /> */}
            </Route>

            <Route path="/profile">
              {/* <Profile /> */}
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>

          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
