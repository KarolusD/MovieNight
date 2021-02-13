import React from 'react'
import styled from 'styled-components'
import { LinearGradient } from 'expo-linear-gradient'
import convert from 'color-convert'

const StyledGradient = styled(LinearGradient)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ height }) => height};
`

const TopGradient = ({ color, height }) => {
  return (
    <StyledGradient
      colors={[color, `rgba(${convert.hex.rgb(color)}, 0)`]}
      height={height}
      locations={[0.8, 1]}
    />
  )
}

export default TopGradient
