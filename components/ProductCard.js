import React from 'react';
import {View, Image} from 'react-native';
import {useDispatch} from "react-redux";

import Text from './Text';
import Button from "./Button";
import {addProductToCart} from "../actions";
import styles from "../styles";

const ProductCard = ({item: {id, title, imageUrl, description, price}, navigation: {navigate}, manage = false}) => {
    const dispatch = useDispatch();

    return (
        <View style={styles.card}>
            <Image source={{
                uri: imageUrl
            }}
                   style={{...styles.largeImage, ...styles.cardImage}}
            />
            <View style={styles.cardContent}>
                <Text size={2}>{title}</Text>
                <Text numberOfLines={1} size={4}>{description}</Text>
                <View style={styles.cardActionBox}>
                    {manage ?
                        <Button title="Delete" color={2} onPress={() => {}}/> :
                        <Button title="Read More" onPress={() => {
                            navigate('ProductDetailScreen', {id})
                        }}/>
                    }
                    <Text size={4} style={{fontFamily: 'dancing-script'}}>{price}$</Text>
                    {manage ?
                        <Button title="Edit" onPress={() => {}}/> :
                        <Button title="Add To Cart" onPress={() => {
                            dispatch(addProductToCart(id))
                        }}/>
                    }
                </View>
            </View>
        </View>
    );
};

export default ProductCard;