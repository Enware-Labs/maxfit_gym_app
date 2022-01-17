import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home/HomeScreen';
import DayWorkoutScreen from '../screens/Home/DayWorkoutScreen';
import ProfileScreen from '../screens/Home/ProfileScreen'
import EditScreen from '../screens/Home/EditScreen';


import { HomeScreenOptions } from '../screens/Home/HomeScreen';
import { ProfileScreenOptions } from '../screens/Home/ProfileScreen';
import { EditProfileScreenOptions } from '../screens/Home/EditScreen';


const Stack = createStackNavigator();

export default function HomeNavigator() {
    return (
        <Stack.Navigator>
        <Stack.Screen
         name="Home"
         component={HomeScreen}
         options={HomeScreenOptions} 
         />
        <Stack.Screen
         name="DayWorkOut"
         component={DayWorkoutScreen}
        //  options={HomeScreenOptions} 
         />
        <Stack.Screen
         name="Profile"
         component={ProfileScreen}
         options={ProfileScreenOptions} 
         />
        <Stack.Screen
         name="Edit"
         component={EditScreen}
         options={EditProfileScreenOptions} 
         />
      </Stack.Navigator>
    )
}




const styles = StyleSheet.create({})
