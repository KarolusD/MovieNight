import React, { useContext, useEffect, useState } from 'react'
import { Dimensions, FlatList } from 'react-native'
import styled, { ThemeContext } from 'styled-components/native'
import { MY_LIKES } from '_api/constants'
import Poster from '_components/Poster/Poster'
import TopGradient from '_components/TopGradient/TopGradient'
import { MainNavigationProps } from '_navigation/MainNavigation/types'
import ScreenTemplate from '_templates/ScreenTemplate'
import { useNavigation } from '@react-navigation/native'

const { width } = Dimensions.get('window')
const POSTER_WIDTH = 74

type ItemT = string

type PosterGridT = {
  numColumns: number
}

const PostersGrid = styled(FlatList as new () => FlatList<ItemT>)<PosterGridT>`
  left: ${({ numColumns }) =>
    `${width / 2 - (numColumns * (POSTER_WIDTH + 16) - 16) / 2}px`};
  padding-top: 140px;
  width: 100%;
`

const PosterButton = styled.TouchableOpacity``

const PosterStyle = {
  marginBottom: 16,
  marginRight: 16,
}

const MyLikesScreen: React.FC<MainNavigationProps<'Favourites'>> = () => {
  const navigation = useNavigation()
  const theme = useContext(ThemeContext)
  const [numColumns, setNumColumns] = useState(4)

  useEffect(() => {
    if (width <= 360) {
      setNumColumns(3)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width])

  return (
    <ScreenTemplate>
      <PostersGrid
        contentInset={{ bottom: 240 }}
        data={MY_LIKES}
        numColumns={numColumns}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <PosterButton
            onPress={() =>
              navigation.navigate('FilmDetails', { title: 'My likes' })
            }
          >
            <Poster style={PosterStyle} size="medium" uri={item} />
          </PosterButton>
        )}
      />
      <TopGradient color={theme.colors.background} height={188} />
    </ScreenTemplate>
  )
}

export default MyLikesScreen
