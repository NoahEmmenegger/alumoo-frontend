import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames'

export default function HomeScreen() {
    console.log('test');
    return (
        <SafeAreaView>
            <Text style={[tw`bg-red-600`]}>Home</Text>
        </SafeAreaView>
    );
}
