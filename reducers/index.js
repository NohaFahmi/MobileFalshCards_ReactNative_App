import {
    RECEIVE_DECKS,
    ADD_DECK,
    ADD_CARD,
    // REMOVE_DECK,
  } from '../actions/index'
  
  
  export default function deck (state = {}, action) {

    switch (action.type) {

      case ADD_DECK :
        const newDeck = {
          [action.deck] : {
            title: action.deck,
            questions: [],
          }
        }
        return {
          ...state,
          ...newDeck,
        }

      case RECEIVE_DECKS :
        return {
          ...state,
          ...action.decks
        }

      case ADD_CARD :
        const {question, answer, deck, correctAnswer} = action.card
        return {
          ...state,
          [deck]: {
            ...state[deck],
            questions: [...state[deck].questions, {question, answer, correctAnswer}]
          }
        }

      default :
        return state
    }
    
  }

  // REMOVE_DECK,