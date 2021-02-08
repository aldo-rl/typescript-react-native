import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'


// Screens
import { Home } from '../screens/home'
import { Login } from '../screens/login'

type Routestype = {
  name: string,
  component: React.FC
}

const routes: Array<Routestype> = [
  {
    name: 'home',
    component: Home
  },
  {
    name: 'login',
    component: Login
  }
]

const Stack = createStackNavigator()
export const Navigation = () => (
  <Stack.Navigator initialRouteName='login' screenOptions={{ headerShown: false }}>
    {
      routes.map((route, i) =>
        <Stack.Screen key={`${route.name}-${i}`} name={route.name} component={route.component} />
      )
    }
  </Stack.Navigator>
)
