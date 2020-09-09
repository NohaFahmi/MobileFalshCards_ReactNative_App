import React from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import * as Permissions from 'expo-permissions'
import * as Notifications from 'expo-notifications'

const NOTIFICATIONS_KEY = 'MobileFlashcards: notifications'

export const getCardsLength = (questions) => {
    if(questions.length === 0) {
        return <Text>0 Cards</Text>

    } else if(questions.length > 1) {
        return <Text>{questions.length} Cards</Text>
    } else {
        return <Text>1 Card</Text>
    }
}

function createNotification () {
    return {
        title: 'Study Study',
        body: 'Hey! Do not forget to study today',
        ios: {
            sound: true
        }
    }
}

export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATIONS_KEY)
    .then(JSON.parse)
    .then((data) => {
        if(data === null) {
            Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({status}) => {
                if(status === 'granted') {
                    Notifications.cancelAllScheduledNotificationAsync()

                    let tomorrow = new Date()
                    tomorrow.setDate(tomorrow.getDate() + 1)
                    tomorrow.setHours(20)
                    tomorrow.setMinutes(0)

                    Notifications.scheduleLocalNotificationAsync(
                        createNotification(), {
                            time: tomorrow,
                            repeat: 'day'
                        }
                    )
                    AsyncStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(true))
                        
                }
            })
        }
    })
}

export function clearNotification () {
    return AsyncStorage.removeItem(NOTIFICATIONS_KEY)
    .then(Notification.cancelAllScheduledNotificationsAsync)
}