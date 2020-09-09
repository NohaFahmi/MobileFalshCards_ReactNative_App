import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
// import {getInitialData} from '../utils/api'
import { connect } from 'react-redux'


class DeckView extends Component {
    render() {

        const deck = this.props.route.params.entryId
        // const decks = getInitialData()
        const {decks} = this.props
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

function mapStateToProps(decks) {
    return {
        decks
    }
}

export default  connect(mapStateToProps)(DeckView)