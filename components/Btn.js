import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Btn = (props) => {
    return (
        <View style={{ ...styles.btn, ...props.style }}>{props.children}</View>
    );
};

export default Btn;

const styles = StyleSheet.create({
    btn: {
        borderRadius: 5,
        overflow: 'hidden',
        elevation: 5,
    },
});
