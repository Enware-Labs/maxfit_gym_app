import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './screens/Home/HomeScreen';
import HomeNavigator from './navigation/HomeNavigator';
import { NavigationContainer  } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
