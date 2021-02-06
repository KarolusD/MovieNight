import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'
import { HeartIcon } from '_assets/svgs/icons'
import ScreenTemplate from '_templates/ScreenTemplate/ScreenTemplate'
import {
  View,
  Dimensions,
  StyleSheet,
  Button,
  TouchableOpacity,
  Text,
} from 'react-native'

const Heading = styled.Text`
  font-family: ${({ theme }) => theme.fonts.prompt.semibold};
  font-size: ${({ theme }) => theme.fonts.sizes.h1};
`

const FavouritesScreen = ({ route }) => {
  return (
    <ScreenTemplate>
      <Text style={{ color: white }}>Siema</Text>
    </ScreenTemplate>
  )
}

FavouritesScreen.propTypes = {
  route: PropTypes.object,
}

export default FavouritesScreen
