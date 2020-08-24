import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {useSelector, useDispatch} from "react-redux";
import {getProducts} from "../../actions";

import ProductCard from "../../components/ProductCard";
import styles from "../../styles";

const ProductsOverviewScreen = () => {
    const products = useSelector(({products}) => products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, []);

    return (
        <View style={styles.screen}>
            <FlatList data={products} keyExtractor={({id}) => id} renderItem={ProductCard}/>
        </View>
    );
};

export default ProductsOverviewScreen;