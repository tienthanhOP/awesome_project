import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Icon from 'react-native-vector-icons/Feather';
import RippleButton from '@components/RippleButton';

export default function () {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const time = new Date().toLocaleDateString("en-US", options);

    return (
        <View style={styles.container}>
            <RippleButton
                rippleContainerBorderRadius={16}
                style={styles.iconMenu}>
                <Icon name={'menu'} size={22} color={'black'} />
            </RippleButton>
            <Text style={styles.txtTime}>{time}</Text>
            <RippleButton
                rippleContainerBorderRadius={20}>
                <Image source={{ uri: 'https://i.pinimg.com/736x/dc/0b/11/dc0b1104137d7b82d2da2b0b0261da3b.jpg' }}
                    style={styles.imgAvatar}
                />
            </RippleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 56 + getStatusBarHeight(),
        paddingTop: getStatusBarHeight(),
        paddingHorizontal: 24,
        flexDirection: 'row',
        alignItems: 'center',
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 1,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        backgroundColor: 'white',
        zIndex: 99
    },
    iconMenu: {
        height: 32,
        width: 32,
        borderRadius: 16,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 1,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtTime: {
        marginStart: 10,
        color: 'black',
        fontSize: 15,
        opacity: 0.7,
        fontWeight: '600',
        flex: 1
    },
    imgAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignContent: 'flex-end'
    }
})
