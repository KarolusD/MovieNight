import React from 'react'
import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import convert from 'color-convert'

const StyledGradient = styled(LinearGradient)<IGradient>`
  position: absolute;
  bottom: ${({ position }) => (position?.bottom ? `${position.bottom}px` : 0)};
  top: ${({ position }) => (position?.top ? `${position.top}px` : 0)};
  right: ${({ position }) => (position?.right ? `${position.right}px` : 0)};
  left: ${({ position }) => (position?.left ? `${position.left}px` : 0)};
  height: ${({ height }) => `${height}px`};
  width: ${({ width }) => (width ? `${width}px` : '100%')};
`

interface IGradient {
  height: number
  width?: number
  position?: {
    bottom?: number
    top?: number
    left?: number
    right?: number
  }
}

interface Props extends IGradient {
  colors: string[]
  locations: number[]
  opacity: number[]
}

const Gradient: React.FC<Props> = ({
  colors,
  height,
  locations,
  opacity,
  width,
}) => {
  return (
    <StyledGradient
      colors={colors.map(
        (color, i) => `rgba(${convert.hex.rgb(color)}, ${opacity[i]})`
      )}
      height={height}
      width={width}
      locations={locations}
    />
  )
}

export default Gradient
