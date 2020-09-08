// import { StatusBar } from 'expo-status-bar'
import React, {Component} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { NavigationContainer } from '@react-navigation/native'

import reducer from './reducers'

import TabNav from './components/TabNav';
import StackNav from './components/StackNav';


export default class App extends Component {
  render () {
    return (
      <Provider store={createStore(reducer)}>

        <NavigationContainer>
          <StackNav />
        </NavigationContainer>

      </Provider>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
