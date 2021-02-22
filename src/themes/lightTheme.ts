import { DefaultTheme } from 'styled-components'
import sharedTheme from './sharedTheme'

const lightTheme: DefaultTheme = {
  ...sharedTheme,
  mode: 'light',
  colors: {
    brand: '#FFD748',
    info: '#0499EB',
    warning: '#DF3D3D',
    success: '#12B74A',
    pureBg: '#FFFFFF',
    background: '#F2F2F2',
    almostBg: '#E9E9E9',
    lightGray: '#D3D3D3',
    gray: '#898989',
    text: '#323232',
    transparentBrand: 'rgba(255, 215, 72, 0.1)',
    transparentInfo: 'rgba(4, 153, 235, 0.1)',
    transparentBg: 'rgba(240, 240, 240, 0.5)',
    transparentPureBg: 'rgba(255, 255, 255, 0.6)',
    transparentSuccess: 'rgba(18, 183, 74, 0.1)',
    transparentWarning: 'rgba(223, 61, 61, 0.1)',
  },
}

export default lightTheme
