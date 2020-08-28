import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {getOrders} from "../../actions";

import OrderCard from "../../components/OrderCard";
import styles from "../../styles";

const OrdersScreen = ({navigation}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrders());
    }, []);

    const orders = useSelector(({orders}) => orders);
    const isLoading = useSelector(({isLoading}) => isLoading);

    return (
        <View style={styles.screen}>
            <FlatList data={orders} onRefresh={() => dispatch(getOrders())} refreshing={isLoading} keyExtractor={({id}) => id} renderItem={(props) => <OrderCard navigation={navigation} {...props}/>}/>
        </View>
    );
};

export default OrdersScreen;