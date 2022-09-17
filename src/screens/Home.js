import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from '../utils/tailwind';

export default function HomeScreen({ navigation }) {
    const [isMyList, setIsMyList] = useState(false);
    return (
        <View style={tw`bg-white rounded-xl`}>
            <SafeAreaView style={tw`flex flex-row justify-center`}>
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

                <Button
                    title="CreateProject"
                    onPress={() =>
                        navigation.navigate('CreateProject')
                    }
                />
            </SafeAreaView>
        </View>
    );
}
