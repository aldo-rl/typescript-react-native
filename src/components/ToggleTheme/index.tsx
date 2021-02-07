import React, { useContext } from 'react'

import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'

// context
import { context } from '../../context'

// AsyncStorage
import {
  saveTheme,
} from '../../storage'


const ToggleTheme = () => {
  const { theme, dispatchTheme } = useContext(context)


  const handlerTheme = () => {
    saveTheme(!theme.isDark).then(() => {

      dispatchTheme({
        type: theme.isDark ? 'LIGHT_MODE' : 'DARK_MODE'
      })
    })
  }
  return (
    <View>
      <Text>current theme - {theme.bg}</Text>
      <TouchableOpacity
        onPress={handlerTheme}>
        <Text>ToggleTheme</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ToggleTheme
