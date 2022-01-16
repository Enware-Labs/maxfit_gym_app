import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home/HomeScreen';


import { HomeScreenOptions } from '../screens/Home/HomeScreen';


const Stack = createStackNavigator();

export default function HomeNavigator() {
    return (
        <Stack.Navigator>
        <Stack.Screen
         name="Home"
         component={HomeScreen}
         options={HomeScreenOptions} 
         />
      </Stack.Navigator>
    )
}




const styles = StyleSheet.create({})
