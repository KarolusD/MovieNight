import React, { useState } from 'react'
import styled from 'styled-components'
import ScreenTemplate from '_templates/ScreenTemplate/ScreenTemplate'
import PropTypes from 'prop-types'
import Poster from '_components/Poster/Poster'
import { MY_LIKES } from '_api/constants'
import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const PostersGrid = styled.View`
  display: flex;
  position: relative;
  flex-flow: row wrap;
  left: ${({ width, gridWidth }) =>
    width && gridWidth ? `${width / 2 - gridWidth / 2}px` : 0};
  justify-content: flex-start;
  padding: 0 16px;
  max-width: 392px;
`

const MyLikesScreen = ({ route, navigation }) => {
  const [gridWidth, setGridView] = useState(0)

  const findDimesions = (layout) => {
    const { width: layoutWidth } = layout
    setGridView(layoutWidth)
  }

  return (
    <ScreenTemplate paddingTop="180px">
      <PostersGrid
        width={width}
        gridWidth={gridWidth}
        onLayout={(event) => {
          findDimesions(event.nativeEvent.layout)
        }}
        width={width}
      >
        {MY_LIKES.map((posterUrl, i) => (
          <Poster
            size="medium"
            uri={posterUrl}
            style={{
              marginLeft: 16,
              marginBottom: 16,
            }}
          />
        ))}
      </PostersGrid>
    </ScreenTemplate>
  )
}

MyLikesScreen.propTypes = {
  route: PropTypes.object,
}

export default MyLikesScreen
