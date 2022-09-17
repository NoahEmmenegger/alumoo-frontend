import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getApplicationsFromProjectId } from '../utils/api/taksApi';
import tw from '../utils/tailwind';

export default function Application() {
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        async function init() {
            setApplications(await getApplicationsFromProjectId());
        }
        init();
    });
    return (
        <SafeAreaView>
            <ScrollView style={[tw`h-full`]}>
                {applications.map((application) => {
                    return (
                        <View key={application.id} style={tw`p-5 bg-white rounded shadow-sm m-5`}>
                            <Text style={tw`justify-center m-auto`}>
                                {application.firstname} {application.lastname}
                            </Text>
                            <View style={[tw`flex-row justify-around bottom-0`]}>
                                <TouchableOpacity
                                    onPress={() => navigation.goBack()}
                                    style={[
                                        tw`mt-12 h-16 w-40 justify-center self-center border-2 bg-gray-400 border-gray-400 rounded-full`,
                                    ]}
                                >
                                    <Text style={[tw`text-lg text-center text-white`]}>Decline</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => handleOnTaskCreated(task)}
                                    style={[
                                        tw`mt-12 h-16 w-40 justify-center self-center border-2 bg-primary border-primary rounded-full`,
                                    ]}
                                >
                                    <Text style={[tw`text-lg text-center text-white`]}>Accept</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    );
                })}
            </ScrollView>
        </SafeAreaView>
    );
}
