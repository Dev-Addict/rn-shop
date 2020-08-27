import React, {useState} from 'react';
import {View} from 'react-native';
import {FlatList} from "react-native-web";
import {useSelector} from "react-redux";

import Text from "./Text";
import styles from "../styles";
import Colors from "../constants/Colors";
import CartItem from "./CartItem";

const OrderCard = ({item: {id, time, total, cart}, navigation}) => {
    const [isDetailShowing, setDetailShowing] = useState(false);

    const products = useSelector(({products}) => products).filter(({id}) => cart.includes(id));

    return (
        <View style={{...styles.card, ...styles.content, alignItems: 'center'}}>
            <View style={{
                borderBottomWidth: 1,
                borderBottomColor: Colors.foreground,
                width: '100%',
                padding: 5,
                alignItems: 'center',
                marginBottom: 10
            }}>
                <Text size={4}>{id} at {new Date(time).toDateString()}</Text>
            </View>
            <Text size={3}>Total: <Text style={{fontFamily: 'dancing-script'}} size={3}>{total}$</Text></Text>
            <View style={{width: '100%'}}>
                <Text size={3} style={{color: Colors.primary}} onPress={() => setDetailShowing(v => !v)}>
                    {isDetailShowing ? 'Show Less' : 'Show More'}
                </Text>
                {isDetailShowing &&
                products.map(item => <CartItem navigation={navigation} amount={cart.amountOf(item.id)}
                                               item={item} key={item.id} isEditable={false}/>)
                }
            </View>
        </View>
    );
};

export default OrderCard;