import React from 'react';
import {FlatList, View} from 'react-native';
import {useSelector} from "react-redux";

import CartItem from "../../components/CartItem";
import styles from "../../styles";

const CartScreen = ({navigation}) => {
    const cart = useSelector(({cart}) => cart);

    const products = useSelector(({products}) => products).filter(({id}) => cart.includes(id));

    return (
        <View style={styles.screen}>
            <FlatList data={products} keyExtractor={({id}) => id}
                      renderItem={({item, ...props}) => <CartItem navigation={navigation}
                                                                  amount={cart.amountOf(item.id)}
                                                                  item={item} {...props}/>}/>
        </View>
    );
};

export default CartScreen;