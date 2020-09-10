import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
// import { getInitialData } from './../utils/api'
import { connect } from 'react-redux'
import { getDecks } from '../utils/api'
import { receiveDecks } from './../actions/index'
import { nile, white, beige, offWhite, lightBlue, red, darkGreen} from '../utils/colors'
import {getCardsLength} from '../utils/helpers'
import { lightOrange, lightGreen } from './../utils/colors';

class DeckList extends Component {

    componentDidMount() {

        getDecks()
        .then(decks => this.props.getAllDecks(decks))

    }

    render() {

        const { decks } = this.props
        // console.log(this.props)
        console.log(decks)
        return (

            <ScrollView>
                {Object.keys(decks).map((deck) => {

                    const {title, questions} = decks[deck]
                    return (
                        <View key={deck} style={styles.card}>
                            <Text style={styles.cardHeader}>{title}</Text>
                            <Text style={styles.cardText}>{questions ? getCardsLength(questions) : null }</Text>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('DeckView', {entryId: deck})}
                                // title ="view deck"
                                style={styles.cardBtn}
                            >
                            <Text style={styles.btnTxt}>View Deck</Text>
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'stretch',
        padding: 5,
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: lightGreen,
        margin: 8,
        height: 200,
        borderRadius: 10,
        shadowColor: offWhite,
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: darkGreen,
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowRadius: 5,
        shadowOpacity: 1,

    },
    cardText: {
        fontSize: 18,
        color: offWhite,
        marginBottom: 10,
    },
    cardHeader: {
        fontSize: 24,
        color: offWhite,
        fontWeight: "bold",
        fontStyle: 'italic',
        marginBottom: 20,
    },
    cardBtn: {
        width: 150,
        height: 50,
        borderColor: offWhite,
        padding: 10,
        backgroundColor: offWhite,
        borderRadius: 7,
        overflow: 'hidden', 
        marginTop: 10,
    },
    btnTxt: {
        color: darkGreen,
        fontSize: 24,
        textAlign: 'center',
        
    }
})

function mapStateToProps(decks) {
    return {
        decks
    }
    
}

function mapDispatchToProps(dispatch) {
    return {
        getAllDecks: (decks) => dispatch(receiveDecks(decks))
    }
}


export default connect(
    mapStateToProps, 
    mapDispatchToProps)(DeckList)