import React from 'react';
import {View, Image} from 'react-native';
import {useDispatch} from "react-redux";

import Text from "./Text";
import Button from "./Button";
import styles from "../styles";
import {addProductToCart, removeOneProductFromCart} from "../actions";

const CartItem = ({item: {imageUrl, title, description, id, price}, amount, navigation: {navigate}, isEditable = true}) => {
    const dispatch = useDispatch();

    return (
        <View style={{...styles.card, ...styles.row}}>
            <View style={{...styles.row, flex: 9}}>
                <Image source={{
                    uri: imageUrl
                }} style={{...styles.cartImage, ...styles.mediumImage, flex: 3}}/>
                <View style={{...styles.content, flex: 6}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text numberOfLines={1} size={5}>{title}</Text>
                        <Text size={6} style={{fontFamily: 'dancing-script'}}>{price}$</Text>
                    </View>
                    <Text numberOfLines={1} style={{marginBottom: 10}} size={6}>{description}</Text>
                    <Button title="Read more" onPress={() => {
                        navigate('ProductDetailScreen', {
                            id
                        })
                    }}/>
                </View>
            </View>
            <View style={{...styles.content, flex: 1, alignItems: 'center'}}>
                <Button title="+" onPress={isEditable ? () => dispatch(addProductToCart(id)) : () => {
                }} style={isEditable ? {} : {opacity: 0.5}}/>
                <Text>{amount}</Text>
                <Button title="-" color="2" onPress={isEditable ? () => dispatch(removeOneProductFromCart(id)) : () => {
                }} style={isEditable ? {} : {opacity: 0.5}}/>
            </View>
        </View>
    );
};

export default CartItem;