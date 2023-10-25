import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Home'
import AccountCreateScreen from './AccountCreate' ;
import Stock from "./Stock";
import Debt from "./Debt";
import Bills from "./Bills";
const Stack = createNativeStackNavigator();

const MyStack =() => {
  return (
    <NavigationContainer>
<Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AccountCreate" component={AccountCreateScreen} />
      <Stack.Screen name="Stock" component={Stock} />
      <Stack.Screen name="Bills" component={Bills} />
      <Stack.Screen name="Debt" component={Debt} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default MyStack


