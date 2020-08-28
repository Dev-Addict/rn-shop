import React from 'react';
import {View, FlatList} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {getOrders} from "../../actions";

import OrderCard from "../../components/OrderCard";
import styles from "../../styles";

const OrdersScreen = ({navigation}) => {
    const dispatch = useDispatch();

    dispatch(getOrders());

    const orders = useSelector(({orders}) => orders);

    return (
        <View style={styles.screen}>
            <FlatList data={orders} keyExtractor={({id}) => id} renderItem={(props) => <OrderCard navigation={navigation} {...props}/>}/>
        </View>
    );
};

export default OrdersScreen;