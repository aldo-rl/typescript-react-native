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

// Wrapper
import { TranslucentView } from '../../containers/TranslucentView'


const Home = () => {

  const { theme } = useContext(context)

  return (

    <TranslucentView
      style={{ flex: 1, backgroundColor: theme.bg }}
      spacingsattusBar
    >
      <View style={{ padding: 20, backgroundColor: theme.bg, elevation: 10, }}>

        <ToggleTheme />
      </View>
    </TranslucentView>
  )
}

export { Home }
