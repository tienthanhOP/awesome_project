import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useWindowDimensions, useColorScheme } from 'react-native';
import { DefaultTheme, Theme } from '@react-navigation/native';

export default function getTheme(): Theme {
    const { width, height } = useWindowDimensions();
    const dark = useColorScheme() === 'dark';

    return {
        ...DefaultTheme,
        dark,
        colors: {
            primary: '#16a085',
            text: dark ? '#f2f2f2' : '#1a1a1a',
            card: dark ? '#000000' : '#ffffff',
            background: dark ? '#1a1a1a' : '#f2f2f2',
            border: dark ? '#f2f2f2dd' : '#1a1a1add',
            notification: dark ? '#100f0add' : '#f6f5f0dd'
        }
    };
}