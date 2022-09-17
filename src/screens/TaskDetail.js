import React, { useState } from 'react';
import { ScrollView, Text, TouchableHighlight, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Star from '../components/common/Star';
import { getTask } from '../utils/api/taksApi';
import tw from '../utils/tailwind';

export default function TaskDetail({ navigation, route }) {
    if (route.params.id <= 0) {
        return (
            <SafeAreaView>
                <Text>Task not found</Text>
            </SafeAreaView>
        );
    }

    const userId = 2;

    const [task, setTask] = useState(null);

    useState(() => {
        async function init() {
            setTask(await getTask(route.params.id));
        }

        init();
    });

    if (task === null) {
        return (
            <SafeAreaView>
                <Text>Loading...</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={tw`p-5`}>
            <View style={tw`flex flex-row`}>
                <Text style={tw`text-2xl w-4/5`}>{task.title}</Text>
                <View style={tw`ml-auto`}>
                    <Star />
                </View>
            </View>
            <View style={tw`flex flex-row mb-10`}>
                <Text style={tw`text-secondary`}>{task.projectName} - </Text>
                <Text style={tw`text-secondary`}>{task.owner}</Text>
            </View>
            <ScrollView style={tw`h-full`}>
                <Text>{task.description}</Text>
                <Text style={tw`mt-5`}>Matching Skills:</Text>
                {task.skills.map((skill) => (
                    <Text key={skill}>- {skill}</Text>
                ))}
            </ScrollView>

            {userId === 2 ? (
                <View style={tw`flex flex-row justify-center mt-auto`}>
                    <TouchableHighlight
                        onPress={() => navigation.navigate('Application', { projectId: route.params.id })}
                        style={tw`bg-primary rounded-lg p-4 text-white m-10`}
                        title="Apply"
                    >
                        <Text style={tw`text-white m-auto`}>view applications</Text>
                    </TouchableHighlight>
                </View>
            ) : (
                <View style={tw`flex flex-row justify-center mt-auto`}>
                    <TouchableHighlight
                        onPress={() => navigation.goBack()}
                        style={tw`bg-secondary rounded-lg p-4 text-white m-10 w-1/3`}
                        title="Apply"
                    >
                        <Text style={tw`text-white m-auto`}>Cancel</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={tw`bg-primary rounded-lg p-4 text-white m-10 w-1/3`} title="Apply">
                        <Text style={tw`text-white m-auto`}>Apply</Text>
                    </TouchableHighlight>
                </View>
            )}
        </SafeAreaView>
    );
}
