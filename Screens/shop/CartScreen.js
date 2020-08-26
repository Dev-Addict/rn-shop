import React from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from "react-redux";

import CartItem from "../../components/CartItem";
import Text from "../../components/Text";
import Button from "../../components/Button";
import styles from "../../styles";
import Colors from "../../constants/Colors";
import {createOrder, emptyCart} from "../../actions";
import Order from "../../models/Order";

const CartScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const cart = useSelector(({cart}) => cart);

    const products = useSelector(({products}) => products).filter(({id}) => cart.includes(id));

    let total = 0;
    let i = products.length;
    while (i--)
        total += products[i].price * cart.amountOf(products[i].id);

    return (
        <View style={styles.screen}>
            <FlatList data={products} keyExtractor={({id}) => id}
                      renderItem={({item, ...props}) => <CartItem navigation={navigation}
                                                                  amount={cart.amountOf(item.id)}
                                                                  item={item} {...props}/>}/>
            <View style={{
                ...styles.row, ...styles.content,
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: Colors.darkerBackground
            }}>
                <Text size={3}>Total: <Text style={{fontFamily: 'dancing-script'}} size={3}>{total}$</Text></Text>
                <Button title="Order Now" style={total === 0 ? {opacity: 0.5} : {}} onPress={() => {
                    if (total !== 0) {
                        dispatch(createOrder(new Order(cart, total, '')));
                        dispatch(emptyCart());
                    }
                }}/>
            </View>
        </View>
    );
};

export default CartScreen;