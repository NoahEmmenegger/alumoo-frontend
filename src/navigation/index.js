import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';
import CreateTask from '../screens/CreateTask';
import CreateProject from '../screens/CreateProject';
import HomeScreen from '../screens/Home';
import Profile from '../screens/Profile';
import Search from '../screens/Search';

const Stack = createNativeStackNavigator();

const BottomTab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Tabs">
                <Stack.Screen name="Tabs" component={Tabs} />
                <Stack.Screen name="CreateProject" component={CreateProject} />
                <Stack.Screen name="CreateTask" component={CreateTask} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function Tabs() {
    return (
        <BottomTab.Navigator initialRouteName="Home">
            <BottomTab.Screen name="Home" component={HomeScreen} />
            <BottomTab.Screen name="Search" component={Search} />
            <BottomTab.Screen name="Profile" component={Profile} />
        </BottomTab.Navigator>
    );
}
