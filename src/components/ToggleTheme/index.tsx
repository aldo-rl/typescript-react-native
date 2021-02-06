import React, { useContext } from 'react'

import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'

// context
import { context } from '../../context'

const ToggleTheme = () => {
  const { stateTheme, dispatchTheme } = useContext(context)

  // console.log('stateTheme -> ', stateTheme)
  return (
    <View>
      <Text>current theme - {stateTheme.bg}</Text>
      <TouchableOpacity
        onPress={() => dispatchTheme({ type: stateTheme.isDark ? 'LIGHT_MODE' : 'DARK_MODE' })}>
        <Text>ToggleTheme</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ToggleTheme
