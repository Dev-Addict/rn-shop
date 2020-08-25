import {StyleSheet, Dimensions} from 'react-native';

import Colors from "../constants/Colors";

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.background,
        minHeight: Dimensions.get('window').height
    },
    text: {
        color: Colors.foreground,
        fontSize: 12,
        fontFamily: 'raleway-light'
    },
    largeImage: {
        width : '100%',
        height: 300,
        backgroundColor: Colors.foreground
    },
    cardImage: {
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8
    },
    card: {
        margin: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: Colors.foreground,
        shadowColor: Colors.foreground,
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 3
    },
    cardContent: {
        padding: 20
    },
    text1: {
        fontSize: 20,
        fontFamily: 'raleway-medium'
    },
    text2: {
        fontSize: 18,
        fontFamily: 'raleway-medium'
    },
    text3: {
        fontSize: 16,
        fontFamily: 'raleway'
    },
    text4: {
        fontSize: 14,
        fontFamily: 'raleway'
    },
    text5: {
        fontSize: 12,
        fontFamily: 'raleway-light'
    },
    text6: {
        fontSize: 10,
        fontFamily: 'raleway-light'
    },
    cardActionBox: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button : {
        borderRadius: 5,
        paddingVertical: 7,
        paddingHorizontal: 12
    },
    primary: {
        backgroundColor: Colors.primary
    },
    secondary: {
        backgroundColor: Colors.secondary
    },
    danger: {
        backgroundColor: Colors.danger
    },
    content: {
        padding: 10
    },
    actionBox: {
        padding: 10,
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

export default styles;