import React from 'react';
import {View} from 'react-native';
import {Field, reduxForm} from "redux-form";

import Input from "./Input";
import Button from "./Button";
import styles from "../styles";

export const formName = 'PRODUCT_FORM';
export const formFields = {
    title: 'title',
    imageUrl: 'imageUrl',
    description: 'description',
    price: 'price'
};

const ProductForm = ({submitTitle, handleSubmit, onSubmit}) => {
    return (
        <View style={styles.content}>
            <Field name={formFields.title} component={Input} label="Title"/>
            <Field name={formFields.imageUrl} component={Input} label="Image URL"/>
            <Field name={formFields.description} component={Input} label="Description"/>
            <Field name={formFields.price} component={Input} label="Price"/>
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

    return errors;
};

export default reduxForm({
    form: formName,
    validate
})(ProductForm);