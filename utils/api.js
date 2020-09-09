import { AsyncStorage } from 'react-native'
import { decksData } from './_DATA'

const FLASHCARDS_STORAGE_KEY = 'MobileFlashcards: decks'

export const getInitialData = () => {
  //a func to return all of the decks along with their titles, questions, and answers.
  return  decksData
} 

// getDecks: return all of the decks along with their titles, questions, and answers.
export function getDecks() {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
  .then(results => {
    if(results === null) {
      AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(decksData))
      return decksData
    } else {
      return JSON.parse(results)
    }
  })
}

// getDeck: take in a single id argument and return the deck associated with that id.

export async function getDeck(id) {
  try {
    const results = await AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)

    return JSON.parse(results)[id]
  } catch (err) {
    console.log(err)
  }
}

// saveDeckTitle: take in a single title argument and add it to the decks.
export function saveDeckTitle(title) {
    return AsyncStorage.mergeItem(
      FLASHCARDS_STORAGE_KEY, 
      JSON.stringify({
      [title]: {
        title: title,
        questions: [],
      }
    }))
     
}

export async function removeDeck(key) {
  try {
    const results = await AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    const data = JSON.parse(results)
    data[key] = undefined
    delete data[key]
    AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(data))
  } catch(err) {
    console.log(err)
  }
}
// addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title

export function addCardToDeck(name, card) {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
  .then(results => JSON.parse(results))
  .then(results => {
    results[name].questions.push(card)
    AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(results))
    return results

  })
}

export async function reset() {
    try {
        await AsyncStorage.removeItem(FLASHCARDS_STORAGE_KEY)

    } catch (err) {
        console.log(err)
    }
}