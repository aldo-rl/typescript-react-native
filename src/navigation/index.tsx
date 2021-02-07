import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'


// Screens
import { Home } from '../screens/home'
import { Login } from '../screens/login'


const Stack = createStackNavigator()
export const Navigation = () => (
  <Stack.Navigator initialRouteName='login' screenOptions={{ headerShown: false }}>
    <Stack.Screen name='home' component={Home} />
    <Stack.Screen name='login' component={Login} />
  </Stack.Navigator>
)
