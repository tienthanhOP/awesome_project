import 'react-native-gesture-handler';
import * as React from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from '@navigators/index';
import getTheme from './theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
    const scheme = useColorScheme();

    return (
        <SafeAreaProvider>
            <NavigationContainer theme={getTheme()}>
                <AppNavigator />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}