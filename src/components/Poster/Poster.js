import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Image = styled.Image`
  border-radius: ${({ size }) => {
    if (size === 'large') return '12px'
    if (size === 'medium') return '12px'
    if (size === 'small') return '8px'
  }};
  height: ${({ size }) => {
    if (size === 'large') return '200px'
    if (size === 'medium') return '108px'
    if (size === 'small') return '60px'
  }};
  margin: ${({ margin }) => (margin ? `${margin}` : 0)};
  width: ${({ size }) => {
    if (size === 'large') return '132px'
    if (size === 'medium') return '74px'
    if (size === 'small') return '40px'
  }};
`
const Poster = ({ size, style, uri }) => {
  return <Image size={size} source={{ uri }} style={style} />
}

Poster.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  uri: PropTypes.string.isRequired,
}

export default Poster
