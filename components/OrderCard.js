import React from 'react';
import {View} from 'react-native';

import Text from "./Text";
import styles from "../styles";
import Colors from "../constants/Colors";

const OrderCard = ({item: {id, time, total}}) => {
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
        </View>
    );
};

export default OrderCard;