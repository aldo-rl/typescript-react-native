const initialstate = {
  isDark: false,
  bg: '#26383C',
  bgHighlighted: '#13282C',
  text: '#DACCB7',
  marker: '#D05238',
}

const themeReducer = (state: typeof initialstate, action: ActionTypeTheme) => {
  switch (action.type) {
    case 'DARK_MODE':
      return {
        ...state,
        isDark: true,
        bg: '#26383C',
        bgHighlighted: '#13282C',
        text: '#DACCB7',
        marker: '#D05238',
      }

    case 'LIGHT_MODE':
      return {
        ...state,
        isDark: false,
        bg: '#FAF8F4',
        bgHighlighted: '#F1F0ED',
        text: '#26383C',
        marker: '#D05238',
      }

    default:
      return state
  }
}

export {
  initialstate,
  themeReducer,
}
