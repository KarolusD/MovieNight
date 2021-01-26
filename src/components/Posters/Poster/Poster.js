import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Image = styled.Image`
  border-radius: ${({ size }) => {
    if (size === 'large') return '16px'
    if (size === 'medium') return '8px'
    if (size === 'small') return '6px'
  }};
  margin-right: ${({ theme }) => theme.spacing.s};
  height: ${({ size }) => {
    if (size === 'large') return '200px'
    if (size === 'medium') return '108px'
    if (size === 'small') return '60px'
  }};
  width: ${({ size }) => {
    if (size === 'large') return '132px'
    if (size === 'medium') return '74px'
    if (size === 'small') return '40px'
  }};
`
const Poster = ({ size, uri }) => {
  return <Image size={size} source={{ uri }} />
}

Poster.propTypes = {
  size: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired,
}

export default Poster
