import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

export default function Star({ onPressStart }) {
    const [isFilled, setIsFilled] = useState(false);
    return (
        <TouchableOpacity
            onPress={() => {
                if (isFilled) {
                    setIsFilled(false);
                } else {
                    setIsFilled(true);
                }
                onPressStart();
            }}
        >
            <FontAwesome name={isFilled ? 'star' : 'star-o'} size={30} color="#FFD125" />
        </TouchableOpacity>
    );
}
