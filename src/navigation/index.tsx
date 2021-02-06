import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'


// Screens
import { Home } from '@screens'


const Stack = createStackNavigator()
export const Navigation = () => (
  <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
    <Stack.Screen name='Home' component={Home} />
  </Stack.Navigator>
)
