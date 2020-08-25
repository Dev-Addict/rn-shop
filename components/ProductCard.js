import React from 'react';
import {View, Image} from 'react-native';

import Text from './Text';
import Button from "./Button";
import styles from "../styles";

const ProductCard = ({item: {id, title, imageUrl, description, price}, navigation: {navigate}}) => {
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
                    <Button title="Read More" onPress={() => {navigate('ProductDetailScreen', {
                        id
                    })}}/>
                    <Text size={4} style={{fontFamily: 'dancing-script'}}>{price}$</Text>
                    <Button title="Add To Cart" onPress={() => {}}/>
                </View>
            </View>
        </View>
    );
};

export default ProductCard;