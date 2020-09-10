import React, {Component} from 'react'
import { CommonActions } from '@react-navigation/native'
import { connect } from 'react-redux'
import {
    StyleSheet, 
    Text, 
    View,
} from 'react-native';
import { white, orange, yellow, blue, nile, lightOrange, beige, red, light, lightGreen, darkGreen, offWhite, dark } from '../utils/colors'
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

        
    }



    startOver = () => {
        this.setState({
            questionNum: 0,
            showQuestion: false,
            correct: 0,
            incorrect: 0
        })
    }

    goBack = () => {
        this.props.navigation.dispatch(CommonActions.goBack())
    }
    render() {

        const decks = this.props.decks
        const deck = this.props.route.params.entryId
        const num = this.state.questionNum + 1
        const questionNum = this.state.questionNum

        

        if(questionNum === decks[deck].questions.length) {
            return (
                <View style={styles.container}  >
                    <View style={styles.card}>
                      <View>
                        <Text style={styles.mainTitle}> You Got {this.state.correct} out of {decks[deck].questions.length}! </Text>
                      </View>
                        

                        {
                            this.state.correct > this.state.incorrect ? 
                            <Text style={{fontSize: 90}}>👏👏👏</Text>
                            : 
                            <Text style={{fontSize: 90}}>😭😭😭</Text>
                        }
                        <View style={{marginTop: 40}}>
                            <ActionBtn 
                                styles={styles} 
                                text={'Start Over'} 
                                color={lightGreen}
                                onPress={this.startOver}

                            />
                            <ActionBtn 
                                styles={styles} 
                                text={'Back'} 
                                color={dark}
                                onPress={this.goBack}

                            />
                        </View>
                        
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
                        <Text style={styles.answers}>
                            {decks[deck].questions[questionNum].answer}
                        </Text>
                    
                    
                    }
                    
                    {
                        !this.state.showQuestion ? 
                        <QuizInfo style={styles.answer} text={'Show Answer'} onPress={this.showAnswer}></QuizInfo>
                        : 
                        <QuizInfo style={styles.answer} text={'Show Question'} onPress={this.showAnswer}></QuizInfo>
                        
                    }
                    <View>
                    <ActionBtn text={'Correct'} styles={styles} color={lightGreen} onPress={() => this.submitAns('true')} />
                    <ActionBtn text={'Incorrect'} color={lightOrange} styles={styles} onPress={() => this.submitAns('false')} />
                    </View>
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: lightGreen,
        
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        backgroundColor: white,
        alignSelf: 'stretch',
        borderRadius: 10,
        shadowColor: 'grey',
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
        height: 55,
        margin: 10,
        width: 150,
        
    },
    submitBtnTxt: {
        color: offWhite,
        fontSize: 26,
        textAlign: 'center'
    },
    questions: {
        top: 0,
        alignSelf: 'flex-start',
        left: 0,
        color: darkGreen,
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 5,
        position: 'absolute',
    },
    answer: {
        color: red,
        fontWeight: 'bold',
        fontSize: 24,
        margin: 20
    },
    mainTitle: {
        fontSize: 40,
        color: red,
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginTop: -120,
        textAlign: 'center'
    },
    answers: {
        fontSize: 26,
        padding: 10,
        textAlign: "center",
        color: red,
    }
})

function mapStateToProps(decks) {
    return {
        decks,
    }
}
export default connect(mapStateToProps)(Quiz)