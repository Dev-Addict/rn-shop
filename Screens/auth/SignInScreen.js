import React from 'react';
import {View} from 'react-native';

import AuthForm from "../../components/AuthForm";
import Text from "../../components/Text";
import styles from "../../styles";
import Button from "../../components/Button";

const SignInScreen = ({navigation: {navigate}}) => {
    return (
        <View style={{...styles.screen, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{...styles.card, ...styles.content, width: '80%'}}>
                <AuthForm submitTitle="Sign In" onSubmit={() => {}}/>
                <Text onPress={() => navigate('SignUpScreen')}>Don't have an account yet? Create One</Text>
            </View>
        </View>
    );
};

export default SignInScreen;