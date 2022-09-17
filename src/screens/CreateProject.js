import React from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, ScrollView, View } from 'react-native';
import tw from 'tailwind-react-native-classnames'

export default function CreateProject( { navigation } ) {
    const [taskTitle, onChangeTitle] = React.useState();
    const [description, onChangeDesc] = React.useState();

    return (
        <SafeAreaView>
            <ScrollView keyboardShouldPersistTaps='handled'>
                <View style={[tw`mt-3`]}>
                    <Text style={[tw`ml-12`]}>
                        Project Title
                    </Text>
                    <TextInput
                        style={[tw`h-10 w-80 mt-1.5 pl-2 pr-2 self-center border-2 border-gray-300 rounded-3xl`]}
                        onChangeText={onChangeTitle}
                        value={taskTitle}
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
                        onChangeText={onChangeDesc}
                        value={description}
                    />
                </View>
            </ScrollView>


            <TouchableOpacity onPress={() => navigation.navigate('CreateTask')} 
                style={[tw`mt-12 h-16 w-80 justify-center self-center border-2 border-gray-300 rounded-md`]}>
                <Text style={[tw`text-lg text-center`]}>+ Add Task</Text>
            </TouchableOpacity>

            <View style={[tw`flex-row justify-around bottom-0`]}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={[tw`mt-12 h-16 w-40 justify-center self-center border-2 bg-red-600 border-red-600 rounded-full`]}>
                    <Text style={[tw`text-lg text-center text-white`]}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[tw`mt-12 h-16 w-40 justify-center self-center border-2 bg-blue-600 border-blue-600 rounded-full`]}>
                    <Text style={[tw`text-lg text-center text-white`]}>Create</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
