import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'
import { HeartIcon } from '_assets/svgs/icons'
import ScreenTemplate from '_templates/ScreenTemplate/ScreenTemplate'
import { View, Dimensions } from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view'

const Heading = styled.Text`
  font-family: ${({ theme }) => theme.fonts.prompt.semibold};
  font-size: ${({ theme }) => theme.fonts.sizes.h1};
`

const FavouritesScreen = ({ route }) => {
  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ])

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  })
  return (
    <ScreenTemplate>
      <HeartIcon color="blue" filled />
      <Heading>Favourites Screen</Heading>
    </ScreenTemplate>
  )
}

FavouritesScreen.propTypes = {
  route: PropTypes.object,
}

export default FavouritesScreen
