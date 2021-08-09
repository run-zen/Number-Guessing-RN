import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../design/Colors';

const NumberContainer = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    );
};

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.secondary,
        color: Colors.secondary,
        padding: 8,
        paddingHorizontal: 20,
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        minWidth: 55,
    },
    number: {
        color: Colors.secondary,
        fontSize: 22,
    },
});
