import React from 'react'
import styled from 'styled-components/native'
import { ImageSourcePropType, Image as NativeImage } from 'react-native'

const StyledImage = styled(NativeImage)<Props>`
  height: ${({ height }) => (height ? `${height}px` : '100px')};
  width: ${({ width }) => (width ? `${width}px` : '100px')};
`

interface Props {
  height: number
  width: number
  source: ImageSourcePropType
}

const Image: React.FC<Props> = ({ height, width, source }) => {
  return (
    <StyledImage
      height={height}
      width={width}
      source={source}
      resizeMode="cover"
    />
  )
}

export default Image
