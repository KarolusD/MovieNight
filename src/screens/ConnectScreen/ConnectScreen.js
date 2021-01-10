import React from 'react'
import styled from 'styled-components'
import ScreenTemplate from '_templates/ScreenTemplate/ScreenTemplate'
import { AddUserIcon } from '_assets/svgs/icons'

const Heading = styled.Text`
  font-family: ${({ theme }) => theme.fonts.prompt.semibold};
  font-size: ${({ theme }) => theme.fonts.sizes.h1};
`

const ConnectScreen = ({ route }) => {
  return (
    <ScreenTemplate title={route.name}>
      <AddUserIcon color="blue" filled />
      <Heading>Connect Screen</Heading>
    </ScreenTemplate>
  )
}

export default ConnectScreen
