import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';
import tw from '../utils/tailwind';

export default function TaskPreviewCard({ task }) {
    return (
        <View style={tw`bg-white m-5 p-5 rounded-lg shadow-md`}>
            <View style={tw`flex flex-row`}>
                <Text style={tw`mr-auto`}>{task.title}</Text>
                <FontAwesome name="star-o" size={24} color="#FFD125" />
            </View>
            <View style={tw`flex flex-row w-full justify-between mt-3`}>
                <Text style={tw`text-gray-400`}>Rotkreuz</Text>
                <Text style={tw`text-gray-400`}>Noah Emmenegger</Text>
            </View>
        </View>
    );
}
