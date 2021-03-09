import { StatusBar } from 'expo-status-bar'
import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components/native'
import {
  ContentContainer,
  ScrollContainer,
  ViewContainer,
} from '_components/Containers'
import { Platform } from 'react-native'

interface Props {
  background?: string
  children: React.ReactNode
  top?: number
  container?: string
}

const ScreenTemplate: React.FC<Props> = ({
  background,
  children,
  container,
  top,
}) => {
  const theme = useContext(ThemeContext)

  const contentContainerStyle = {
    top: top ?? (Platform.OS === 'ios' ? 116 : 100),
    paddingBottom: 120,
  }

  const renderContainer = () => {
    if (container === 'scroll') {
      return (
        <ScrollContainer contentContainerStyle={contentContainerStyle}>
          {children}
        </ScrollContainer>
      )
    }
    if (container === 'static') {
      return <ContentContainer top={top}>{children}</ContentContainer>
    }
    return children
  }

  return (
    <ViewContainer background={background} edges={['right', 'bottom', 'left']}>
      {renderContainer()}
      <StatusBar
        style={theme.mode === 'light' ? 'dark' : 'light'}
        translucent
      />
    </ViewContainer>
  )
}

export default ScreenTemplate
