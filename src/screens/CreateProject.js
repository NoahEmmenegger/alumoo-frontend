import React from 'react';
import { SafeAreaView, Text, TextInput } from 'react-native';
import tw from 'tailwind-react-native-classnames'

export default function CreateProject() {
    const [text, onChangeText] = React.useState("Useless Text");
    return (
        <SafeAreaView>
            <Text>Create Project</Text>
            <TextInput
                onChangeText={onChangeText}
                value={text}
            />
        </SafeAreaView>
    );
}
