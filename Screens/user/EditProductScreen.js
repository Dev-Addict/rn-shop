import React from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from "react-redux";

import ProductForm from "../../components/ProductForm";
import Product from "../../models/Product";
import {editProduct} from "../../actions";
import styles from "../../styles";

const EditProductScreen = ({route: {params: {id}}, navigation: {navigate}}) => {
    const dispatch = useDispatch();

    const product = {...useSelector(({products}) => products).find(product => product.id === id)};

    product.price = product.price.toString();

    const onEditSubmit = ({title, imageUrl, description, price}) => {
        dispatch(editProduct(new Product(product.id, product.owner, title, imageUrl, description, parseFloat(price))));
        navigate('UserProductScreen');
    };

    return (
        <View style={styles.screen}>
            <ProductForm submitTitle="Edit" onSubmit={onEditSubmit} initialValues={product}/>
        </View>
    );
};

export default EditProductScreen;