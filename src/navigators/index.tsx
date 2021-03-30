import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@screens/home';
import Detail from '@screens/detail';
import { SharedElement, createSharedElementStackNavigator } from 'react-navigation-shared-element';

const Stack = createSharedElementStackNavigator();

function AppNavigator() {
    return (
        <Stack.Navigator
            mode={'modal'}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name='Home'
                component={Home} />
            <Stack.Screen
                name='Detail'
                component={Detail}
                sharedElements={(route) => {
                    return [route.params.item.id.toString()];
                }} />
        </Stack.Navigator>
    )
}

export default AppNavigator;