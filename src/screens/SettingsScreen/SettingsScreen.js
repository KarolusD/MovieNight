import React from 'react'
import styled from 'styled-components'
import ScreenTemplate from '_templates/ScreenTemplate/ScreenTemplate'
import { SettingsIcon } from '_assets/svgs/icons'

const Heading = styled.Text`
  font-family: ${({ theme }) => theme.fonts.prompt.semibold};
  font-size: ${({ theme }) => theme.fonts.sizes.h1};
`

const SettingsScreen = ({ route }) => {
  return (
    <ScreenTemplate title={route.name}>
      <SettingsIcon color="blue" filled />
      <Heading>Settings Screen</Heading>
    </ScreenTemplate>
  )
}

export default SettingsScreen
