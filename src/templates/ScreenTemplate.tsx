import { StatusBar } from 'expo-status-bar'
import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components/native'
import {
  ContentContainer,
  ScrollContainer,
  ViewContainer,
} from '_components/Containers'

interface Props {
  children: React.ReactNode
  paddingTop?: number
  container?: string
}

const ScreenTemplate: React.FC<Props> = ({
  children,
  paddingTop,
  container,
}) => {
  const theme = useContext(ThemeContext)

  const renderContainer = () => {
    if (container === 'scroll') {
      return (
        <ScrollContainer paddingTop={paddingTop}>{children}</ScrollContainer>
      )
    }
    if (container === 'static') {
      return (
        <ContentContainer paddingTop={paddingTop}>{children}</ContentContainer>
      )
    }
    return children
  }

  return (
    <ViewContainer>
      <StatusBar
        style={theme.mode === 'light' ? 'dark' : 'light'}
        translucent
      />
      {renderContainer()}
    </ViewContainer>
  )
}

export default ScreenTemplate
