import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getMyprojects } from '../utils/api/taksApi';
import tw from '../utils/tailwind';

export default function Profile({ navigation }) {
    const [user, setUser] = React.useState({
        userId: 1,
        firstName: 'Kenny',
        lastName: 'Betschart',
        email: 'kennybetschart03@gmail.com',
    });
    const [projects, setProjects] = React.useState([]);

    async function updateProjects() {
        setProjects(await getMyprojects());
    }

    useEffect(() => {
        updateProjects();
    }, []);

    return (
        <SafeAreaView>
            <View style={tw`mt-16 self-center`}>
                <Text style={tw`text-center font-bold text-xl`}>
                    {user.firstName} {user.lastName}
                </Text>
                <Text style={tw`text-center`}>{user.email}</Text>
            </View>

            <View style={tw`mt-16 self-center`}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('CreateProject')}
                    style={[tw`h-16 w-80 justify-center self-center border-2 bg-primary border-primary rounded-md`]}
                >
                    <Text style={[tw`text-lg text-center text-white`]}>Create Project</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SetupSkills')}
                    style={[
                        tw`mt-6 h-16 w-80 justify-center self-center border-2 bg-primary border-primary rounded-md`,
                    ]}
                >
                    <Text style={[tw`text-lg text-center text-white`]}>Setup Skills</Text>
                </TouchableOpacity>
            </View>

            <View style={tw`mt-16 self-center`}>
                {projects.map((project) => {
                    return (
                        <TouchableOpacity
                            key={project.projectId}
                            onPress={() => navigation.navigate('ProjectOverview', { project: project })}
                            style={[tw`mt-6 h-16 w-80 justify-center self-center border-2 border-gray-300 rounded-md`]}
                        >
                            <Text style={[tw`text-lg text-center text-black`]}>{project.title}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </SafeAreaView>
    );
}
