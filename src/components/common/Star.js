import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity } from 'react-native';

export default function Star({ isFilled = false }) {
    return (
        <TouchableOpacity>
            <FontAwesome name={isFilled ? 'star' : 'star-o'} size={30} color="#FFD125" />
        </TouchableOpacity>
    );
}
