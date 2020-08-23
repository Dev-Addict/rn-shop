import React, {useEffect} from 'react';
import {FlatList, Text} from 'react-native';
import {useSelector, useDispatch} from "react-redux";
import {getProducts} from "../../actions";

const ProductsOverviewScreen = () => {
    const products = useSelector(({products}) => products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, []);

    return (
        <FlatList data={products} keyExtractor={({id}) => id} renderItem={({item}) => (
            <Text>{item.title}</Text>
        )}/>
    );
};

export default ProductsOverviewScreen;