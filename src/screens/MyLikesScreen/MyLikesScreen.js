import React, { useLayoutEffect } from 'react'
import styled from 'styled-components'
import ScreenTemplate from '_templates/ScreenTemplate/ScreenTemplate'
import { SettingsIcon } from '_assets/svgs/icons'
import PropTypes from 'prop-types'

const Heading = styled.Text`
  font-family: ${({ theme }) => theme.fonts.prompt.semibold};
  font-size: ${({ theme }) => theme.fonts.sizes.h1};
`

const MyLikesScreen = ({ route, navigation }) => {
  return (
    <ScreenTemplate paddingTop="180px">
      <SettingsIcon color="blue" filled />
      <Heading>My Likes Screen</Heading>
    </ScreenTemplate>
  )
}

MyLikesScreen.propTypes = {
  route: PropTypes.object,
}

export default MyLikesScreen
