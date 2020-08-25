import React from 'react';
import {applyMiddleware, createStore} from "redux";
import reduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font'

import ShopNavigator from "./navigation/ShopNavigator";
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(reduxThunk));

Array.prototype.removeIf = function(callback) {
    let i = this.length;
    while (i--) {
        if (callback(this[i], i)) {
            this.splice(i, 1);
        }
    }
};

Array.prototype.removeOneIf = function(callback) {
    let i = this.length;
    while (i--) {
        if (callback(this[i], i)) {
            this.splice(i, 1);
            return
        }
    }
};

const App = () => {
    let [isFontLoaded] = useFonts({
        'raleway-bold': require('./assets/fonts/raleway-bold.ttf'),
        'raleway-bold-italic': require('./assets/fonts/raleway-bold-italic.ttf'),
        'raleway-italic': require('./assets/fonts/raleway-italic.ttf'),
        'raleway-light': require('./assets/fonts/raleway-light.ttf'),
        'raleway-light-italic': require('./assets/fonts/raleway-light-italic.ttf'),
        'raleway-medium': require('./assets/fonts/raleway-medium.ttf'),
        'raleway-medium-italic': require('./assets/fonts/raleway-medium-italic.ttf'),
        'raleway': require('./assets/fonts/raleway-regular.ttf'),
        'raleway-semi-bold': require('./assets/fonts/raleway-semi-bold.ttf'),
        'raleway-semi-bold-italic': require('./assets/fonts/raleway-semi-bold-italic.ttf'),
        'dancing-script': require('./assets/fonts/dancing-script-regular.ttf')
    });

    if (!isFontLoaded)
        return <AppLoading/>;

    return (
        <Provider store={store}>
            <ShopNavigator/>
        </Provider>
    );
};

export default App;