import { useNavigation } from '@react-navigation/native'
import React, { useContext, useEffect, useState } from 'react'
import { Dimensions, FlatList, Platform } from 'react-native'
import styled, { ThemeContext } from 'styled-components/native'
import { MY_LIKES } from '_api/constants'
import Gradient from '_components/Gradient/Gradient'
import Poster from '_components/Poster/Poster'
import { BottomNavigationProps } from '_navigation/BottomNavigation/types'
import ScreenTemplate from '_templates/ScreenTemplate'

const { width } = Dimensions.get('window')
const POSTER_WIDTH = 74
const GRADIENT_HEIGHT = Platform.OS === 'ios' ? 188 : 164

const GradientWrapper = styled.View<{ height: number }>`
  position: absolute;
  top: 0;
  width: 100%;
  height: ${({ height }) => `${height}px`};
`

interface IItem {
  _id: string
  poster: string
}

interface IPosterGrid {
  numColumns: number
}

const PostersGrid = styled(FlatList as new () => FlatList<IItem>)<IPosterGrid>`
  left: ${({ numColumns }) =>
    `${width / 2 - (numColumns * (POSTER_WIDTH + 16) - 16) / 2}px`};
  width: 100%;
`

const PosterButton = styled.TouchableOpacity``

const PosterStyle = {
  marginBottom: 16,
  marginRight: 16,
}

const MyLikesScreen: React.FC<BottomNavigationProps<'Favourites'>> = () => {
  const navigation = useNavigation()
  const theme = useContext(ThemeContext)
  const [numColumns, setNumColumns] = useState(4)

  useEffect(() => {
    if (width <= 360) {
      setNumColumns(3)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width])

  const contentContainerStyle = {
    paddingTop: Platform.OS === 'ios' ? 180 : 164,
    paddingBottom: MY_LIKES.length > 15 ? 300 : 0,
  }

  return (
    <ScreenTemplate>
      <PostersGrid
        contentContainerStyle={contentContainerStyle}
        data={MY_LIKES}
        numColumns={numColumns}
        keyExtractor={(item) => item._id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <PosterButton
            onPress={() => navigation.navigate('FilmDetails', { item })}
          >
            <Poster style={PosterStyle} size="medium" uri={item.poster} />
          </PosterButton>
        )}
      />
      <GradientWrapper height={GRADIENT_HEIGHT}>
        <Gradient
          colors={[theme.colors.background, theme.colors.background]}
          locations={[0.85, 1]}
          opacity={[1, 0]}
        />
      </GradientWrapper>
    </ScreenTemplate>
  )
}

export default MyLikesScreen
