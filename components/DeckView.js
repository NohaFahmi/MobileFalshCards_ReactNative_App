import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
// import {getInitialData} from '../utils/api'
import { connect } from 'react-redux'

import ActionBtn from './ActionBtns'
import { white, orange, yellow, blue, nile, beige, light, dark, lightGreen, darkGreen, offWhite, red } from '../utils/colors'
import {getCardsLength} from '../utils/helpers'
import { lightBlue, lightOrange } from './../utils/colors';


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
                        color={red}
                    />
                    <ActionBtn 
                        styles={styles} 
                        text={'Start Quiz'}  
                        onPress={() => this.props.navigation.navigate('Quiz', {entryId: deck})}
                        color={darkGreen}
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
        alignSelf: 'stretch',
        backgroundColor: offWhite
    },
    btn: {
        padding: 10,
        borderRadius: 7,
        height: 50,
        width: 170,
        margin: 10,
    },
    submitBtnTxt: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
        fontStyle: 'italic'
    },
    card: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: light,
        margin: 8,
        height: 200,
        borderRadius: 10,
        shadowColor: offWhite,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowRadius: 4,
        shadowOpacity: 1,  
    },
    title: {
        
        fontSize: 40,
        color: red,
        fontStyle: "italic",
        fontWeight: 'bold',
        marginBottom: 15,
    },
    subTitle: {
        fontSize: 22,
        textAlign: 'center',
        color: dark,
        marginBottom: 160,
    }
})

function mapStateToProps(decks) {
    return {
        decks
    }
}

export default  connect(mapStateToProps)(DeckView)