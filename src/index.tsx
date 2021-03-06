import React from 'react';
import {
  StatusBar,
} from 'react-native'

// Navigation
import { NavigationContainer } from '@react-navigation/native'
import { Navigation } from './navigation'

// Context
import { ContextProvider } from './context'

const AppRoot = () => {
  return (
    <>
      <ContextProvider>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </ContextProvider>
    </>
  );
};



export default AppRoot;
