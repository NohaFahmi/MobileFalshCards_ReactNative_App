import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';


export default function ActionBtn({ onPress, styles, text, color}) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.btn, {backgroundColor: color}]}>
            <Text style={styles.submitBtnTxt}>{text}</Text>
        </TouchableOpacity>
    )
}
