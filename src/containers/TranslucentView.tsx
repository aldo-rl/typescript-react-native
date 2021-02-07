import React, { useContext } from 'react'
import {
  View,
  StatusBar,
  Platform
} from 'react-native'

import { context } from '../context'

type ReactNode = JSX.Element[] | React.ReactChild | React.ReactFragment

interface TranslucentViewProps {
  children: ReactNode,
  style?: Array<object> | object,
  spacingsattusBar?: boolean

}


const ios = Platform.OS === 'ios'

const TranslucentView = ({ children, style, spacingsattusBar }: TranslucentViewProps) => {
  const { theme } = useContext(context)
  return (
    <>
      <StatusBar
        translucent={ios ? false : true}
        barStyle={theme.isDark ? 'light-content' : 'dark-content'}
        backgroundColor={'transparent'}
      />

      <View style={style}>
        {
          spacingsattusBar &&
          <View style={{
            height: StatusBar.currentHeight,
          }} />
        }
        {children}
      </View>
    </>
  )
}

export {
  TranslucentView
}
