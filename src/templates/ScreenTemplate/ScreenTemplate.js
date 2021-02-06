import { StatusBar } from 'expo-status-bar'
import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { ScrollContainer, ViewContainer } from '_components/Containers'

const ScreenTemplate = ({ children, paddingTop }) => {
  const theme = useContext(ThemeContext)
  return (
    <ViewContainer edges={['right', 'bottom', 'left']}>
      <StatusBar
        style={theme.mode === 'light' ? 'dark' : 'light'}
        translucent
      />
      <ScrollContainer paddingTop={paddingTop}>{children}</ScrollContainer>
    </ViewContainer>
  )
}

export default ScreenTemplate
