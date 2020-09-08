import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { getInitialData } from './../utils/api'
import { connect } from 'react-redux'
import { getDecks } from '../utils/api'
import { receiveDecks } from './../actions/index'

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
                        <View key={deck}>
                            <Text>{title}</Text>
                            <Text>{questions.length}</Text>
                            <Button
                                onPress={() => this.props.navigation.navigate('DeckView', {entryId: deck})}
                                title ="view deck"
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
        alignItems: 'center'
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