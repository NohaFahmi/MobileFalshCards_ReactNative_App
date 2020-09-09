import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
// import {getInitialData} from '../utils/api'
import { connect } from 'react-redux'

import ActionBtn from './ActionBtns'
import { white, orange, yellow, blue, nile } from '../utils/colors'

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

                <ActionBtn 
                    styles={styles} 
                    text={'Add Card'}  
                    onPress={() => this.props.navigation.navigate('AddCard', {entryId: deck})}
                    color={orange}
                />
                <ActionBtn 
                    styles={styles} 
                    text={'Start Quiz'}  
                    onPress={() => this.props.navigation.navigate('Quiz', {entryId: deck})}
                    color={blue}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        padding: 10,
        borderRadius: 7,
        height: 45,
        width: 170,
        margin: 10,
    },
    submitBtnTxt: {
        color: white,
        fontSize: 22,
        textAlign: 'center'
    }
})

function mapStateToProps(decks) {
    return {
        decks
    }
}

export default  connect(mapStateToProps)(DeckView)