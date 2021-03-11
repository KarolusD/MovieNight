import React from 'react'
import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import convert from 'color-convert'

const StyledGradient = styled(LinearGradient)`
  height: 100%;
  width: 100%;
`

interface Props {
  colors: string[]
  locations: number[]
  opacity: number[]
}

const Gradient: React.FC<Props> = ({ colors, locations, opacity }) => {
  return (
    <StyledGradient
      colors={colors.map(
        (color, i) => `rgba(${convert.hex.rgb(color)}, ${opacity[i]})`
      )}
      locations={locations}
    />
  )
}

export default Gradient
