import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from '../utils/tailwind';

export default function HomeScreen({ navigation }) {
    const [isMyList, setIsMyList] = useState(false);
    return (
        <View style={tw`bg-white rounded-xl`}>
            <SafeAreaView style={tw`relative`}>
                <View style={tw`flex flex-row justify-center`}>
                    <Text
                        style={tw`${!isMyList ? 'underline text-primary' : ''} m-2 mb-0 text-lg`}
                        onPress={() => setIsMyList(false)}
                    >
                        Suggestion
                    </Text>
                    <Text
                        style={tw`${isMyList ? 'underline text-primary' : ''} m-2 mb-0 text-lg`}
                        onPress={() => setIsMyList(true)}
                    >
                        My list
                    </Text>
                </View>

                <FontAwesome
                    name="plus"
                    size={30}
                    style={tw`text-primary absolute top-15 right-10`}
                    onPress={() => navigation.navigate('CreateProject')}
                />
            </SafeAreaView>
        </View>
    );
}
