import React, { useContext, useState } from 'react'
import {
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from 'react-native'

import { useNavigation } from '@react-navigation/native'

// Context
import { context } from '../../context'

// Wrapper
import { WrapperView } from '../../containers/wrapperView'


// Styles
import styles from './style'


const Login = () => {

  const navigation = useNavigation()
  const { theme } = useContext(context)
  const [username, setUsername] = useState(String)
  const [pass, setPass] = useState(String)

  return (

    <WrapperView
      style={[styles.login, {
        backgroundColor: theme.bg
      }]}
      spacingsattusBar
    >


      <Text style={[styles.title, {
        color: theme.text
      }]}>SIGN IN</Text>

      <TextInput
        style={[styles.input, {
          backgroundColor: theme.bgHighlighted,
          color: theme.text
        }]}
        onChangeText={text => setUsername(text)}
        value={username}
      />


      <TextInput
        style={[styles.input, {
          backgroundColor: theme.bgHighlighted,
          color: theme.text
        }]}
        onChangeText={text => setPass(text)}
        value={pass}
        secureTextEntry
      />

      <TouchableOpacity
        onPress={() => navigation.reset({
          index: 0,
          routes: [
            { name: 'home' }
          ],
        })}
        style={[styles.touchable, {
          backgroundColor: theme.marker,
        }]}
      >
        <Text style={[styles.touchableText, {
          color: theme.isDark ? theme.bg : theme.text,
        }]}>Login</Text>
      </TouchableOpacity>
    </WrapperView>

  )
}

export {
  Login
}
