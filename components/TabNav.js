import React, {Component} from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Ionicons} from '@expo/vector-icons'

import {blue, white, nile} from '../utils/colors'
import AddDeck from './AddDeck'
import DeckView from './DeckView'
import DeckList from './DecksList'


const Tab = createBottomTabNavigator()

export default class TabNav extends Component {
     render() {
         return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'AddDeck') {
                    iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline'
                    
                    } else if (route.name === 'Decks') {
                    iconName = focused ? 'ios-list-box' : 'ios-list'
                    
                    
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                })}
                tabBarOptions={{
                activeTintColor: blue,
                inactiveTintColor: nile,
                }}
            >
            <Tab.Screen name="Decks" component={DeckList} />
            <Tab.Screen name="AddDeck" component={AddDeck} />
        </Tab.Navigator>
         )
     }

}