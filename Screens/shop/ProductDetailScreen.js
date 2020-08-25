import React, {useEffect} from 'react';
import {View, Image, ScrollView} from 'react-native';
import {useDispatch} from "react-redux";

import Text from "../../components/Text";
import styles from "../../styles";
import {useSelector} from "react-redux";
import Button from "../../components/Button";
import {addProductToCart} from "../../actions";

const ProductDetailScreen = ({route: {params}, navigation: {setOptions}}) => {
    const {id} = params;

    const {title, imageUrl, description, price} = useSelector(({products}) => products).find(product => product.id === id);

    const dispatch = useDispatch();

    useEffect(() => {
        setOptions({
            title
        });
    });

    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.screen}>
                <Image source={{
                    uri: imageUrl
                }} style={styles.largeImage}/>
                <View style={styles.content}>
                    <Text size={1}>{title}</Text>
                    <View style={styles.content}>
                        <Text size={4}>{description}</Text>
                        <View style={styles.actionBox}>
                            <Text style={{fontFamily: 'dancing-script'}}>{price}$</Text>
                            <Button title="Add To Cart" onPress={() => {
                                dispatch(addProductToCart(id))
                            }}/>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default ProductDetailScreen;