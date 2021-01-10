import { StatusBar } from 'expo-status-bar'
import React from 'react'
import Container from '_components/Container/Container'
import TopBar from '_components/TopBar/TopBar'

const ScreenTemplate = ({ children, title }) => {
  return (
    <Container>
      <StatusBar style="dark" />
      <TopBar title={title} />
      {children}
    </Container>
  )
}

export default ScreenTemplate
