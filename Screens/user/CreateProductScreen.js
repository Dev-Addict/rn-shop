import React from 'react';
import {View} from 'react-native';

import styles from "../../styles";
import ProductForm from "../../components/ProductForm";
import {createProduct} from "../../actions";
import Product from "../../models/Product";
import {useDispatch} from "react-redux";

const CreateProductScreen = ({navigation: {navigate}}) => {
    const dispatch = useDispatch();

    const onCreateSubmit = ({title, imageUrl, description, price}) => {
        dispatch(createProduct(new Product(Date.now().toString(16), 'u1', title, imageUrl, description, parseFloat(price))));
        navigate('UserProductScreen');
    };

    return (
        <View style={styles.screen}>
            <ProductForm submitTitle="Create" onSubmit={onCreateSubmit}/>
        </View>
    );
};

export default CreateProductScreen;