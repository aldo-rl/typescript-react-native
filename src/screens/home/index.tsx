import React, { useContext, useEffect } from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

// context
import { context } from '../../context'

// Components
import ToggleTheme from '../../components/ToggleTheme'


const Home = () => {

  const { theme } = useContext(context)

  return (
    <View style={{ flex: 1, backgroundColor: theme.bg }}>
      <View style={{ padding: 20, backgroundColor: theme.bg, elevation: 10, }}>

        <ToggleTheme />
      </View>


    </View>
  )
}

export { Home }
