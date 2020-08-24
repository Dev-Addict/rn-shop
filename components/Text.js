import React from 'react';
import {Text as NativeText} from 'react-native';

import styles from "../styles";

const Text = ({style, size = 5, ...props}) => <NativeText
    style={{...styles.text, ...styles[`text${size}`], ...style}} {...props}/>;

export default Text;