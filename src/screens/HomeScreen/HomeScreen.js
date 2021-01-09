import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components'

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const Heading = styled.Text`
  font-family: ${({ theme }) => theme.fonts.prompt.semibold};
  font-size: ${({ theme }) => theme.fonts.sizes.h1};
`

const HomeScreen = () => {
  return (
    <Container>
      <Heading>Home Screen</Heading>
    </Container>
  )
}

export default HomeScreen
