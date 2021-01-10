import React from 'react'
import styled from 'styled-components'
import ScreenTemplate from '_templates/ScreenTemplate/ScreenTemplate'
import { HeartIcon } from '_assets/svgs/icons'

const Heading = styled.Text`
  font-family: ${({ theme }) => theme.fonts.prompt.semibold};
  font-size: ${({ theme }) => theme.fonts.sizes.h1};
`

const FavouritesScreen = ({ route }) => {
  return (
    <ScreenTemplate title={route.name}>
      <HeartIcon color="blue" filled />
      <Heading>Favourites Screen</Heading>
    </ScreenTemplate>
  )
}

export default FavouritesScreen
