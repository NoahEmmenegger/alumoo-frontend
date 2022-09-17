import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';
import HomeScreen from '../screens/Home';
import Profile from '../screens/Profile';

const Stack = createNativeStackNavigator();

const BottomTab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Tabs">
                <Stack.Screen name="Tabs" component={Tabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function Tabs() {
    return (
        <BottomTab.Navigator initialRouteName="Home">
            <BottomTab.Screen name="Home" component={HomeScreen} />
            <BottomTab.Screen name="Profile" component={Profile} />
        </BottomTab.Navigator>
    );
}
