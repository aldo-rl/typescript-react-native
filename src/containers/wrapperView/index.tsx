import React, { useContext } from 'react'
import {
  View,
  StatusBar,
  Platform
} from 'react-native'

import { context } from '../../context'

type ReactNode = JSX.Element[] | React.ReactChild | React.ReactFragment

interface WrapperViewProps {
  children: ReactNode,
  style?: Array<object> | object,
  spacingsattusBar?: boolean

}


const ios = Platform.OS === 'ios'

const WrapperView = ({ children, style, spacingsattusBar }: WrapperViewProps) => {
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
  WrapperView
}
