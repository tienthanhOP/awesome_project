import React, { Component, useRef } from 'react';
import { Text, StyleSheet, View, Dimensions, Image, Animated } from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { Item } from '@constants/ItemConstants';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { SharedElement } from 'react-navigation-shared-element';
import LottieView from 'lottie-react-native';

const lottie = require('@anims/reading.json');

const { width } = Dimensions.get('window');

interface DetailProps {
    navigation: NavigationProp<any>,
    route: any
}

export default function ({ route, navigation }: DetailProps) {
    const { item }: { item: Item } = route.params;
    const opacity = useRef(new Animated.Value(0)).current;

    return (
        <View style={styles.container}>
            <View
                style={styles.item}
            >
                <SharedElement id={item.id.toString()}>
                    <Image
                        source={{ uri: item.image }}
                        style={styles.itemImg}
                    />
                </SharedElement>
                <View style={styles.itemContent}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Text style={styles.itemDescription}>{item.description}</Text>
                </View>
            </View>
            <Animated.Text
                style={{
                    opacity,
                    fontSize: 17,
                }}
            >
                {item.description}
            </Animated.Text>
            <View style={{ flex: 1 }}>
                <LottieView autoPlay loop style={styles.lottie} source={lottie} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    item: {
        backgroundColor: 'white'
    },
    itemImg: {
        width: width,
        height: 200 + getStatusBarHeight()
    },
    itemContent: {
        padding: 10
    },
    itemTitle: {
        fontSize: 17,
        fontWeight: '600',
        color: 'black'
    },
    itemDescription: {
        marginTop: 10,
        fontSize: 14,
        color: 'black',
        opacity: 0.5
    },
    lottie: {
        alignSelf: 'center'
    }
})
