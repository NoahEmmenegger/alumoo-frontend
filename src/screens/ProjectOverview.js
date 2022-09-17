import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from '../utils/tailwind';

export default function ProjectOverview({ route, navigation }) {
    const { project } = route.params;
    return (
        <SafeAreaView>
            <View style={[tw`mt-12 self-center`]}>
                <Text style={[tw`text-center font-bold text-3xl`]}>{project.title}</Text>
                <Text style={[tw`mt-6 backdrop:text-center`]}>{project.description}</Text>
            </View>
            
        </SafeAreaView>
    );
}
