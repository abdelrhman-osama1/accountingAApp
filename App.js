import React from "react"
import { Button,View, platform, AppRegistry, Text, SafeAreaView, StyleSheet, ImageBackground, Pressable, Dimensions,Alert } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Home'
import AccountCreateScreen from './AccountCreate' ;

const Stack = createNativeStackNavigator();
  
  const MyStack =() => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AccountCreate" component={AccountCreateScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}




export default MyStack