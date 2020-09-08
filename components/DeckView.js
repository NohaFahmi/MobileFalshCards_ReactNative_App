import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {getInitialData} from '../utils/api'
export default class DeckView extends Component {
    render() {

        const deck = this.props.route.params.entryId
        const decks = getInitialData()
        // console.log(deck)

        return (

            <View style={styles.container}>
                <Text>{decks[deck].title} </Text>
                <Text>{decks[deck].questions.length} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})