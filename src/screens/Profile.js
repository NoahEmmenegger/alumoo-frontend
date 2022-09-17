import React from 'react';
import { Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Profile({ navigation }) {
    return (
        <SafeAreaView>
            <Text>Profile</Text>
            <Button title='Create Project' onPress={() => navigation.navigate('CreateProject')} />
        </SafeAreaView>
    );
}
