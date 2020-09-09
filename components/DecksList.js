import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
// import { getInitialData } from './../utils/api'
import { connect } from 'react-redux'
import { getDecks } from '../utils/api'
import { receiveDecks } from './../actions/index'
import { nile, white } from '../utils/colors'

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

            <View style={styles.container}>
                {Object.keys(decks).map((deck) => {

                    const {title, questions} = decks[deck]
                    return (
                        <View key={deck} style={styles.card}>
                            <Text style={styles.cardText}>{title}</Text>
                            <Text style={styles.cardText}>{questions.length}</Text>
                            <Button
                                onPress={() => this.props.navigation.navigate('DeckView', {entryId: deck})}
                                title ="view deck"
                                style={styles.cardBtn}
                            >

                            </Button>
                        </View>
                    )
                })}
            </View>
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
    cardText: {
        fontSize: 18,
        color: white,
    },
    cardBtn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 18,
        
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