import React from 'react';
import { View, Text } from 'react-native';

export const getCardsLength = (questions) => {
    if(questions.length === 0) {
        return <Text>0 Cards</Text>

    } else if(questions.length > 1) {
        return <Text>{questions.length} Cards</Text>
    } else {
        return <Text>1 Card</Text>
    }
}