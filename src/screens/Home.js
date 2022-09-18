import { EvilIcons } from '@expo/vector-icons';
import React, { Fragment, useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TaskPreviewCard from '../components/TaskPreviewCard';
import { getMyTasks, getSuggestions } from '../utils/api/taksApi';
import tw from '../utils/tailwind';

export default function HomeScreen({ navigation }) {
    const [isMyList, setIsMyList] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function updateTasks() {
        setIsLoading(true);
        setTasks(isMyList ? await getMyTasks() : await getSuggestions());
        setIsLoading(false);
    }

    useEffect(() => {
        updateTasks();
    }, []);

    useEffect(() => {
        updateTasks();
    }, [isMyList]);

    return (
        <Fragment>
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

                    <EvilIcons
                        name="plus"
                        size={35}
                        style={tw`text-primary absolute top-15 right-6`}
                        onPress={() => navigation.navigate('CreateProject')}
                    />
                </SafeAreaView>
            </View>

            {isLoading ? (
                <SafeAreaView style={tw`flex-1 items-center justify-center`}>
                    <Text>Loading...</Text>
                </SafeAreaView>
            ) : (
                <ScrollView style={tw`flex`}>
                    {tasks.map((task) => (
                        <TaskPreviewCard
                            key={task.taskId}
                            task={task}
                            navigation={navigation}
                            onRemove={() => {
                                setTasks(tasks.filter((t) => t.taskId !== task.taskId));
                            }}
                        />
                    ))}
                </ScrollView>
            )}
        </Fragment>
    );
}
