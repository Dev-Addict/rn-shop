import React from 'react';
import {applyMiddleware, createStore} from "redux";
import reduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';

import ShopNavigator from "./navigation/ShopNavigator";
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(reduxThunk));

const App = () => {
    return (
        <Provider store={store}>
            <ShopNavigator/>
        </Provider>
    );
};

export default App;