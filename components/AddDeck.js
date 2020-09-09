import React, {Component} from 'react'
import { StyleSheet, View, Text, Button, TextInput } from 'react-native'
import {saveDeckTitle} from '../utils/api'
import {addDeck} from '../actions/index'
import { connect } from 'react-redux'
import {orange, yellow, white} from '../utils/colors'

class AddDeck extends Component {

    state = {

        text: ''
    }

    submitName= () => {
        const { text } = this.state
        saveDeckTitle(text)
        this.props.dispatch(addDeck(text))
        this.props.navigation.navigate('DeckView', {entryId: text})
        this.setState({text: ''})
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>What is the new deck's name?</Text>
                <TextInput 
                    onChangeText={(text) => this.setState({text: text})}
                    value={this.state.text}
                    style={styles.input}
                >

                </TextInput>
                <Button 
                    style={styles.submitBtn}
                    onPress={this.submitName}
                    title="Submit"
                    
                >

                </Button>
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
    input: {
        width: 250,
        height: 50,
        padding: 5,
        borderWidth: 1,
        borderColor: orange,
        margin: 50,
        borderRadius: 10,
    },
    title: {
        fontSize: 30,
        color: orange,
    },
    submitBtn: {
        borderWidth: 1,
        borderColor: orange,
        width: 80,
        padding: 10,
        borderRadius: 7,
        overflow: 'hidden',
        backgroundColor: yellow,
        color: white,
    }
})

export default connect()(AddDeck)