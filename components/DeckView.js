import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
// import {getInitialData} from '../utils/api'
import { connect } from 'react-redux'

import ActionBtn from './ActionBtns'
import { white, orange, yellow, blue, nile } from '../utils/colors'
import {getCardsLength} from '../utils/helpers'


class DeckView extends Component {
    render() {

        const deck = this.props.route.params.entryId
        // const decks = getInitialData()
        const {decks} = this.props
        // console.log(deck)
        const cards = decks[deck].questions

        return (

            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.title}>{decks[deck].title} </Text>
                    <Text style={styles.subTitle}>{cards ? getCardsLength(cards) : null} </Text>

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
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'stretch'
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
    },
    card: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: nile,
        margin: 8,
        
        height: 200,
        borderRadius: 10,
        shadowColor: '#C7C7A9',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowRadius: 4,
        shadowOpacity: 1,  
    },
    title: {
        
        fontSize: 40,
        color: white,
    },
    subTitle: {
        fontSize: 30,
        color: white,
        marginBottom: 160,
    }
})

function mapStateToProps(decks) {
    return {
        decks
    }
}

export default  connect(mapStateToProps)(DeckView)