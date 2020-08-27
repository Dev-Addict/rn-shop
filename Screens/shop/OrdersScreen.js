import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {useSelector} from "react-redux";

import OrderCard from "../../components/OrderCard";
import styles from "../../styles";

const OrdersScreen = () => {
    const orders = useSelector(({orders}) => orders);

    return (
        <View style={styles.screen}>
            <FlatList data={orders} keyExtractor={({id}) => id} renderItem={OrderCard}/>
        </View>
    );
};

export default OrdersScreen;