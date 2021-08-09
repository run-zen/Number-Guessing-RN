import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../design/Colors';

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 110,
        paddingTop: 45,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 25,
    },
});
