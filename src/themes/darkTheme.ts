import sharedTheme from './sharedTheme'

const darkTheme = {
  ...sharedTheme,
  mode: 'dark',
  colors: {
    brand: '#FCDB67',
    info: '#55BAF2',
    warning: '#CE5858',
    success: '#5ACE81',
    pureBg: '#131313',
    background: '#000000',
    almostBg: '#212121',
    lightGray: '#505050',
    gray: '#9A9A9A',
    text: '#F2F2F2',
    transparentBrand: 'rgba(252, 219, 103, 0.1)',
    transparentInfo: 'rgba(85, 186, 242, 0.15)',
    transparentBg: 'rgba(0, 0, 0, 0.5)',
    transparentPureBg: 'rgba(0, 0, 0, 0.5)',
    transparentSuccess: 'rgba(71, 195, 113, 0.1)',
    transparentWarning: 'rgba(223, 61, 61, 0.1)',
  },
}

export default darkTheme
