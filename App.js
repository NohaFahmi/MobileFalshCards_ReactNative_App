// import { StatusBar } from 'expo-status-bar'
import React, {Component} from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native'
import { setLocalNotification } from './utils/helpers'
import reducer from './reducers'

import TabNav from './components/TabNav';
import StackNav from './components/StackNav';

import {blue} from './utils/colors'


const store = createStore(
    reducer, 
    applyMiddleware(thunk, logger)
  )

function AppStatusBar({backgroundColor, ...props}) {
  return (
     <View style={{backgroundColor, height: Constants.StatusBarHeight}}>
       <StatusBar 
         translucent
         backgroundColor={backgroundColor}
         {...props}
       />
     </View>
  )
}

export default class App extends Component {

  componentDidMount() {

    setLocalNotification()
    
  }
  render () {
    return (
      <Provider store={store}>
        
        <NavigationContainer>
          <AppStatusBar 
            backgroundColor={blue }
            barStyle='light-content'
          />
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