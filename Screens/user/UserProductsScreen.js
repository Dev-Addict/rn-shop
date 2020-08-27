import React from 'react';
import {View, FlatList} from 'react-native';
import {useSelector} from "react-redux";

import ProductCard from "../../components/ProductCard";
import styles from "../../styles";

const UserProductsScreen = ({navigation}) => {
    const products = useSelector(({products}) => products).filter(({owner}) => owner === 'u1');

    return (
        <View style={styles.screen}>
            <FlatList data={products} keyExtractor={({id}) => id}
                      renderItem={(props) => <ProductCard manage navigation={navigation} {...props}/>}/>
        </View>
    );
};

export default UserProductsScreen;