import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, ScrollView, View } from 'react-native';
import {Slider} from '@miblanchard/react-native-slider';

import tw from '../utils/tailwind';
import { setupSkillsCall } from '../utils/api/taksApi';

export default function SetupSkills({ navigation }) {
    const [skill, setSkill] = React.useState({
        sliders:[ {value: 0.5, desc: "I could fix a computer"}, {value: 0.5, desc: "I'm good at socialising"}, {value: 0.5, desc: "I'm a creative person"},
            {value: 0.5, desc: "I can plan an event"}, {value: 0.5, desc: "I can do physical labor"}, {value: 0.5, desc: "I'm a good writer"},
            {value: 0.5, desc: "I can drive a car"}, {value: 0.5, desc: "I can entertain people"}, {value: 0.5, desc: "I'm good with kids"},
            {value: 0.5, desc: "I'm good with finances"} ]
    })

    const sliderMax = 1;
    const sliderMin = 0;
    const sliderColor = '#FFD125'

    const handleOnSkillsSetup = (Skills) => {
        setupSkillsCall({
            userId: 1,
            skills: convertToString(Skills)
        });
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

                <View style={[tw`w-80 mt-12 self-center`]}>
                    <Text style={[tw`font-bold text-center mb-7 text-lg`]}>Skills</Text>

                    {skill.sliders.map((slider, index) => {
                        return (
                            <View key={index} style={[tw``]}>
                                <Text style={[tw`text-center mb-1 text-sm`]}>{slider.desc}</Text>
                                <Slider 
                                    value={slider.value}
                                    onValueChange={(value) => {
                                        const newSliders = [...skill.sliders]
                                        newSliders[index].value = value
                                        setSkill({...skill, sliders: newSliders})
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
                    <TouchableOpacity onPress={() => handleOnSkillsSetup(skill.sliders)} style={[tw`mt-12 h-16 w-40 justify-center self-center border-2 bg-primary border-primary rounded-full`]}>
                        <Text style={[tw`text-lg text-center text-white`]}>Create</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
