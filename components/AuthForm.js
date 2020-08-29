import React from 'react';
import {View} from 'react-native';
import {Field, reduxForm} from "redux-form";

import Input from "./Input";
import Button from "./Button";
import styles from "../styles";

export const formName = 'AUTH_FORM';
export const formFields = {
    email: 'email',
    password: 'password'
};

const AuthForm = ({submitTitle, handleSubmit, onSubmit}) => {
    return (
        <View>
            <Field name={formFields.email} component={Input} label="Email"/>
            <Field name={formFields.password} component={Input} label="Password"/>
            <View style={styles.row}>
                <Button title={submitTitle} onPress={handleSubmit(onSubmit)}/>
            </View>
        </View>
    );
};

const validate = formValues => {
    const errors = {};

    Object.entries(formValues).forEach(([key, value]) => {
        if (!value)
            errors[key] = 'This field is required.';
    });

    if (!errors[formFields.email])
        if (!/^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(formValues[formFields.email]))
            errors[formFields.email] = 'Email is invalid';

    return errors;
};

export default reduxForm({
    form: formName,
    validate
})(AuthForm);