import React, {
  createContext,
  useReducer
} from 'react'


import {
  initialstate,
  themeReducer
} from './reducers/theme'


interface StateContext {
  stateTheme: {
    isDark: boolean,
    bg: string,
    bgHighlighted: string,
    text: string,
    marker: string
  },
  dispatchTheme: React.Dispatch<ActionTypeTheme>
}

const initialStateTheme: StateContext = {
  stateTheme: initialstate,
  dispatchTheme: () => { },
}

const context = createContext<StateContext>(initialStateTheme)
const ContextProvider = ({ children }: any) => {

  const [stateTheme, dispatchTheme] = useReducer(themeReducer, initialstate)
  return (
    <context.Provider value={{
      stateTheme,
      dispatchTheme
    }}>
      {children}
    </context.Provider>
  )
}

export {
  context,
  ContextProvider
}
