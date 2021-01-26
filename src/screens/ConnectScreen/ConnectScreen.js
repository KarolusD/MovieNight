import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { TwoUsers } from '_assets/svgs/icons'
import ScreenTemplate from '_templates/ScreenTemplate/ScreenTemplate'

const Heading = styled.Text`
  font-family: ${({ theme }) => theme.fonts.prompt.semibold};
  font-size: ${({ theme }) => theme.fonts.sizes.h1};
`

const ConnectScreen = ({ route }) => {
  return (
    <ScreenTemplate>
      <TwoUsers color="blue" filled />
      <Heading>Connect Screen</Heading>
    </ScreenTemplate>
  )
}

ConnectScreen.propTypes = {
  route: PropTypes.object,
}

export default ConnectScreen
