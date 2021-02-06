import React from 'react'
import styled from 'styled-components'
import ScreenTemplate from '_templates/ScreenTemplate/ScreenTemplate'
import { SettingsIcon } from '_assets/svgs/icons'
import PropTypes from 'prop-types'

const Heading = styled.Text`
  font-family: ${({ theme }) => theme.fonts.prompt.semibold};
  font-size: ${({ theme }) => theme.fonts.sizes.h1};
`

const RecommendedScreen = ({ route }) => {
  return (
    <ScreenTemplate paddingTop="180px">
      <SettingsIcon color="blue" filled />
      <Heading>RecommendedScreen Screen</Heading>
    </ScreenTemplate>
  )
}

RecommendedScreen.propTypes = {
  route: PropTypes.object,
}

export default RecommendedScreen
