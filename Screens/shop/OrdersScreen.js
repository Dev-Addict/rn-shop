import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {useSelector} from "react-redux";

import OrderCard from "../../components/OrderCard";
import styles from "../../styles";

const OrdersScreen = ({navigation}) => {
    const orders = useSelector(({orders}) => orders);

    return (
        <View style={styles.screen}>
            <FlatList data={orders} keyExtractor={({id}) => id} renderItem={(props) => <OrderCard navigation={navigation} {...props}/>}/>
        </View>
    );
};

export default OrdersScreen;