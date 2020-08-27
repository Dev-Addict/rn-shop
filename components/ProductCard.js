import React, {useState} from 'react';
import {View, Image, Modal} from 'react-native';
import {useDispatch} from "react-redux";

import Text from './Text';
import Button from "./Button";
import {addProductToCart, deleteProduct} from "../actions";
import styles from "../styles";

const ProductCard = ({item: {id, title, imageUrl, description, price}, navigation: {navigate}, manage = false}) => {
    const [isVisible, setVisible] = useState(false);

    const dispatch = useDispatch();

    return (
        <View style={styles.card}>
            {manage &&
            <Modal animationType="slide" transparent={false} visible={isVisible}>
                <View style={{...styles.screen, padding: 30, justifyContent: 'center', alignItems: 'center'}}>
                    <Text size={3} style={{marginBottom: 50}}>Are you sure you want to delete `{title}` from your
                        products?</Text>
                    <View style={{flexDirection: 'column'}}>
                        <Button title="Delete" color={2} style={{marginBottom: 20}}
                                onPress={() => dispatch(deleteProduct(id))}/>
                        <Button title="Cancel" onPress={() => setVisible(false)}/>
                    </View>
                </View>
            </Modal>
            }
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
                        <Button title="Delete" color={2} onPress={() => setVisible(true)}/> :
                        <Button title="Read More" onPress={() => {
                            navigate('ProductDetailScreen', {id})
                        }}/>
                    }
                    <Text size={4} style={{fontFamily: 'dancing-script'}}>{price}$</Text>
                    {manage ?
                        <Button title="Edit" onPress={() => navigate('EditProductScreen', {id})}/> :
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