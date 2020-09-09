import React, {Component} from 'react'
import { connect } from 'react-redux'
import { CommonActions } from '@react-navigation/native';
import {blue, nile, orange, yellow, white} from '../utils/colors'
import { addCardToDeck } from '../utils/api'
import { addCard } from '../actions/index'
import { 
    View, 
    StyleSheet, 
    TouchableOpacity, 
    TextInput, 
    KeyboardAvoidingView, 
    Text 
} from 'react-native';

import SubmitBtn from './SubmitBtns' 

class AddCard extends Component {
    
    state = {
        question: '',
        answer: '',
        correctAnswer: '',
    }

    submitCard = (deck) => {

        const { question, answer, correctAnswer } = this.state
        this.props.dispatch(addCard({ question, answer, correctAnswer, deck }))

        addCardToDeck(deck, {question, answer, correctAnswer})
        this.setState({ question: '', answer: '', correctAnswer: ''})
        this.props.navigation.dispatch(CommonActions.goBack())
    }
    
    render() {

        const deckName = this.props.route.params.entryId

        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>

                <View style={styles.container}>
                    <Text style={styles.title}>What is the question</Text>
                    <TextInput 
                        style={styles.input} 
                        onChangeText={(question) => this.setState({question})}
                        value={this.state.question}
                    ></TextInput>

                    <Text style={styles.title}>What is the answer?</Text>
                    <TextInput 
                        style={styles.input} 
                        onChangeText={(answer) => this.setState({answer})}
                        value={this.state.answer}
                    ></TextInput>

                    <Text style={styles.title}>Is that true or false?</Text>
                    <TextInput 
                        style={styles.input} 
                        onChangeText={(correctAnswer) => this.setState({correctAnswer})}
                        value={this.state.correctAnswer}
                    ></TextInput>

                    <SubmitBtn 
                        onPress={() => this.submitCard(deckName)}
                        style={styles.submitBtn}

                    />
                </View>

            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    submitBtnTxt: {
        color: white,
        fontSize: 22,
        textAlign: 'center'
    },
    title: {
        fontSize: 30,
        color: orange,
    },
    submitBtn: {
        borderWidth: 0.5,
        borderColor: orange,
        padding: 10,
        backgroundColor: orange,
        borderRadius: 7,
        overflow: 'hidden',
        color: white
    },
    input: {
        width: 250,
        height: 40,
        padding: 8,
        borderWidth: 1,
        borderColor: yellow,
        margin: 20,
        borderRadius: 7,
    }
})

export default connect()(AddCard)