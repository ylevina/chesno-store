import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { MODULE_NAME as authModuleName, reducer as authReducer } from './auth';
import { MODULE_NAME as categoryModuleName, reducer as categoryReducer } from './category';
import { MODULE_NAME as productsModuleName, reducer as productsReducer } from './products';
import { MODULE_NAME as wishlistModuleName, reducer as wishlistReducer } from './wishlist';

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    [categoryModuleName]: categoryReducer,
    [productsModuleName]: productsReducer,
    [wishlistModuleName]: wishlistReducer,
    [authModuleName]: persistReducer(persistConfig, authReducer)
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store); 