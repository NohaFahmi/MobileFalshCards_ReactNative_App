import React, {Component} from 'react'
import { CommonActions } from '@react-navigation/native';
import { connect } from 'react-redux'
import {
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity, 
    KeyboardAvoidingView
} from 'react-native';
import { white, orange, yellow, blue, nile } from '../utils/colors'
import ActionBtn from './ActionBtns'
import QuizInfo from './QuizInfo'



class Quiz extends Component {

    state = {

        questionNum: 0 ,
        showQuestion: false,
        correct: 0,
        incorrect: 0,
    }

    showAnswer = () => {
        !this.state.showQuestion ? this.setState({ showQuestion: true})
        : this.setState({showQuestion: false})
    }

    submitAns = (answer) => {

        const { questionNum } = this.state
        const deck = this.props.route.params.entryId
        const decks = this.props.decks
        const correct = decks[deck].questions[questionNum].correctAnswer.toLowerCase()

        //1. check if answer is correct
        if(answer === correct) {
            this.setState({ correct: this.state.correct + 1})
        } else {
            this.setState({ incorrect: this.state.incorrect + 1 })
        }
        //2. increment questionNum
        this.setState({ 
            questionNum: this.state.questionNum + 1, 
            showQuestion: false
        })

        //3. show animation
    }
    render() {

        const decks = this.props.decks
        const deck = this.props.route.params.entryId
        const num = this.state.questionNum + 1
        const questionNum = this.state.questionNum

        if(questionNum === decks[deck].questions.length) {
            return (
                <View style={styles.container}>
                    <View style={styles.card}>
                       <Text style={styles.mainTitle}> You Got {this.state.correct} out of {decks[deck].questions.length}! </Text> 

                        {
                            this.state.correct > this.state.incorrect ? 
                            <Text style={{fontSize: 90}}>👏👏👏</Text>
                            : 
                            <Text style={{fontSize: 90}}>😭😭😭</Text>
                        }

                        <ActionBtn styles={styles} text={'TryAgain'} color={nile}/>
                        <ActionBtn styles={styles} text={'Back'} color={blue}/>
                    </View>
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.questions}>{num} / {decks[deck].questions.length}</Text>
                    
                    {
                        !this.state.showQuestion ? 
                        <Text style={styles.mainTitle}>
                            {decks[deck].questions[questionNum].question}
                        </Text>
                        : 
                        <Text style={styles.mainTitle}>
                            {decks[deck].questions[questionNum].answer}
                        </Text>
                    
                    
                    }
                    
                    {
                        !this.state.showQuestion ? 
                        <QuizInfo style={styles.answer} text={'Show Answer'} onPress={this.showAnswer}></QuizInfo>
                        : 
                        <QuizInfo style={styles.answer} text={'Show Question'} onPress={this.showAnswer}></QuizInfo>
                        
                    }
                    <ActionBtn text={'Correct'} styles={styles} onPress={() => this.submitAns('true')} />
                    <ActionBtn text={'Incorrect'} styles={styles} onPress={() => this.submitAns('false')} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        backgroundColor: nile,
        alignSelf: 'stretch',
        borderRadius: 10,
        shadowColor: 'rgba(0,0,0,0,34)',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 1,
        shadowRadius: 4
    },

    btn: {
        padding: 10,
        borderRadius: 7,
        height: 45,
        margin: 5,
        width: 100,
    },
    submitBtnTxt: {
        color: white,
        fontSize: 26,
        textAlign: 'center'
    },
    questions: {
        top: 0,
        alignSelf: 'flex-start',
        left: 0,
        color: white,
        fontSize: 20,
        margin: 5,
        position: 'absolute',
    },
    answer: {
        color: white,
        fontSize: 20,
        margin: 20
    },
    mainTitle: {
        fontSize: 40,
        color: white,
        marginTop: 40,
        textAlign: 'center'
    },
    
})

function mapStateToProps(decks) {
    return {
        decks,
    }
}
export default connect(mapStateToProps)(Quiz)