import PropTypes from 'prop-types'
import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import Poster from '_components/Poster/Poster'

const PostersList = styled.FlatList`
  padding-left: ${({ theme }) => theme.spacing.m};
`

const PosterButton = styled.TouchableOpacity``

const PostersCarousel = ({ data, posterSize, title, toggle }) => {
  const PostersListRef = useRef(null)

  useEffect(() => {
    PostersListRef?.current?.scrollToOffset({ offset: 0, animated: true })
  }, [data])

  return (
    <PostersList
      contentContainerStyle={{ paddingRight: 16 }}
      data={data}
      keyExtractor={(item) => item.title}
      horizontal
      showsHorizontalScrollIndicator={false}
      ref={PostersListRef}
      renderItem={({ item, index }) => (
        <PosterButton onPress={() => toggle(title)}>
          <Poster
            style={{
              marginRight: 16,
            }}
            onPress={() => {
              console.log('elo z poster list')
            }}
            size={posterSize}
            uri={item.poster}
          />
        </PosterButton>
      )}
    />
  )
}

PostersCarousel.propTypes = {
  data: PropTypes.array.isRequired,
  posterSize: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
}

export default PostersCarousel
