import React from 'react';
import { SafeAreaView, Text, View, Button } from 'react-native';

import tw from 'tailwind-react-native-classnames'

export default function HomeScreen( {navigation} ) {
    console.log('test');
    return (
        <View>
            <SafeAreaView>
                <Text style={[tw`bg-red-600`]}>Home</Text>
            </SafeAreaView>

            <Button
                title="CreateProject"
                onPress={() =>
                    navigation.navigate('CreateProject')
                }
            />
        </View>
    );
}
