const initialState = {
  isDark: false,
  marker: '#FEC390',
  text: '#2D2D2D',
  textLow: '#7E7E7E',
  bg: '#F2F2F2',
  bgHighlighted: '#E9E9E9',
  highligh: '#D7D7D7'

}

const themeReducer = (state: typeof initialState, action: ActionTypeTheme) => {
  console.log('actionType', action.type)
  switch (action.type) {
    case 'DARK_MODE':
      return {
        ...state,
        isDark: true,
        marker: '#FFCB9E',
        text: '#F2F2F2',
        textLow: '#AAAAAA',
        bg: '#2D2D2D',
        bgHighlighted: '#424242',
        highligh: '#555555'
      }

    case 'LIGHT_MODE':
      return {
        ...state,
        isDark: false,
        marker: '#FEC390',
        text: '#2D2D2D',
        textLow: '#7E7E7E',
        bg: '#F2F2F2',
        bgHighlighted: '#E9E9E9',
        highligh: '#D7D7D7'
      }

    default:
      return state
  }
}

export {
  initialState,
  themeReducer,
}
