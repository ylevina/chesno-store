import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { store, persistor } from './store';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Navigation } from './navigation';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <div>
            <Header />
            <Navigation />
            <Footer />
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;