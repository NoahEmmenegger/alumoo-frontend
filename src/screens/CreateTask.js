import React from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, ScrollView, View  } from 'react-native';

import tw from 'tailwind-react-native-classnames'

export default function CreateTask({ navigation }) {
    const [projecTitle, onChangeTitle] = React.useState();
    const [description, onChangeDesc] = React.useState();
    const [location, onChangelocation] = React.useState();
    const [hours, onChangehours] = React.useState();

    return (
        <SafeAreaView style={[tw``]}>
            <ScrollView keyboardShouldPersistTaps='handled'>
                <View style={[tw`mt-3`]}>
                    <Text style={[tw`ml-12`]}>
                        Task Title
                    </Text>
                    <TextInput
                        style={[tw`h-10 w-80 mt-1.5 pl-2 pr-2 self-center border-2 border-gray-300 rounded-3xl`]}
                        onChangeText={onChangeTitle}
                        value={projecTitle}
                    />
                </View>

                <View style={[tw`mt-3`]}>
                    <Text style={[tw`ml-12`]}>
                        Location
                    </Text>
                    <TextInput
                        style={[tw`h-10 w-80 mt-1.5 pl-2 pr-2 self-center border-2 border-gray-300 rounded-3xl`]}
                        onChangeText={onChangelocation}
                        value={location}
                    />
                </View>

                <View style={[tw`mt-3`]}>
                    <Text style={[tw`ml-12`]}>
                        Hours
                    </Text>
                    <TextInput
                        style={[tw`h-10 w-80 mt-1.5 pl-2 pr-2 self-center border-2 border-gray-300 rounded-3xl`]}
                        onChangeText={onChangehours}
                        value={hours}
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

                <View style={[tw`flex-row justify-around bottom-0`]}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={[tw`mt-12 h-16 w-40 justify-center self-center border-2 bg-red-600 border-red-600 rounded-full`]}>
                        <Text style={[tw`text-lg text-center text-white`]}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[tw`mt-12 h-16 w-40 justify-center self-center border-2 bg-blue-600 border-blue-600 rounded-full`]}>
                        <Text style={[tw`text-lg text-center text-white`]}>Create</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
