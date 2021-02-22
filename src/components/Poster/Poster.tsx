import React from 'react'
import { ImageStyle, StyleProp } from 'react-native'
import styled from 'styled-components/native'

const Image = styled.Image<Props>`
  border-radius: ${({ size }) => {
    if (size === 'large') return '12px'
    if (size === 'medium') return '12px'
    if (size === 'small') return '8px'
    return null
  }};
  height: ${({ size }) => {
    if (size === 'large') return '200px'
    if (size === 'medium') return '108px'
    if (size === 'small') return '60px'
    return null
  }};
  width: ${({ size }) => {
    if (size === 'large') return '132px'
    if (size === 'medium') return '74px'
    if (size === 'small') return '40px'
    return null
  }};
`
interface Props {
  size: 'large' | 'medium' | 'small'
  style?: StyleProp<ImageStyle>
}

const Poster: React.FC<Props & { uri: string }> = ({ size, style, uri }) => {
  return <Image size={size} source={{ uri }} style={style} />
}

export default Poster
