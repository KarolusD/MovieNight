import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Poster from './Poster/Poster'

const PostersList = styled.FlatList`
  padding-left: ${({ theme }) => theme.spacing.m};
`

const Posters = ({ data, posterSize }) => {
  // TODO: Scroll to start when changing tabs
  return (
    <PostersList
      contentContainerStyle={{ paddingRight: 16 }}
      data={data}
      keyExtractor={(item) => item.title}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <Poster
          onPress={() => {
            console.log(item, index)
          }}
          size={posterSize}
          uri={item.poster}
        />
      )}
    />
  )
}

Posters.propTypes = {
  data: PropTypes.array.isRequired,
  posterSize: PropTypes.string.isRequired,
}

export default Posters
