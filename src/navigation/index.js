import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import ProjectOverview from '../screens/ProjectOverview';
import SetupSkills from '../screens/SetupSkills';
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
            <Stack.Navigator initialRouteName="Tabs" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Tabs" component={Tabs} />
                <Stack.Screen name="CreateProject" component={CreateProject} />
                <Stack.Screen name="CreateTask" component={CreateTask} />
                <Stack.Screen name="SetupSkills" component={SetupSkills} />
                <Stack.Screen name="ProjectOverview" component={ProjectOverview} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function Tabs() {
    return (
        <BottomTab.Navigator
            initialRouteName="Home"
            screenOptions={{ tabBarActiveTintColor: '#FFD125', tabBarInactiveTintColor: '#EFEFEF', headerShown: false }}
        >
            <BottomTab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome size={30} style={{ marginBottom: -3 }} name="list" color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome size={30} style={{ marginBottom: -3 }} name="search" color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome size={30} style={{ marginBottom: -3 }} name="user" color={color} />
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
}
