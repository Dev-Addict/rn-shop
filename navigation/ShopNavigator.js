import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Ionicons} from "@expo/vector-icons";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from '../components/HeaderButton'

import ProductsOverviewScreen from "../Screens/shop/ProductsOverviewScreen";
import ProductDetailScreen from "../Screens/shop/ProductDetailScreen";
import Colors from "../constants/Colors";
import CartScreen from "../Screens/shop/CartScreen";
import OrdersScreen from "../Screens/shop/OrdersScreen";
import UserProductsScreen from "../Screens/user/UserProductsScreen";
import EditProductScreen from "../Screens/user/EditProductScreen";
import CreateProductScreen from "../Screens/user/CreateProductScreen";

const ShopStack = createStackNavigator();

const Shop = () => (
    <ShopStack.Navigator screenOptions={({navigation: {navigate, toggleDrawer}}) => ({
        headerStyle: {
            backgroundColor: Colors.darkerBackground,
        },
        headerTintColor: Colors.foreground,
        headerTitleStyle: {
            fontFamily: 'raleway'
        },
        headerBackTitle: '',
        headerBackImage: () => <Ionicons name="md-arrow-back" size={25} color={Colors.foreground}/>,
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Cart" iconName="md-cart" onPress={() => {
                    navigate('CartScreen')
                }}/>
            </HeaderButtons>
        ),
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Bars" iconName="md-menu" onPress={toggleDrawer}/>
            </HeaderButtons>
        )
    })}>
        <ShopStack.Screen name="ProductsOverview" component={ProductsOverviewScreen} options={{title: "Shop"}}/>
        <ShopStack.Screen name="ProductDetailScreen" component={ProductDetailScreen}/>
        <ShopStack.Screen name="CartScreen" component={CartScreen} options={{title: "Cart"}}/>
    </ShopStack.Navigator>
);

const OrdersStack = createStackNavigator();

const Orders = () => (
    <OrdersStack.Navigator screenOptions={({navigation: {toggleDrawer}}) => ({
        headerStyle: {
            backgroundColor: Colors.darkerBackground,
        },
        headerTintColor: Colors.foreground,
        headerTitleStyle: {
            fontFamily: 'raleway'
        },
        headerBackTitle: '',
        headerBackImage: () => <Ionicons name="md-arrow-back" size={25} color={Colors.foreground}/>,
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Bars" iconName="md-menu" onPress={toggleDrawer}/>
            </HeaderButtons>
        )
    })}>
        <OrdersStack.Screen name="OrdersScreen" component={OrdersScreen} options={{title: "Orders"}}/>
    </OrdersStack.Navigator>
);

const UserStack = createStackNavigator();

const User = () => (
    <UserStack.Navigator screenOptions={({navigation: {toggleDrawer}}) => ({
        headerStyle: {
            backgroundColor: Colors.darkerBackground,
        },
        headerTintColor: Colors.foreground,
        headerTitleStyle: {
            fontFamily: 'raleway'
        },
        headerBackTitle: '',
        headerBackImage: () => <Ionicons name="md-arrow-back" size={25} color={Colors.foreground}/>,
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Bars" iconName="md-menu" onPress={toggleDrawer}/>
            </HeaderButtons>
        )
    })}>
        <UserStack.Screen name="UserProductScreen" component={UserProductsScreen} options={{title: "My Products"}}/>
        <UserStack.Screen name="EditProductScreen" component={EditProductScreen}/>
        <UserStack.Screen name="CreateProductScreen" component={CreateProductScreen} options={{title: "Create Product"}}/>
    </UserStack.Navigator>
);

const ShopDrawer = createDrawerNavigator();

const ShopNavigator = () => {
    return (
        <NavigationContainer>
            <ShopDrawer.Navigator initialRouteName="Shop">
                <ShopDrawer.Screen name="Shop" component={Shop} options={{
                    drawerIcon: ({size, color}) => <Ionicons name="ios-home" size={size} color={color}/>
                }}/>
                <ShopDrawer.Screen name="Orders" component={Orders} options={{
                    drawerIcon: ({size, color}) => <Ionicons name="md-cart" size={size} color={color}/>
                }}/>
                <ShopDrawer.Screen name="Account" component={User} options={{
                    drawerIcon: ({size, color}) => <Ionicons name="md-person" size={size} color={color}/>
                }}/>
            </ShopDrawer.Navigator>
        </NavigationContainer>
    );
};

export default ShopNavigator;