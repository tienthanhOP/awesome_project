import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    Image,
    FlatList,
    Dimensions
} from 'react-native';
import { ListHome } from '@datas/MockData';
import { Item } from '@constants/ItemConstants';
import RippleButton from '@components/RippleButton'
import { NavigationProp } from '@react-navigation/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { SharedElement } from 'react-navigation-shared-element';
import Tabbar from '@components/Tabbar';
import Header from '@components/Header';

const { width } = Dimensions.get('window');

interface HomeProps {
    navigation: NavigationProp<any>
}

function Home({ navigation }: HomeProps) {
    const _renderItem = ({ item, index }: { item: Item, index: number }) => {
        return (
            <RippleButton
                rippleDuration={600}
                style={styles.item}
                onPress={() => navigation.navigate('Detail', { item })}
            >
                <SharedElement id={item.id.toString()}>
                    <Image
                        source={{ uri: item.image }}
                        style={styles.itemImg}
                    />
                </SharedElement>
                <View style={styles.itemContent}>
                    <Text numberOfLines={1} style={styles.itemTitle}>{item.title}</Text>
                    <Text numberOfLines={1} style={styles.itemDescription}>{item.description}</Text>
                </View>
            </RippleButton>
        )
    }

    return (
        <View style={styles.container}>
            <Header />
            <FlatList
                contentContainerStyle={styles.contentContainerStyle}
                data={ListHome}
                extraData={ListHome}
                keyExtractor={(item, index) => index.toString() + item.id}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={_renderItem}
            />
            <Tabbar />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    contentContainerStyle: {
        paddingBottom: 10
    },
    item: {
        width: width / 2 - 15,
        backgroundColor: 'white',
        borderRadius: 10,
        marginStart: 10,
        marginTop: 10,
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 2,
        shadowColor: 'black',
        shadowOpacity: 0.5
    },
    itemImg: {
        width: width / 2 - 15,
        height: width / 2 - 15,
        borderRadius: 10
    },
    itemContent: {
        padding: 10
    },
    itemTitle: {
        fontSize: 13,
        fontWeight: '600',
        color: 'black'
    },
    itemDescription: {
        fontSize: 11,
        color: 'black',
        opacity: 0.5
    }
})

export default Home;
