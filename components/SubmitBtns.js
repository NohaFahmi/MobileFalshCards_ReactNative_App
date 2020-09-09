import React from 'react'
import { Text, TouchableOpacity } from 'react-native';

export default function SubmitBtn({onPress, style}) {
    return (
        <TouchableOpacity 
            style={style} 
            onPress={onPress}
        >
            <Text style={style}>Submit</Text>
        </TouchableOpacity>
    )
}
