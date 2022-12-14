import React from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, ScrollView, View } from 'react-native';
import {Slider} from '@miblanchard/react-native-slider';

import tw from '../utils/tailwind';
import Emitter from '../utils/emitter';

export default function CreateTask({ route, navigation }) {
    const { newId } = route.params;
    const [task, setTask] = React.useState({
        id: newId,
        title: '',
        location: '',
        hoursPerWeek: '',
        noOfVolunteers: '',
        description: '',
        sliders: [ {value: 0.5, desc: "A Computer needs to be fixed"}, {value: 0.5, desc: "A Sociable person is needed"}, {value: 0.5, desc: "A creative person is needed"},
            {value: 0.5, desc: "There needs to be good planning"}, {value: 0.5, desc: "There's going to be physical labor"}, {value: 0.5, desc: "Someone with good writing skills is needed"},
            {value: 0.5, desc: "Someone needs to drive"}, {value: 0.5, desc: "An entertaining person is needed"}, {value: 0.5, desc: "Someone needs to be good with children"},
            {value: 0.5, desc: "Finance is involved"} ],
        skills: ''
    })

    const sliderMax = 1;
    const sliderMin = 0;
    const sliderColor = '#FFD125'

    const handleOnTaskCreated = (Task) => {
        Emitter.emit("TaskCreated", Task);
        navigation.goBack();
    }

    const convertToString = (sliders) => {
        let sliderString  = '';
        sliders.forEach(slider => {
            sliderString += slider.value + ', '
        });

        return sliderString;
    }


    return (
        <SafeAreaView style={[tw``]}>
            <ScrollView keyboardShouldPersistTaps='handled'>
                <View style={[tw`mt-3`]}>
                    <Text style={[tw`ml-12`]}>
                        Task Title
                    </Text>
                    <TextInput
                        style={[tw`h-10 w-80 mt-1.5 pl-2 pr-2 self-center border-2 border-gray-300 rounded-3xl`]}
                        onChangeText={(text) => setTask({...task, title: text})}
                        value={task.title}
                    />
                </View>

                <View style={[tw`mt-3`]}>
                    <Text style={[tw`ml-12`]}>
                        Location
                    </Text>
                    <TextInput
                        style={[tw`h-10 w-80 mt-1.5 pl-2 pr-2 self-center border-2 border-gray-300 rounded-3xl`]}
                        onChangeText={(text) => setTask({...task, location: text})}
                        value={task.location}
                    />
                </View>

                <View style={[tw`mt-3`]}>
                    <Text style={[tw`ml-12`]}>
                        Hours
                    </Text>
                    <TextInput
                        style={[tw`h-10 w-80 mt-1.5 pl-2 pr-2 self-center border-2 border-gray-300 rounded-3xl`]}
                        onChangeText={(text) => setTask({...task, hoursPerWeek: text})}
                        value={task.hoursPerWeek}
                    />
                </View>

                <View style={[tw`mt-3`]}>
                    <Text style={[tw`ml-12`]}>
                        Amount of Volunteers
                    </Text>
                    <TextInput
                        style={[tw`h-10 w-80 mt-1.5 pl-2 pr-2 self-center border-2 border-gray-300 rounded-3xl`]}
                        onChangeText={(text) => setTask({...task, noOfVolunteers: text})}
                        value={task.noOfVolunteers}
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
                        onChangeText={(text) => setTask({...task, description: text})}
                        value={task.description}
                    />
                </View>

                <View style={[tw`w-80 mt-12 self-center`]}>
                    <Text style={[tw`font-bold text-center mb-7 text-lg`]}>Skills</Text>

                    {task.sliders.map((slider, index) => {
                        return (
                            <View key={index} style={[tw``]}>
                                <Text style={[tw`text-center mb-1 text-sm`]}>{slider.desc}</Text>
                                <Slider 
                                    value={slider.value}
                                    onValueChange={(value) => {
                                        const newSliders = [...task.sliders]
                                        newSliders[index].value = value
                                        setTask({...task, sliders: newSliders})
                                        setTask({...task, skills: convertToString(task.sliders)})
                                    }}
                                    maximumValue={sliderMax}
                                    minimumValue={sliderMin}
                                    minimumTrackTintColor={sliderColor}
                                    thumbTintColor={sliderColor}   
                                />
                            </View>
                        )
                    })}
                </View>

                <View style={[tw`flex-row justify-around bottom-0`]}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={[tw`mt-12 h-16 w-40 justify-center self-center border-2 bg-gray-400 border-gray-400 rounded-full`]}>
                        <Text style={[tw`text-lg text-center text-white`]}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleOnTaskCreated(task)} style={[tw`mt-12 h-16 w-40 justify-center self-center border-2 bg-primary border-primary rounded-full`]}>
                        <Text style={[tw`text-lg text-center text-white`]}>Create</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
