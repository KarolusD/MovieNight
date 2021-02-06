import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Poster from '_components/Poster/Poster'

const PostersList = styled.FlatList`
  padding-left: ${({ theme }) => theme.spacing.m};
`

const PostersCarousel = ({ data, posterSize }) => {
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
          style={{
            marginLeft: 16,
          }}
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

PostersCarousel.propTypes = {
  data: PropTypes.array.isRequired,
  posterSize: PropTypes.string.isRequired,
}

export default PostersCarousel
