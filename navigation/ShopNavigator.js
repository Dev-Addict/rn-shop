import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ProductsOverviewScreen from "../Screens/shop/ProductsOverviewScreen";

const ShopStack = createStackNavigator();

const ShopNavigator = () => {
    return (
        <NavigationContainer>
            <ShopStack.Navigator>
                <ShopStack.Screen name="ProductsOverview" component={ProductsOverviewScreen}/>
            </ShopStack.Navigator>
        </NavigationContainer>
    );
};

export default ShopNavigator;