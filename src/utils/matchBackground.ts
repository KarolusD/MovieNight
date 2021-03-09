import { DefaultTheme } from 'styled-components'

const matchBackground = (OS: string, theme: DefaultTheme): string => {
  if (OS === 'ios') {
    return theme.mode === 'light'
      ? theme.colors.transparentPureBg
      : theme.colors.transparentBg
  }
  return theme.mode === 'light' ? theme.colors.pureBg : theme.colors.background
}

export default matchBackground
