import React from 'react'
import styled from 'styled-components'
import ScreenTemplate from '_templates/ScreenTemplate/ScreenTemplate'
import { PlayIcon } from '_assets/svgs/icons'

const Heading = styled.Text`
  font-family: ${({ theme }) => theme.fonts.prompt.semibold};
  font-size: ${({ theme }) => theme.fonts.sizes.h1};
`

const MoviesScreen = ({ route }) => {
  return (
    <ScreenTemplate title={route.name}>
      <PlayIcon color="blue" filled />
      <Heading>Movies Screen</Heading>
    </ScreenTemplate>
  )
}

export default MoviesScreen
