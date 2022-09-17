import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import tw from '../utils/tailwind';
import Star from './common/Star';

export default function TaskPreviewCard({ navigation, task }) {
    return (
        <TouchableOpacity
            style={tw`bg-white m-5 p-5 rounded-lg shadow-md`}
            onPress={() => navigation.navigate('TaskDetail', { id: task.taskId })}
        >
            <View style={tw`flex flex-row`}>
                <Text style={tw`mr-auto`}>{task.title}</Text>
                <Star />
            </View>
            <View style={tw`flex flex-row w-full justify-between mt-3`}>
                <Text style={tw`text-gray-400`}>Rotkreuz</Text>
                <Text style={tw`text-gray-400`}>Noah Emmenegger</Text>
            </View>
        </TouchableOpacity>
    );
}
