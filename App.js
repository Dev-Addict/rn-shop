import React from 'react';
import {View} from 'react-native';
import {applyMiddleware, createStore} from "redux";
import reduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';

import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(reduxThunk));

const App = () => {
    return (
        <Provider store={store}>
            <View/>
        </Provider>
    );
};

export default App;