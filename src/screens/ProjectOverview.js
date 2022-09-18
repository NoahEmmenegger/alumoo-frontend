import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TaskPreviewCard from '../components/TaskPreviewCard';
import { getProjectById } from '../utils/api/taksApi';
import tw from '../utils/tailwind';

export default function ProjectOverview({ route, navigation }) {
    const { project } = route.params;

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        async function init() {
            let newTask = (await getProjectById(project.projectId)).tasks;
            newTask.forEach((task) => {
                task.taskId = task.taskId | task.id;
            });
            setTasks(newTask);
        }
        init();
    }, []);

    return (
        <SafeAreaView>
            <View style={[tw`mt-12 self-center`]}>
                <Text style={[tw`text-center font-bold text-3xl`]}>{project.title}</Text>
                <Text style={[tw`mt-6 backdrop:text-center`]}>{project.description}</Text>
            </View>

            <ScrollView>
                {tasks.map((task, index) => {
                    return <TaskPreviewCard key={index} task={task} navigation={navigation} />;
                })}
            </ScrollView>
        </SafeAreaView>
    );
}
