import React from 'react'
import styled from 'styled-components'
import ScreenTemplate from '_templates/ScreenTemplate/ScreenTemplate'
import { CategoryIcon } from '_assets/svgs/icons'

const Heading = styled.Text`
  font-family: ${({ theme }) => theme.fonts.prompt.semibold};
  font-size: ${({ theme }) => theme.fonts.sizes.h1};
`

const HomeScreen = ({ route }) => {
  return (
    <ScreenTemplate title={route.name}>
      <CategoryIcon color="blue" filled />
      <Heading>Home Screen</Heading>
    </ScreenTemplate>
  )
}

export default HomeScreen
