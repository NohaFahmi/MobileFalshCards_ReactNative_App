import React, {Component} from 'react'
import { CommonActions } from '@react-navigation/native';
import { connect } from 'react-redux'
import {
    Text, 
    TouchableOpacity, 
} from 'react-native';


export default function QuizInfo ({ onPress, style, text}) {
    
        return (
            <TouchableOpacity onPress={onPress}>
                <Text style={style}>
                    {text}
                </Text>
            </TouchableOpacity>
        )
}


