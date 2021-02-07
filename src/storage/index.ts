import AsyncStorage from '@react-native-async-storage/async-storage'

const saveTheme = async (value: boolean) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('theme', jsonValue)
  } catch (e) {
    // saving error
  }
}


const getTheme = async () => {
  try {
    const value = await AsyncStorage.getItem('theme')
    if (value !== null) {
      // value previously stored
      return value === "true"
    }
  } catch (e) {
    // error reading value
  }
}


export {
  saveTheme,
  getTheme
}
