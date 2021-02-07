import React, {
  createContext,
  useReducer,
  useEffect,
} from 'react'


// ActionsTypes
import {
  initialState,
  themeReducer
} from './reducers/theme'

// AsyncStorage
import {
  saveTheme,
  getTheme
} from '../asyncStorage'


interface StateContext {
  theme: {
    isDark: boolean,
    marker: string,
    text: string,
    textLow: string,
    bg: string,
    bgHighlighted: string,
    highligh: string
  },
  dispatchTheme: React.Dispatch<ActionTypeTheme>
}

const initialTheme: StateContext = {
  theme: initialState,
  dispatchTheme: () => { },
}





const context = createContext<StateContext>(initialTheme)
const ContextProvider = ({ children }: any) => {

  useEffect(() => {

    getTheme()
      .then(res => {
        if (res === undefined) saveTheme(false)
        dispatchTheme({ type: res ? 'DARK_MODE' : 'LIGHT_MODE' })
      })
      .catch(err => {
      })
  }, [])


  const [theme, dispatchTheme] = useReducer(themeReducer, initialState)
  return (
    <context.Provider value={{
      theme,
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
