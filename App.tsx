/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';

import React from 'react';
import {
  StatusBar,
} from 'react-native'

// Navigation
import { NavigationContainer } from '@react-navigation/native'
import { Navigation } from './src/navigation'

// Context
import { ContextProvider } from './src/context'

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#fafafa'} />
      <ContextProvider>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </ContextProvider>
    </>
  );
};



export default App;
