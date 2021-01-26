import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledImage = styled.Image`
  height: ${({ height }) => (height ? `${height}px` : '100px')};
  width: ${({ width }) => (width ? `${width}px` : '100px')};
`
const Image = ({ height, width, source }) => {
  return (
    <StyledImage
      height={height}
      width={width}
      source={source}
      resizeMode="contain"
    />
  )
}

Image.propTypes = {
  width: PropTypes.number,
  source: PropTypes.node.isRequired,
}

export default Image
