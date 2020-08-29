import React from 'react';
import {View} from 'react-native';

import AuthForm from "../../components/AuthForm";
import styles from "../../styles";
import Text from "../../components/Text";

const SignUpScreen = ({navigation: {navigate}}) => {
    return (
        <View style={{...styles.screen, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{...styles.card, ...styles.content, width: '80%'}}>
                <AuthForm submitTitle="Sign Up" onSubmit={() => {}}/>
                <Text onPress={() => navigate('SignInScreen')}>Have an account yet? Sign In</Text>
            </View>
        </View>
    );
};

export default SignUpScreen;