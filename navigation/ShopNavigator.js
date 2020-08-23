import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ProductsOverviewScreen from "../Screens/shop/ProductsOverviewScreen";
import Colors from "../constants/Colors";

const ShopStack = createStackNavigator();

const ShopNavigator = () => {
    return (
        <NavigationContainer>
            <ShopStack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.darkerBackground,
                },
                headerTintColor: Colors.foreground,
                headerTitleStyle: {
                    fontFamily: 'raleway'
                }
            }}>
                <ShopStack.Screen name="ProductsOverview" component={ProductsOverviewScreen} options={{title: "Shop"}}/>
            </ShopStack.Navigator>
        </NavigationContainer>
    );
};

export default ShopNavigator;