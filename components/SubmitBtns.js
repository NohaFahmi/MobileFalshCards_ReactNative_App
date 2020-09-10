import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { white, offWhite } from '../utils/colors';

export default function SubmitBtn({onPress, style}) {
    return (
        <TouchableOpacity 
            style={style} 
            onPress={onPress}
        >
            <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        color: offWhite,
        fontSize: 20,
        fontWeight: 'bold'
    }
})