import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
 
import AddDeck from './AddDeck'
import DeckView from './DeckView'
import DeckList from './DecksList'
import TabNav from './TabNav';



const Stack = createStackNavigator()


export default function StackNav() {
    return (

  
          <Stack.Navigator>
            <Stack.Screen 
              name='Home'
              component={TabNav}
              options={{title: 'Decks'}}
            />
  
            <Stack.Screen 
              name='DeckView'
              component={DeckView}
              options={{title: 'DeckView'}}
            />
          </Stack.Navigator>
      )
}

  

