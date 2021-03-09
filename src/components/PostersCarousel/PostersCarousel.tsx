import React, { useEffect, useRef } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import Poster from '_components/Poster/Poster'
import { useNavigation } from '@react-navigation/native'

const PostersList = styled(FlatList as new () => FlatList<IItem>)`
  padding-left: ${({ theme }) => theme.spacing.m};
`

const PosterButton = styled.TouchableOpacity``

const contentContainerStyle = {
  paddingRight: 16,
}

const posterStyle = {
  marginRight: 16,
}

interface IItem {
  title: string
  poster: string
}

interface Props {
  data: Array<any>
  posterSize: 'small' | 'large' | 'medium'
  title: string
}

const PostersCarousel: React.FC<Props> = ({ data, posterSize, title }) => {
  const navigation = useNavigation()

  const PostersListRef = useRef<FlatList<IItem> | null>(null)

  useEffect(() => {
    PostersListRef?.current?.scrollToOffset({ offset: 0, animated: true })
  }, [data])

  return (
    <PostersList
      contentContainerStyle={contentContainerStyle}
      data={data}
      keyExtractor={(item) => item.title}
      horizontal
      showsHorizontalScrollIndicator={false}
      ref={PostersListRef}
      renderItem={({ item }) => (
        <PosterButton
          onPress={() => navigation.navigate('FilmDetails', { title })}
        >
          <Poster style={posterStyle} size={posterSize} uri={item.poster} />
        </PosterButton>
      )}
    />
  )
}

export default PostersCarousel
