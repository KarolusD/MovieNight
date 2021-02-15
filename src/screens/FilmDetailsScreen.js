import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { PlayIcon } from '_assets/svgs/icons'
import ScreenTemplate from '_templates/ScreenTemplate/ScreenTemplate'

const Heading = styled.Text`
  font-family: ${({ theme }) => theme.fonts.prompt.semibold};
  font-size: ${({ theme }) => theme.fonts.sizes.h1};
`

const FilmDetailsScreen = () => {
  return (
    <ScreenTemplate container="scroll">
      <PlayIcon color="blue" filled />
      <Heading>Film details Screen</Heading>
    </ScreenTemplate>
  )
}

export default FilmDetailsScreen
