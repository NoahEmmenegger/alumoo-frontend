import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function HomeScreen() {
    console.log('test');
    return (
        <SafeAreaView>
            <View>
                <Text style={tw`underline`}>Suggestion</Text>
                <Text style={tw`underline`}>My list</Text>
            </View>
        </SafeAreaView>
    );
}
