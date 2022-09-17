import React from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, ScrollView, View } from 'react-native';
import tw from '../utils/tailwind';
import Emitter from '../utils/emitter';

export default function CreateProject( { navigation } ) {
    const [project, setProject] = React.useState({
        title: '',
        description: '',
        tasks: []
    });

    const handleTaskCreated = (Task) => {
        setProject({...project, tasks: [...project.tasks, Task]})
    }

    const handleCreateProject = () => {
        sliders = project.tasks[0].sliders
        console.log(convertToString(sliders))
    }

    const convertToString = (sliders) => {
        let sliderString  = '';
        sliders.forEach(slider => {
            sliderString += slider.value + ', '
        });

        return sliderString;
    }

    Emitter.on("TaskCreated", handleTaskCreated);

    return (
        <SafeAreaView>
            <ScrollView keyboardShouldPersistTaps='handled'>
                <View style={[tw`mt-3`]}>
                    <Text style={[tw`ml-12`]}>
                        Project Title
                    </Text>
                    <TextInput
                        style={[tw`h-10 w-80 mt-1.5 pl-2 pr-2 self-center border-2 border-gray-300 rounded-3xl`]}
                        onChangeText={(text) => setProject({...project, title: text})}
                        value={project.title}
                    />
                </View>

                <View style={[tw`mt-3`]}>
                    <Text 
                        style={[tw`ml-12`]}>
                        Description
                    </Text>
                    <TextInput
                        style={[tw`h-80 w-80 mt-1.5 p-3 self-center border-2 border-gray-300 rounded-3xl`]}
                        multiline = {true}
                        numberOfLines = {20}
                        onChangeText={(text) => setProject({...project, description: text})}
                        value={project.description}
                    />
                </View>

                <View style={tw`mt-5 self-center`}>
                    {project.tasks.map(task => {
                        return(
                        <View key={task.id} style={tw`h-16 w-80 mb-5 border-2 border-gray-300 rounded-sm`}>
                            <Text style={tw`text-black underline`}>
                                {task.title}
                            </Text>
                            <Text style={tw`text-black`}>
                                {task.description}
                            </Text>
                        </View>
                        )
                    })}
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('CreateTask', {newId: project.tasks.length + 1})} 
                    style={[tw`mt-12 h-16 w-80 justify-center self-center border-2 border-gray-300 rounded-md`]}>
                    <Text style={[tw`text-lg text-center`]}>+ Add Task</Text>
                </TouchableOpacity>

                <View style={[tw`flex-row justify-around bottom-0`]}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={[tw`mt-12 h-16 w-40 justify-center self-center border-2 bg-red-600 border-red-600 rounded-full`]}>
                        <Text style={[tw`text-lg text-center text-white`]}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleCreateProject()} style={[tw`mt-12 h-16 w-40 justify-center self-center border-2 bg-blue-600 border-blue-600 rounded-full`]}>
                        <Text style={[tw`text-lg text-center text-white`]}>Create</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
