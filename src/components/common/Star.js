import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { toggleStarTask } from '../../utils/api/taksApi';

export default function Star() {
    const [isFilled, setIsFilled] = useState(false);
    return (
        <TouchableOpacity
            onPress={() => {
                toggleStarTask();
                setIsFilled(!isFilled);
            }}
        >
            <FontAwesome name={isFilled ? 'star' : 'star-o'} size={30} color="#FFD125" />
        </TouchableOpacity>
    );
}
