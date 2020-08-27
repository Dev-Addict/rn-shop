import React from 'react';
import {View, FlatList} from 'react-native';
import {useSelector} from "react-redux";
import {HeaderButtons, Item} from "react-navigation-header-buttons";

import ProductCard from "../../components/ProductCard";
import HeaderButton from "../../components/HeaderButton";
import styles from "../../styles";

const UserProductsScreen = ({navigation}) => {
    navigation.setOptions({
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Bars" iconName="md-add" onPress={() => {navigation.navigate('CreateProductScreen')}}/>
            </HeaderButtons>
        )
    });

    const products = useSelector(({products}) => products).filter(({owner}) => owner === 'u1');

    return (
        <View style={styles.screen}>
            <FlatList data={products} keyExtractor={({id}) => id}
                      renderItem={(props) => <ProductCard manage navigation={navigation} {...props}/>}/>
        </View>
    );
};

export default UserProductsScreen;