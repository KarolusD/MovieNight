import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'
import { HeartIcon } from '_assets/svgs/icons'
import ScreenTemplate from '_templates/ScreenTemplate/ScreenTemplate'
import {
  View,
  Dimensions,
  StyleSheet,
  Button,
  TouchableOpacity,
  Text,
} from 'react-native'

import { ButtonText } from '_components/Typography'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'

const Heading = styled.Text`
  font-family: ${({ theme }) => theme.fonts.prompt.semibold};
  font-size: ${({ theme }) => theme.fonts.sizes.h1};
`

const StyledTabBar = styled(TabBar)`
  background: ${({ theme }) => theme.colors.pureBg};
  width: 278px;
  height: 52px;
  position: absolute;
  top: 120px;
  border-radius: 28px;
`

const Label = styled(ButtonText)`
  color: ${({ focused, theme }) =>
    focused ? theme.colors.info : theme.colors.gray};
`

const renderTabBar = (props) => {
  return (
    <StyledTabBar
      renderLabel={({ route, focused }) => (
        <Label focused={focused}>{route.title}</Label>
      )}
      indicatorStyle={{
        borderRadius: 22,
        margin: 4,
        height: 44,
        width: 131,
        backgroundColor: 'blue',
      }}
      {...props}
    />
  )
}

const initialLayout = { width: Dimensions.get('window').width }

const FavouritesScreen = ({ route }) => {
  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: 'first', title: 'My likes' },
    { key: 'second', title: 'Recommended' },
  ])

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  })
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
    />
  )
}

const styles = StyleSheet.create({
  scene: {
    width: '100%',
    height: '100%',
  },
})

FavouritesScreen.propTypes = {
  route: PropTypes.object,
}

export default FavouritesScreen
