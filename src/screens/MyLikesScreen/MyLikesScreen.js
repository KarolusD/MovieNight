import PropTypes from 'prop-types'
import React, { useContext, useEffect, useState } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { MY_LIKES } from '_api/constants'
import Poster from '_components/Poster/Poster'
import ScreenTemplate from '_templates/ScreenTemplate/ScreenTemplate'
import { Dimensions } from 'react-native'
import TopGradient from '_components/TopGradient/TopGradient'

const { width } = Dimensions.get('window')
const POSTER_WIDTH = 74

const PostersGrid = styled.FlatList`
  left: ${({ numColumns }) =>
    `${width / 2 - (numColumns * (POSTER_WIDTH + 16) - 16) / 2}px`};
  padding-top: 180px;
  width: 100%;
`

const PosterButton = styled.TouchableOpacity``

const MyLikesScreen = ({ navigation }) => {
  const theme = useContext(ThemeContext)

  const [numColumns, setNumColumns] = useState(4)

  useEffect(() => {
    if (width <= 360) {
      setNumColumns(3)
    }
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
              navigation.navigate('Film details', { title: 'My likes' })
            }
          >
            <Poster
              style={{
                marginBottom: 16,
                marginRight: 16,
              }}
              size="medium"
              uri={item}
            />
          </PosterButton>
        )}
      />
      <TopGradient color={theme.colors.background} height="190px" />
    </ScreenTemplate>
  )
}

export default MyLikesScreen
