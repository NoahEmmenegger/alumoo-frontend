import { Slider } from '@miblanchard/react-native-slider';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableHighlight, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Star from '../components/common/Star';
import { getTask, toggleStarTask } from '../utils/api/taksApi';
import tw from '../utils/tailwind';

export default function TaskDetail({ navigation, route }) {
    if (route.params.id <= 0) {
        return (
            <SafeAreaView>
                <Text>Task not found</Text>
            </SafeAreaView>
        );
    }

    const userId = 293;

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

    const sliders = [
        'A Computer needs to be fixed',
        'A Sociable person is needed',
        'A creative person is needed',
        'There needs to be good planning',
        "There's going to be physical labor",
        'Someone with good writing skills is needed',
        'Someone needs to drive',
        'An entertaining person is needed',
        'Someone needs to be good with children',
        'Finance is involved',
    ];

    const sliderMax = 1;
    const sliderMin = 0;
    const sliderColor = '#FFD125';

    console.log(task);

    return (
        <SafeAreaView style={tw`p-5`}>
            <View style={tw`flex flex-row`}>
                <Text style={tw`text-2xl w-4/5`}>{task.title}</Text>
                <View style={tw`ml-auto`}>
                    <Star onPressStart={() => toggleStarTask(task.id, 293)} />
                </View>
            </View>
            <View style={tw`flex flex-row mb-10`}>
                <Text style={tw`text-secondary`}>{task.projectTitle} - </Text>
                <Text style={tw`text-secondary`}>{task.ownerName}</Text>
            </View>
            <ScrollView style={tw`h-full`}>
                <Text style={tw``}>{task.description}</Text>
                <View style={tw``}>
                    <Text style={tw`mt-5 text-xl pb-10 font-bold`}>Matching Skills:</Text>
                    {task.skills.split(',').map((skill, index) => (
                        <View key={index} style={[tw``]}>
                            <Text style={[tw`text-center mb-1 text-sm`]}>{sliders[index]}</Text>
                            <Slider
                                value={skill}
                                onValueChange={(value) => {}}
                                maximumValue={sliderMax}
                                minimumValue={sliderMin}
                                minimumTrackTintColor={sliderColor}
                                thumbTintColor={sliderColor}
                                disabled={true}
                            />
                        </View>
                    ))}
                </View>
            </ScrollView>

            {userId === task.ownerId ? (
                <View style={tw`flex flex-row justify-center mt-auto`}>
                    <TouchableHighlight
                        onPress={() => navigation.navigate('Application', { id: route.params.id })}
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
