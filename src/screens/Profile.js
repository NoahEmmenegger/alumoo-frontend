import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from '../utils/tailwind';

export default function Profile({ navigation }) {
    const [user, setUser] = React.useState({
        userId: 1,
        firstName: 'Kenny',
        lastName: 'Betschart',
        email: 'kennybetschart03@gmail.com'
    });
    return (
        <SafeAreaView>
            <View style={tw`mt-16 self-center`}>
                <Text style={tw`text-center font-bold text-xl`}>{user.firstName} {user.lastName}</Text>
                <Text style={tw`text-center`}>{user.email}</Text>
            </View>

            <View style={tw`mt-16 self-center`}>
                <TouchableOpacity onPress={() => navigation.navigate('CreateProject')} style={[tw`mt-12 h-16 w-80 justify-center self-center border-2 border-gray-300 rounded-md`]}>
                        <Text style={[tw`text-lg text-center text-black`]}>Create Project</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('SetupSkills')} style={[tw`mt-12 h-16 w-80 justify-center self-center border-2 border-gray-300 rounded-md`]}>
                        <Text style={[tw`text-lg text-center text-black`]}>Setup Skills</Text>
                </TouchableOpacity>
            </View>
            
        </SafeAreaView>
    );
}
