import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import ProductsOverviewScreen from "../Screens/shop/ProductsOverviewScreen";
import ProductDetailScreen from "../Screens/shop/ProductDetailScreen";
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
                },
                headerBackTitle: '',
                headerBackImage: () => <Ionicons name="md-arrow-back" size={25} color={Colors.foreground}/>
            }}>
                <ShopStack.Screen name="ProductsOverview" component={ProductsOverviewScreen} options={{title: "Shop"}}/>
                <ShopStack.Screen name="ProductDetailScreen" component={ProductDetailScreen}/>
            </ShopStack.Navigator>
        </NavigationContainer>
    );
};

export default ShopNavigator;