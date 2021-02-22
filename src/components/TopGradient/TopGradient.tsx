import React from 'react'
import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import convert from 'color-convert'

const StyledGradient = styled(LinearGradient)<{ height: number }>`
  height: ${({ height }) => `${height}px`};
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`

type Props = {
  color: string
  height: number
}

const TopGradient: React.FC<Props> = ({ color, height }) => {
  return (
    <StyledGradient
      colors={[color, `rgba(${convert.hex.rgb(color)}, 0)`]}
      height={height}
      locations={[0.85, 1]}
    />
  )
}

export default TopGradient
