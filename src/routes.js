import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from "./feed";

import logo from '../assets/instagram.png';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer >
            <Stack.Navigator
                headerLayoutPreset="center"
                defaultNavigationOptions={{
                    headerTitle: <Image source={logo} />,
                    headerStyle: {
                        backgroundColor: '#f5f5f5'
                    },
                }}
            >
                <Stack.Screen name="Feed" component={Feed} />
            </Stack.Navigator>
        </NavigationContainer >
    )
};