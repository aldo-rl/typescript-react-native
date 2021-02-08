import React, { useContext } from 'react'
import {
  View
} from 'react-native'

// context
import { context } from '../../context'

// Components
import ToggleTheme from '../../components/ToggleTheme'

// Wrapper
import { WrapperView } from '../../containers/wrapperView'


const Home = () => {

  const { theme } = useContext(context)

  return (

    <WrapperView
      style={{ flex: 1, backgroundColor: theme.bg }}
      spacingsattusBar
    >
      <View style={{ padding: 20, backgroundColor: theme.bg }}>

        <ToggleTheme />
      </View>
    </WrapperView>
  )
}

export { Home }
